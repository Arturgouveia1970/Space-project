import axios from 'axios';

export default axios.create({
  BASE_URL: 'https://api.spacexdata.com/v3',
  headers: {
    'Content-type': 'application/json',
  },
});
