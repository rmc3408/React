import React, { MouseEvent, useState } from 'react';

type counter = number;

const CountHooks = () => {
    
    const [count, setCount] = useState<counter>(0);
    
    const handleCounting = (e: MouseEvent) => {
        e.preventDefault();
        //console.log(e);
        setCount(count+1);
    };
    
    return (
          <div>
            <h2>Counting: {count}</h2>
            <button onClick={handleCounting} >PLUS ONE</button>
          </div>
    );
      
}

export default CountHooks;