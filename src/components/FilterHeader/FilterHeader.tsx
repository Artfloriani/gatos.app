import * as React from "react";

import { FILTER_BUTTONS } from "../../constants";
import EmojiButton from "../EmojiButton/EmojiButton";
import "./FilterHeader.css";
import { FilterHeaderProps } from "./FilterHeader.interface";

export default class FilterHeader extends React.Component<
  FilterHeaderProps,
  any
> {
  constructor(props: FilterHeaderProps) {
    super(props);
  }

  public render() {

    const filterButtons = FILTER_BUTTONS.map((el, index) => {
      return (
        <EmojiButton
          onClick={this.props.onChange}
          selected={this.props.filter === el.searchQuery}
          text={el.text}
          query={el.searchQuery}
          key={index}
        />
      );
    });
    return (
      <div className="FilterHeader">
        <div className="FilterHeader__title">Meew mew meww?</div>

        <div className="FilterHeader__filters">
          { filterButtons }
        </div>
      </div>
    );
  }
}
