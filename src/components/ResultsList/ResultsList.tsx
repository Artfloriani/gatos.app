import * as React from "react";

import { GifData } from "../../types/gifData.interface";
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
    const columns = this.props.gifs ? this.splitInColumns(this.props.gifs): [];

    const columnElements = columns.map((el, index) => {
      return this.renderColumn(el, index);
    });
    const loader = (
      <div className="loader" key={0}>
        Loading ...
      </div>
    );

    return (
      <InfiniteScroll
        pageStart={0}
        loadMore={this.handleInfiniteLoader}
        hasMore={true}
        loader={loader}
      >
        <div className="ResultsList">
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

  private handleInfiniteLoader() {
    if(this.props && !this.props.isFetching && this.props.loadMore){
      this.props.loadMore();
    }
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
    return <div className="ResultsList__column" key={index}>{gifElements}</div>;
  }
}
