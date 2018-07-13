import * as React from 'react';
import GifCard from '../GifCard/GifCard';

import './ResultsList.css'


function ResultsList() {
  return (
    <div className="ResultsList">

      <div className="ResultsList__results">
        <div className="ResultsList__column">
          <GifCard />
          <GifCard />
          <GifCard />
        </div>
        <div className="ResultsList__column">
          <GifCard />
          <GifCard />
          <GifCard />
        </div>
        <div className="ResultsList__column">
          <GifCard />
          <GifCard />
          <GifCard />
        </div>
        <div className="ResultsList__column">
          <GifCard />
          <GifCard />
          <GifCard />
        </div>
        
      </div>
 
    </div>
  );
}

export default ResultsList;

