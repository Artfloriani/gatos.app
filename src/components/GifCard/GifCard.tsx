import * as React from 'react';
import './GifCard.css';
import { GifCardInterface } from './gifCard.interface';

const GifCard : React.SFC<GifCardInterface> = (props : GifCardInterface) => (
    <img className="GifCard" src={props.url} />
)

export default GifCard;

