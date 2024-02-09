import axios from 'axios';

const axiosApi = axios.create({
  baseURL: 'https://beksultanchomoev-js23-default-rtdb.firebaseio.com',
})

export default axiosApi;