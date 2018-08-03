import * as React from "react";
import "./GifCard.css";

import LazyLoad from "react-lazyload";
import { GifCardInterface } from "./gifCard.interface";

const GifCard: React.SFC<GifCardInterface> = (props: GifCardInterface) => (
  <LazyLoad height={200} offset={200}>
    <img className="GifCard" src={props.url} />
  </LazyLoad>
);

export default GifCard;
