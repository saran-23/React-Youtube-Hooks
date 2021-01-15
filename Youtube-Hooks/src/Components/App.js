import React, { useEffect, useState }  from 'react';
import SearchBar from './SearchBar';

import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import useVideos from '../Hooks/useVideos'

const App = () => {
    const [selectedVideo,setSelectedVideo]=useState(null);

   const [videos,search] = useVideos('Rich Dad Poor Dad English');  // custom hooks-useVideos
  

    useEffect(()=>{
    setSelectedVideo(videos[0]);            
    },[videos]);

   return (
    <div className="ui container">
      <SearchBar onFormSubmit={search} />
      {/* Number of videos is {this.state.videos.length} */}
        <div className="ui grid">
            <div className="ui row">
                <div className="eleven wide column">
                    <VideoDetail video={selectedVideo} />
                </div>
                <div className="five wide column">
                    <VideoList 
                    onVideoSelect={setSelectedVideo}  
                    videos={videos}
                      />
                 </div>
      </div>
      </div>
    </div>

);
      
};


export default App;