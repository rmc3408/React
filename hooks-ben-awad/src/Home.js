import React, { useCallback, useState } from 'react'
import Hi from './Hi';

function Home() {
    const [count3, setCount3] = useState(0);

    const increment = useCallback(() => setCount3(c => c + 1), [setCount3]);

    return (
        <div>
            <h1>Count: { count3 }</h1>
            <Hi inc={increment} />
        </div>
    )
}

export default Home
