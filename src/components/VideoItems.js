import React from 'react';
import './VideoItems.css';

const VideoItems = ({ video, onVideoSelect }) => {
    return (
        <div className="video-item item" onClick={() => onVideoSelect(video)} >
            <img
                className="ui image" 
                src={ video.snippet.thumbnails.medium.url } 
                alt={ video.snippet.thumbnails.description }
            />
            <div className="content">
                { video.snippet.title }
            </div>
        </div>
    )
}

export default VideoItems