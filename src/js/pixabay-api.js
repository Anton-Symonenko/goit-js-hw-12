import axios from 'axios';


const API_KEY = '55951286-327cba65600a8883f26a5072e';

export async function getImagesByQuery(query , page = 1) {
    const baseUrl = 'https://pixabay.com';
    const endPoint = '/api/';
    const perPage = 15;

    const params = new URLSearchParams({
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: perPage,
        page,
    });

    const url = `${baseUrl}${endPoint}?${params}`;
    
    const response = await axios.get(url);

    return response.data;
}