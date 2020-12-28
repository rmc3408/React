import React from 'react';
import './Header.css';
import Link from '../Link/Link';


function Header(props) {
    console.log(props);
    return (
        <header className="App-header">
            <img src={props.image} className='App-logo' alt='logo' />
            <Link url="https://github.com/rmc3408/React" title='Github Portfolio' />
        </header>
    )
}

export default Header;