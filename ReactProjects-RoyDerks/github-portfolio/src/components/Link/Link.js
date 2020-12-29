import React from 'react';
import styled from 'styled-components';
import './Link.css';

const Innerlink = styled.a`
    text-decoration:none; 
    padding: 4vmin 0;
    color: #092424;`;

const Link = ({ url, title, size }) => (
  <div className='App-link'>
    <Innerlink
    //<a className='App-link'
    href={url}
    target='_blank'
    rel='noopener noreferrer'> {title} <span>{size > 0 ? `${(size/1024).toFixed(2)}Mb`: ''}</span>
  </Innerlink>
  </div>
);

export default Link;