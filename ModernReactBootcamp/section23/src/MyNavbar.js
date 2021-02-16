import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';


class MyNavbar extends Component {
    render() {
        return (
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link className="navbar-brand" to="/dogs">Dog Shelter</Link>
          
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav">
                {this.props.dogsName.map(name => 
                  <li className='nav-item'>
                    <NavLink key={name} className="nav-link" to={`/dogs/${name.toLowerCase()}`} > {name} </NavLink>
                  </li>
                ) }
              </ul>
          </div>
        </nav>
        )
    }
}

export default MyNavbar;
