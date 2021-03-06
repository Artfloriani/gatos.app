import * as React from "react";
import "./App.css";

import { connect } from "react-redux";
import { requestGifs, selectFilter } from "../actions";
import FilterHeader from "../components/FilterHeader/FilterHeader";
import ResultsList from "../components/ResultsList/ResultsList";
import { GifsState } from "../types";
import { AppComponentProps } from "./App.interface";

import * as ReactGA from 'react-ga'

class App extends React.Component<AppComponentProps, {}> {
  constructor(public props: any) {
    super(props);

    ReactGA.initialize('UA-123385273-1');
    ReactGA.pageview('/home');
  }

  public componentDidMount() {
    // Types are throwing error, using any as workaround
    this.props.loadGifs();
    this.shouldRequestNewGifs = this.shouldRequestNewGifs.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  public render() {
    const { filter, gifs, isFetching } = this.props;

    return (
      <div className="App">
        <FilterHeader filter={filter} onChange={this.handleFilterChange} />
        <ResultsList
          gifs={gifs}
          loadMore={this.shouldRequestNewGifs}
          isFetching={isFetching}
        />
      </div>
    );
  }

  public shouldRequestNewGifs() {
    if (this.props && !this.props.isFetching) {
      this.props.loadGifs();
      ReactGA.event({
        action: 'Load More',
        category: 'Content',
        value: this.props.currentPage
      })
    }
  }

  public handleFilterChange(filter: string) {
    if (this.props) {
      this.props.updateFilter(filter);
      this.props.loadGifs();
      ReactGA.event({
        action: 'change',
        category: 'Filters',
        label: filter
      });
    }
  }
}

function mapStateToProps(state: GifsState) {
  const { isFetching, lastUpdated, gifs, filter, currentPage } = { ...state } || {
    currentPage: 0,
    filter: "awn",
    gifs: [],
    isFetching: true,
    lastUpdated: 0,
  };
  return {
    currentPage,
    filter,
    gifs,
    isFetching,
    lastUpdated
  };
}

const mapDispatchToProps = (dispatch: any) => ({
  loadGifs: () => dispatch(requestGifs()),
  updateFilter: (filter: string) => dispatch(selectFilter(filter))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
