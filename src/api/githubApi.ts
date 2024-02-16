import axios from 'axios';

// From Github->Settings->Dev Settings->Fine-grained tokens
const AuthToken =
  'github_pat_...';

// In case you don't have the token, remove headers property
export const githubApi = axios.create({
  baseURL: 'https://api.github.com/repos/facebook/react',
  headers: {
    Authorization: `Bearer ${AuthToken}`,
  },
});
