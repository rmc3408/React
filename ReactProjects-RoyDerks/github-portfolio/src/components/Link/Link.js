import React from 'react';
import styled from 'styled-components';
import './Link.css';

const Innerlink = styled.a`
    text-decoration:none; 
    display:inline;
    border-bottom: 1px solid graylight;
    color: #092424;`;

const Link = ({ url, title, size }) => (
  <div className='App-link'>
    <Innerlink
    //<a className='App-link'
    href={url}
    target='_blank'
    rel='noopener noreferrer'> {title} {size > 0 ? `${(size/1024).toFixed(2)}Mb`: ''} </Innerlink>
  </div>
);

export default Link;