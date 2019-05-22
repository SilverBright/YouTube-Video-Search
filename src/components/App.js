import React from 'react';
import SearchBar from './SearchBar';
import youTube from '../apis/youTube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

// Class Component that will hold all of the different states for our application

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = { 
      videos: [], 
      selectedVideo: null 
    };
  }

  onSearchTermSubmit = async (searchTerm) => {
    const response = await youTube.get('/search', {
      params: {
        q: searchTerm
      }
    });

    this.setState({ videos: response.data.items });
  };

  // this callback will allow a child component (VideoList, VideoItem) to communicate BACK up to parent 
  // otherwise we just use props to communicate from parent to child in one direction
  onVideoSelect = (video) => {
    // console.log('from the App Component', video);
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
    <div className="ui container">
      <SearchBar onFormSubmit={this.onSearchTermSubmit} />
      {/* passing down a single instance of a video */}
      <VideoDetail video={this.state.selectedVideo} />
      {/* passing down the video selection option and an array of videos */}
      <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
    </div>
    );
  }
}

export default App;

