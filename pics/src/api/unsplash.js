import axios from 'axios';

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID k-SSkH4vJzp2-l4ZCRL0k7fi14B5vu_ljNS9b-00Xuw",
  }
});
