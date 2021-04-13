import React from 'react';
import useToggle from './hooks/useToggle';

function Toggler() {
    const [isHappy, toggleHappy] = useToggle(true);
    const [isLove, toggleLove] = useToggle(true);
    const [isFruit, toggleFruit] = useToggle(true);
    
    return (
        <div>
            <h1 onClick={toggleHappy}>{isHappy ? "😁" : "😭"}</h1>
            <h1 onClick={toggleLove}>{isLove ? "❤️️" : "💔"}</h1>
            <h1 onClick={toggleFruit}>{isFruit ? "🍉": "NO" }</h1>
        </div>
    )
}

export default Toggler
