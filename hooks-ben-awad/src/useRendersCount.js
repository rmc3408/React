import { useRef } from 'react'

function useRendersCount() {
    const renders = useRef(0);
    console.log('Hi compoment renders ', renders.current++);
}

export default useRendersCount



