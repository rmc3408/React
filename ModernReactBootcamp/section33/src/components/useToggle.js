import { useState } from 'react'

function useToggle(init = false) {

    const [state, setState] = useState(init);

    const setToggle = () => {
        setState(!state)
    };
    return [state, setToggle];
}

export default useToggle
