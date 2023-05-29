import axios from 'axios';

const defToken =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMTA1YTUyMWQ1MWJhNDgzYjEzYTM4MWQ5ZjFjZmEzNyIsInN1YiI6IjY0NWY3M2Y2ZGJiYjQyMDE3MGE4M2RhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qFoQRMTuK10jK92yLqNnFY2TmB99baNjUme7kHbrTFk';
const apiKey = 'a105a521d51ba483b13a381d9f1cfa37';
const instance = axios.create({
  baseURL: 'https://api.themoviedb.org',
});
const s = 'd59e4bbdf10052485a07950311596a9d';
const s1 = '39cf07322df27ec42a5e38eff7a6c232';
const tokenInterceptor = (config) => {
  config.headers.authorization = `Bearer ${defToken}`;
  return config;
};
const apiKeyInterceptor = (config) => {
  config.params = {
    ...config.params,
    api_key: apiKey,
  };
  return config;
};

instance.interceptors.request.use(apiKeyInterceptor);

export { instance };
