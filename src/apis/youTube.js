import axios from 'axios';

const KEY = 'AIzaSyBBA1dEGrD2-RImE4VR2bJUMRWf1hiRts8';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});