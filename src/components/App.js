import React from 'react';
import SearchBar from './SearchBar';
import youTube from '../apis/youTube';
import VideoList from './VideoList';

// Class Component that will hold all of the different states for our application

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = { videos: [] };
  }

  onSearchTermSubmit = async (searchTerm) => {
    const response = await youTube.get('/search', {
      params: {
        q: searchTerm
      }
    });

    this.setState({ videos: response.data.items });
  };

  render() {
    return (
    <div className="ui container">
      <SearchBar onFormSubmit={this.onSearchTermSubmit} />
      <VideoList videos={this.state.videos} />
    </div>
    );
  }
}

export default App;

