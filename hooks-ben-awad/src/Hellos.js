import React, { useEffect, useLayoutEffect, useRef } from 'react'

function Hellos({ num }) {

    const divSize = useRef();
    const renders = useRef(num);

    useEffect(() => {
        renders.current = num;
    }, [num]);

    useLayoutEffect(() => {
        console.log(divSize.current.getBoundingClientRect())
    }, [num])

    return (
        <div ref={divSize} style={{ width: `${num + 100}px`, boxSizing: 'border-box', border: '2px solid black', backgroundColor: 'grey'}}>
            {renders.current}
        </div>
    )
}

export default Hellos
