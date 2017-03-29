import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBMDaF8i8cI2R-2J68LQuZT9ozwJNlIZMM';

const App = () => {
  return ( <div>
    <SearchBar />
  </div>
  );
}

ReactDOM.render(<App />, document.querySelector('.container'));
