import { useEffect, useState } from 'react'

export function useFetch(url) {

    const [result, setResult] = useState({ data: null, loading: true });

    useEffect(() => {
        fetch(url).then(x => x.text())
            .then(item => setResult(prevSt => ({
                loading: false,
                data: item
                })));
        
    }, [url])

    return result;
}
