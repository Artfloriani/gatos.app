import * as React from "react";
import Emoji from "react-emoji-render";

import './EmojiButton.css'

export interface EmojiButtonProps {
  text: string;
  gradientClass?: string
}

function EmojiButton({ text, gradientClass }: EmojiButtonProps) {
    const gClass = gradientClass?  gradientClass : '';
  return (
    <button className={'EmojiButton ' + gClass}>
      <Emoji text={text} />
    </button>
  );
}

export default EmojiButton;
