import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://baradelli.github.io/VB-money/api/',
});
