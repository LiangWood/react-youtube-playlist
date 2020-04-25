import React, { useState, useEffect } from 'react'
import SearchBar from './SearchBar'
import Youtube from '../apis/Youtube'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'

const KEY = 'AIzaSyBx1jp8CLHaWsjkcYfR7rC2wPbI8lW_MPc'

const App = () => {

    const [videos, setVideos] = useState([])
    const [videoSelected, setVideoSelected] = useState("")

    // Set default search value
    useEffect(() => {
        onTermSubmit("react.js")
    }, [])

    const onTermSubmit = async term => {
        const response = await Youtube.get("/search", {
            params: {
            q: term,
            part: "snippet",
            maxResults: 5,
            type: 'video',
            key: `${KEY}`
            }
    });
        
        setVideos(response.data.items)
        setVideoSelected(response.data.items[0])
    }

    const onVideoSelect = video => {
        setVideoSelected(video)
    }

    return (
        <div className="ui container">
            <SearchBar onFormSubmit={onTermSubmit} />
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={videoSelected} />
                    </div>
                    <div className="five wide column">
                        <VideoList  videos={videos}  onVideoSelect={onVideoSelect}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App