import { useState, useEffect } from "react";
import { collection, query, orderBy, limit, onSnapshot, getDocs, startAfter } from "firebase/firestore";
import { db } from '../firebase';

export function useFetchRecentActivity(page_number) {
	
  // snapshot listener only listening to the first page, otherwise there's no need to use a snapshot listener
  const pagination_limit = 2;
  const [recentActivity, setRecentActivity] = useState([]);
  
  useEffect(() => {
    // currently this will loop through the pages every time starting from the first page. 
    // next step is to implement a way to keep track of the last visible document so that we can start from there and go next or previous page
    async function fetchPaginatedActivity() {
      let currentQuery = query(collection(db, "recent-activity"), orderBy("unix_time"), limit(pagination_limit));
      let currPage = await getDocs(currentQuery);
      let lastVisible = currPage.docs[currPage.docs.length-1];
      for (let i = 1; i < page_number; i++) {
        currentQuery = query(collection(db, "recent-activity"), orderBy("unix_time"), startAfter(lastVisible), limit(pagination_limit));
        currPage = await getDocs(currentQuery);
        lastVisible = currPage.docs[currPage.docs.length-1];
      }
      setRecentActivity(convertActivitySnapshot(currPage));
    }
    if (page_number > 1) {
      fetchPaginatedActivity();
    }
    const q = query(collection(db, "recent-activity"), orderBy("unix_time"), limit(pagination_limit));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const activity = convertActivitySnapshot(snapshot);
      if (page_number === 1) {
        setRecentActivity(activity);
      }
      // set last visible
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
