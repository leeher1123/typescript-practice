import axios from 'axios';

const accessToken = 'ru5TsUnyXPAqSAbjWb1h5zi6LnOI3qCQEvauSn2UkB4';

const axiosInstance = axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: `Client-ID ${accessToken}`,
  },
});

export const API = {
  getPhotos: (url: string, params: object) => axiosInstance.get(url, params),
};
