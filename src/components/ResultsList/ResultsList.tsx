import * as React from "react";

import { GifData } from "../../types/gif-data.interface";
import GifCard from "../GifCard/GifCard";
import "./ResultsList.css";
import { ResultsListProps } from "./ResultsList.interface";

import InfiniteScroll from "react-infinite-scroller";

export default class ResultsList extends React.Component<
  ResultsListProps,
  any
> {
  constructor(props: ResultsListProps) {
    super(props);
  }

  public render() {
    const columns = this.props.gifs ? this.splitInColumns(this.props.gifs) : [];

    const columnElements = columns.map((el, index) => {
      return this.renderColumn(el, index);
    });
    const loader = (
      <img
        src="https://media0.giphy.com/media/3E1ySyHWkio4Q7edHa/giphy.gif"
        key="loader-image-key"
      />
    );

    return (
      <InfiniteScroll
        pageStart={0}
        loadMore={this.props.loadMore}
        hasMore={true}
        loader={loader}
      >
        <div className="ResultsList">
          <a href="https://giphy.com/">
            <img
              className="ResultsList__giphy-logo"
              src={process.env.PUBLIC_URL + "/assets/img/giphy-logo.png"}
            />
          </a>
          <div className="ResultsList__results">{columnElements}</div>
        </div>
      </InfiniteScroll>
    );
  }

  public splitInColumns(array: any[], nColumns = 4) {
    const columnSize =
      array.length >= nColumns ? Math.floor(array.length / nColumns) : 1;

    const emptyColumns = Array(nColumns).fill(null);

    const filledColumns = emptyColumns.map((el, index) => {
      const endCut =
        index < emptyColumns.length - 1
          ? index * columnSize + columnSize
          : array.length;

      const resultArray = array.slice(index * columnSize, endCut);
      return index < array.length ? resultArray : null;
    });

    return filledColumns;
  }

  private renderGif(gifData: GifData) {
    return <GifCard url={gifData.url} key={gifData.id} />;
  }

  private renderColumn(content: any[] | null, index: number) {
    const gifElements =
      content && content.length > 0
        ? content.map(el => {
            return this.renderGif(el);
          })
        : null;
    return (
      <div className="ResultsList__column" key={index}>
        {gifElements}
      </div>
    );
  }
}
