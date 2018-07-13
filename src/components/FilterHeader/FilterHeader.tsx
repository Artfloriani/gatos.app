import * as React from 'react';


import EmojiButton from '../EmojiButton/EmojiButton';
import './FilterHeader.css'


function FilterHeader() {

  return (
    <div className="FilterHeader">
      <div className="FilterHeader__title">
        Meew mew meww?
      </div>

      <div className="FilterHeader__filters">
        <EmojiButton text=":smile_cat: Meww" /> 
        <EmojiButton text=":heart_eyes_cat: Mewmewmew" />
        <EmojiButton text=":crying_cat_face: Meeeww" />
        <EmojiButton text=":crying_cat_face: Meeeww" />
      </div>
 
    </div>
  );
}

export default FilterHeader;

