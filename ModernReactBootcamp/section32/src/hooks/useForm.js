import { useState } from 'react'

function useForm(init = '') {

    const [state, setState] = useState(init);

    const handleChange = (e) => {
        setState(e.target.value)
    };

    const resetChange = () => {
        setState('');
    };

    return [state, handleChange, resetChange];
}

export default useForm;
