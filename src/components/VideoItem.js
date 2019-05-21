import React from 'react';
import './VideoItem.css';

// Stateless functional component that will render a single video

// const VideoItem = props => {
  const VideoItem = ({ video }) => {
  return (
    <div className="video-item item">
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