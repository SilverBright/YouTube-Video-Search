import React from 'react';
import VideoItem from './VideoItem';

// Stateless functional component for videos

// const VideoList = (props) => {
// destruct the props into ({ videos })
  const VideoList = ({ videos }) => {
    const renderedList = videos.map(video => {
      return (
        <VideoItem video={video} />
      )
    });

  return (
    <div className="ui relaxed divided list">
      {/* {props.videos.length} */}
      {/* Now that we descrutured props we can just call videos */}
      { renderedList }
    </div>
  );
}

export default VideoList;