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


export function useFetchStats() {
    const [data, setData] = useState([])

    useEffect(() => {
        getDocs(
            query(
                collection(db, 'stats'),
                orderBy('unix_time', "desc"),
                limit(40)
            )
        ).then(snapshot => {
            setData(
                snapshot.docs.map(doc => ({
                    ...doc.data(),
                    id: doc.id
                }))
            )
        })
    }, []);

    return {
        data
    }
}