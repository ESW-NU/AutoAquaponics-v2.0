import {
  useState,
  useEffect
} from "react";
import {
    collection,
    getDocs,
    query,
    orderBy,
    where
} from 'firebase/firestore';
import {
    db
} from '../firebase';


export function useFetchStats(timescale) {
    let testTime = Math.floor((Date.now() - timescale)/1000);
    const [data, setData] = useState([]);
    const [tolerances, setTolerances] = useState([]);


    useEffect(() => {
        getDocs(
            query(
                collection(db, 'stats'),
                where('unix_time', '>', testTime),
                orderBy('unix_time', 'desc')
            )
        ).then(snapshot => {
            let dataTemp = snapshot.docs.map(doc => ({
                    ...doc.data(),
                    id: doc.id
            }))
            setData(dataTemp.reverse());
        })
    }, [timescale]);
    useEffect(() => {
        getDocs(
            query(
                collection(db, 'tolerances'),
            )
        ).then(snapshot => {
            let dataTemp = snapshot.docs.map(doc => ({
                    ...doc.data(),
                    id: doc.id
            }))
            setTolerances(dataTemp);
        })
    }, [timescale]);
    return {
        data, tolerances
    }
}