import * as React from 'react';
import './GifCard.css';

function GifCard() {
  const randomHeight = {
    height: Math.random() * 250 + 100
  }
  return (
    <div style={randomHeight} className="GifCard" />
  );
}

export default GifCard;

