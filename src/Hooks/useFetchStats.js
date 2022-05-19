import {
    collection,
    getDocs,
    limit,
    query
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
                limit(20)
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