import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-burger-bf05f-default-rtdb.firebaseio.com/'
});

export default instance;