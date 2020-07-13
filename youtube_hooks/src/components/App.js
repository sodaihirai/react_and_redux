import React, { useState, useEffect } from "react";
import youtube from "../api/youtube";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

export default () => {
  const [term, setTerm] = useState("石田ゆり子");
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState("");

  useEffect(() => {
    const searchVideo = async () => {
      const response = await youtube.get("/search", {
        params: {
          q: term,
          part: "snippet",
          key: "AIzaSyDiNh4NN0v1WYHtFOiug15CJgtDNEFQlBU",
        },
      });

      setVideos(response.data.items);
      setSelectedVideo(response.data.items[0]);
    };
    searchVideo();
  }, [term]);

  const onVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  const onTermSubmit = (term) => {
    setTerm(term)
  }

  return (
    <div className="ui container">
      <SearchBar onTermSubmit={onTermSubmit} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList videos={videos} onVideoSelect={onVideoSelect} />
          </div>
        </div>
      </div>
    </div>
  );
};
