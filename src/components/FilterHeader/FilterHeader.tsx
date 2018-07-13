import * as React from "react";

import EmojiButton from "../EmojiButton/EmojiButton";
import "./FilterHeader.css";
import { FilterHeaderProps } from "./FilterHeader.interface";


export default class FilterHeader extends React.Component<FilterHeaderProps, any> {
  constructor(props: FilterHeaderProps) {
    super(props);
  }

  public render() {
    const {filter} = this.props;
    return (
      <div className="FilterHeader">
        {filter}
        <div className="FilterHeader__title">Meew mew meww?</div>

        <div className="FilterHeader__filters">
          <EmojiButton text=":joy_cat: Meeeww" />
          <EmojiButton text=":heart_eyes_cat: Mewmewmew" />
          <EmojiButton text=":crying_cat_face: Mew" />
        </div>
      </div>
    );
  }
}

