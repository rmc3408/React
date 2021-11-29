import React, { useState } from 'react'
import Hi from './Hi';

function Home() {
    const [count, setCount] = useState();
    return (
        <div>
            <Hi inc={setCount} />
        </div>
    )
}

export default Home
