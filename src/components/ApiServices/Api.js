
const apiKey = '20385561-6a350e58d651a37e998e9aef4'
export const  fetchImages = (query = '', page = 1) => {
   return fetch(`https://pixabay.com/api/?q=${query}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`)
    .then(res => res.json())
}


ƒ