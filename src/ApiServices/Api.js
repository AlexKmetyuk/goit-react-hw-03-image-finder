
const apiKey = '20385561-6a350e58d651a37e998e9aef4'
const baseURL = 'https://pixabay.com/api'

export const  fetchImages = (query = '', page = 1) => {
   return fetch(`${baseURL}/?q=${query}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`)
    .then(res => res.json())
}


