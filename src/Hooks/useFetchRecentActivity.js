import { useState, useEffect } from "react";
import { collection, query, orderBy, limit, onSnapshot, getDocs, startAfter } from "firebase/firestore";
import { db } from '../firebase';

export function useFetchRecentActivity(page_number) {
	
  // snapshot listener only listening to the first page, otherwise there's no need to use a snapshot listener
  const pagination_limit = 1;
  const [recentActivity, setRecentActivity] = useState([]);
  const [seenCursors, setSeenCursors] = useState({});
  const [largestSeenPage, setLargestSeenPage] = useState(1);

  async function iterateThroughPages() {
    let currPage;
    for (let i = largestSeenPage; i < page_number; i++) {
      console.log("iterating through page", i);
      if (seenCursors[i] === undefined) {
        console.log("seenCursors[i] is undefined, breaking");
        break;
      }
      const new_q = query(collection(db, "recent-activity"), orderBy("unix_time"), startAfter(seenCursors[i]), limit(pagination_limit));
      currPage = await getDocs(new_q);
      setSeenCursors(prevCursors => {
        const updatedCursors = { ...prevCursors };
        updatedCursors[i+1] = currPage.docs[currPage.docs.length - 1];
        console.log("updatedCursors", updatedCursors);
        return updatedCursors;
      });
    }
    if (page_number > largestSeenPage) {
      setLargestSeenPage(page_number);
    }
  }

  useEffect(() => {
    
    async function fetchPaginatedActivity() {
      await iterateThroughPages();
      console.log("seenCursors", seenCursors);
      const new_q = query(collection(db, "recent-activity"), orderBy("unix_time"), startAfter(seenCursors[page_number-1]), limit(pagination_limit));
      const currPage = await getDocs(new_q);
      setRecentActivity(convertActivitySnapshot(currPage));
    }
    
    if (page_number > 1) { // this is 1 indexed because that is presumably what the pages will look like
      fetchPaginatedActivity();
    }
    
    const q = query(collection(db, "recent-activity"), orderBy("unix_time"), limit(pagination_limit));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const activity = convertActivitySnapshot(snapshot);
      if (page_number === 1) {
        setRecentActivity(activity);
        // for the next page (page 2), the last visible document is end of the first page. 
        // we want to reset the entire dict to just hold this one value, because the snapshot may have changed and we have new data
        setSeenCursors({1: snapshot.docs[snapshot.docs.length-1]}); 
        setLargestSeenPage(1);
      }
    });
    return () => unsubscribe();
  }, [page_number]);

  return recentActivity;
}

function convertActivitySnapshot(snapshot) {
	return snapshot.docs.map(doc => ({
    ...doc.data()
	}));
}
