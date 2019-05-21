import React from 'react';
import SearchBar from './SearchBar';
import youTube from '../apis/youTube';

// Class Component that will hold all of the different states for our application

class App extends React.Component {
  onSearchTermSubmit = (searchTerm) => {
    youTube.get('/search', {
      params: {
        q: searchTerm
      }
    });
  };

  render() {
    return (
    <div className="ui container">
      <SearchBar onFormSubmit={this.onSearchTermSubmit} />

    </div>
    );
  }
}

export default App;

