import axios from 'axios';

const pipeApi = axios.create({
  baseURL: 'https://api.pipedrive.com/v1/deals',
});

export default pipeApi;
