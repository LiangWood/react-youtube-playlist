import React from 'react';
import VideoItems from './VideoItems'

const VideoList = ({ videos, onVideoSelect }) => {

    const videosList = videos.map( video => {
       return <VideoItems 
                video={video} 
                key={video.id.videoId}
                onVideoSelect={onVideoSelect}
              />
    })

    return (
        <div className="ui list">{videosList}</div>
    )
}

export default VideoList