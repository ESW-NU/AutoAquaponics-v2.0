import { useState, useEffect } from "react";
import { collection, query, orderBy, limit, onSnapshot, getDocs, startAfter, where } from "firebase/firestore";
import { db } from '../firebase';

export function useFetchRecentActivity(pageNum) {
  const pageLimit = 3;
  const [seenDocs, setSeenDocs] = useState([]); // this is a list of the last visible document on each page [page1, page2, page3, ...
  const [firstUnseenPage, setFirstUnseenPage] = useState(0);
  const [lastCursor, setLastCursor] = useState(null);

  useEffect(() => {
    async function fetchPaginatedActivity() {
        const numNewDocs = (pageNum-firstUnseenPage+1)*pageLimit;
        let q;
        if (lastCursor === null) {
          q = query(collection(db, "recent-activity"), orderBy("unix_time"), limit(numNewDocs));
        } else {
          q = query(collection(db, "recent-activity"), orderBy("unix_time"), startAfter(lastCursor), limit(numNewDocs));
        }
        const snapshot = await getDocs(q);
        const activity = convertActivitySnapshot(snapshot);
        console.log("activity", activity);
        setSeenDocs(prevDocs => {
          console.log("prevDocs", prevDocs);
          const newDocs = prevDocs.toSpliced(firstUnseenPage*pageLimit, numNewDocs, ...activity);
          console.log("newDocs", newDocs);
          return newDocs;
        });
        setFirstUnseenPage(pageNum+1);
        setLastCursor(snapshot.docs[snapshot.docs.length - 1]);
    }
    if (pageNum >= firstUnseenPage) {
      fetchPaginatedActivity();
    }
  }, [pageNum]);

  // useEffect(() => {
  //   const q = query(collection(db, "recent-activity"), orderBy("unix_time"), where('unix_time', '>', Math.floor((Date.now()) / 1000)));
  //   const unsubscribe = onSnapshot(q, (snapshot) => {
  //     const activity = convertActivitySnapshot(snapshot);
  //     // what if new doc during pagination?
  //     if (pageNum === 0) {
  //       setSeenDocs(activity);
  //       setLastCursor(snapshot.docs[snapshot.docs.length - 1]);
  //       setRecentActivity(activity);
  //       // to get the next page (page 2), we need the last visible document on the first page. so let's store that
  //       // we want to reset the entire dict to just hold this one value, because the snapshot may have changed and we have new data
  //       setLargestSeenPage(0);
  //     }
  //   });
  //   return () => unsubscribe();
  // }, []);
  console.log("seen docs", seenDocs);
  return seenDocs.slice(pageNum*pageLimit, pageNum*pageLimit + pageLimit)
}

function convertActivitySnapshot(snapshot) {
	return snapshot.docs.map(doc => ({
    ...doc.data()
	}));
}
