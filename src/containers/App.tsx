import * as React from 'react';
import './App.css';

import { connect } from 'react-redux';
import { requestGifs } from '../actions';
import FilterHeader from '../components/FilterHeader/FilterHeader';
import ResultsList from '../components/ResultsList/ResultsList';

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
    return (
      <div className="App">
        <FilterHeader />
        <ResultsList />
      </div>
    );
  }
}

export default connect()(App);
