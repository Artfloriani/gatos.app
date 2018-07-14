import * as React from "react";
import Emoji from "react-emoji-render";

import "./EmojiButton.css";

export interface EmojiButtonProps {
  query: string;
  text: string;
  selected?: boolean;
  gradientClass?: string;
  onClick: (text: string) => any;
}

class EmojiButton extends React.Component<EmojiButtonProps, any> {
  constructor(public props: EmojiButtonProps) {
    super(props);
  }

  public render() {
    const gClass = this.props.gradientClass ? this.props.gradientClass : "";
    const selectedClass = this.props.selected ? " selected" : "";
    return (
      <button
        className={"EmojiButton " + gClass + selectedClass}
        onClick={this.handleClick}
      >
        <Emoji text={this.props.text} />
      </button>
    );
  }

  private handleClick = () => {
    this.props.onClick(this.props.query);
  };
}

export default EmojiButton;
