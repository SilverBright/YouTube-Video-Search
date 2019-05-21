import React from 'react';
import './VideoItem.css';

// Stateless functional component that will render a single video, with and image, and a title

// const VideoItem = props => {
// destruct the props into ({ videos, onVideoSelect }) - both of these props came from the parent component App.js
  const VideoItem = ({ video, onVideoSelect }) => {
  return (
    // We are passing in the prop, and passing in the video prop by using an arrow function
    <div onClick={() => onVideoSelect(video)} className="video-item item">
      <img className="ui image" src={video.snippet.thumbnails.medium.url} />
        <div className="content">
          <div className="header">
            {video.snippet.title}
          </div>
      </div>
    </div>
  );
};

export default VideoItem;