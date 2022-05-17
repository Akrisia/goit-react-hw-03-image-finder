import { http } from "./Api";

const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '25787045-a8ddf7324e727a4045d3f3d7c';

export const fetchImages = (query, page) => {
    return http.get(`${BASE_URL}/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`);
};