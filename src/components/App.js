import React from 'react';
import SearchBar from './SearchBar';

// Class Component that will hold all of the different states for our application

class App extends React.Component {
  render() {
    return (
    <div className="ui container">
      <SearchBar />
    </div>
    );
  }
}

export default App;

