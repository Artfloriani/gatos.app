import * as React from "react";

import { GifData } from "../../types/gifData.interface";
import GifCard from "../GifCard/GifCard";
import "./ResultsList.css";
import { ResultsListProps } from "./ResultsList.interface";

export default class ResultsList extends React.Component<
  ResultsListProps,
  any
> {
  constructor(props: ResultsListProps) {
    super(props);
  }

  public render() {
    const columns = this.splitInColumns(this.props.gifs);

    const columnElements = columns.map((el) => {
      return this.renderColumn(el);
    });
   
    return (
      <div className="ResultsList">
        <div className="ResultsList__results">
          { columnElements }
        </div>
      </div>
    );
  }

  public splitInColumns(array: any[], nColumns = 4)  {
    const columnSize = array.length >= nColumns ? Math.floor(array.length/nColumns) : 1;

    const emptyColumns = Array(nColumns).fill(null);

    const filledColumns = emptyColumns.map((el, index) => {
      const endCut =
        index < emptyColumns.length - 1 ? index * columnSize + columnSize : array.length;

      const resultArray = array.slice(index * columnSize, endCut);
      return index < array.length ? resultArray : null;
    });

    return filledColumns;
  }

  private renderGif(gifData: GifData) {
    return (
      <GifCard url={gifData.url} id={gifData.id} />
    )
  }

  private renderColumn(content : any[] | null) {
    const gifElements = content && content.length > 0 ? content.map((el) => {
      return this.renderGif(el);
    }) : null;
    return (
      <div className="ResultsList__column">
        { gifElements }
      </div>
    )
  }


}
