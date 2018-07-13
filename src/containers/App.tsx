import * as React from 'react';
import './App.css';

import { connect } from 'react-redux';
import { requestGifs } from '../actions';
import FilterHeader from '../components/FilterHeader/FilterHeader';
import ResultsList from '../components/ResultsList/ResultsList';
import { ApplicationState } from '../types';

class App extends React.Component {
  constructor(props: any) {
    super(props);
  }


  public componentDidMount() {
    // Types are throwing error, using any as workaround
    const {dispatch} = this.props as any;
    dispatch(requestGifs('awn'));
  }

  public render() {
    const {filter, gifs} = this.props as any;

    return (
      <div className="App">
        <FilterHeader filter={filter} />
        <ResultsList gifs={gifs} />
      </div>
    );
  }
}

function mapStateToProps(state: ApplicationState) {
  const { handleFilter, handleGifs } = state
  const {
    isFetching,
    lastUpdated,
    gifs,
    filter
  } = {...handleFilter, ...handleGifs}|| {
    filter: 'awn',
    gifs: [],
    isFetching: true,
    lastUpdated: 0
  }
​
  return {
    filter,
    gifs,
    isFetching,
    lastUpdated
  }
}

export default connect(mapStateToProps)(App);
