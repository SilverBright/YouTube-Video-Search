import React from 'react';
import VideoItem from './VideoItem';

// Stateless functional component for videos

// const VideoList = (props) => {
// destruct the props into ({ videos, onVideoSelect }) - both of these props came from the parent component App.js
  const VideoList = ({ videos, onVideoSelect }) => {
    const renderedList = videos.map(video => {
      return (
        <VideoItem onVideoSelect={onVideoSelect} video={video} />
      )
    });

  return (
    <div className="ui relaxed divided list">
      {/* {props.videos.length} */}
      { renderedList }

    </div>
  );
}

export default VideoList;