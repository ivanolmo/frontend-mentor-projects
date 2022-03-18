import axios from 'axios';

const GITHUB_URL = 'https://api.github.com/users/';

const github = axios.create({
  baseURL: GITHUB_URL,
});

export const getUser = async (text) => {
  const response = await github.get(`/${text}`);

  return response.data.items;
};
