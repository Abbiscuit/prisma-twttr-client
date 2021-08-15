const API_URL = 'http://localhost:5000/v1';

const httpGetAllTweets = async () => {
  const resp = await fetch(`${API_URL}/tweets`);
  const data = await resp.json();
  return data;
};

export { httpGetAllTweets };
