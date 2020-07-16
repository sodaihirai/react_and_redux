import { useState, useEffect } from 'react';
import youtube from '../api/youtube';

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
        part: "snippet",
        key: "AIzaSyDiNh4NN0v1WYHtFOiug15CJgtDNEFQlBU",
      },
    });

    setVideos(response.data.items);
  };

  return [videos, search];
}

export default useVideos;
