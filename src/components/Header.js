import React from 'react';
import img from '../images/troll-face.png';

export default function Header() {
  return (
    <header className='header'>
      <img src={img} className='header--image' alt='troll face' />
      <h2 className='header--title'>Meme Generator</h2>
    </header>
  );
}
