import { useState } from 'react'

export function useForm(initial) {
    const [state, setstate] = useState(initial);


    return [state, (e) => setstate((prevSt) => ({
        ...prevSt,
        [e.target.name]: e.target.value
    }))];
}
