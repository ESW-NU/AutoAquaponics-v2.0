import {
    collection,
    getDocs,
    limit,
    query,
    orderBy
} from 'firebase/firestore';
import {
    useState,
    useEffect
} from 'react'
import {
    db
} from '../firebase';


export function useFetchStats(timescale) {
    let testTime = Math.floor((Date.now() - timescale)/1000);

    const [data, setData] = useState([])

    useEffect(() => {
        getDocs(
            query(
                collection(db, 'stats'),
                orderBy('unix_time', 'desc'),
                // where('unix_time', '>', testTime),
                limit(40)
            )
        ).then(snapshot => {
            let dataTemp = snapshot.docs.map(doc => ({
                    ...doc.data(),
                    id: doc.id
            }))
            setData(dataTemp.reverse());
        })
    }, []);

    return {
        data
    }
}