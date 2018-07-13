import * as React from 'react';
import './App.css';

import FilterHeader from './components/FilterHeader/FilterHeader';
import ResultsList from './components/ResultsList/ResultsList';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <FilterHeader />
        <ResultsList />
      </div>
    );
  }
}

export default App;
