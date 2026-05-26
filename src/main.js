import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,} from './js/render-functions.js';

import './css/styles.css';



const searchForm = document.querySelector('.form');

const loadMoreBtn = document.querySelector('.load-more');

let currentQuery = '';
let currentPage = 1;

function showLoadMoreBtn() {
  loadMoreBtn.classList.remove('hidden');

}
function hideLoadMoreBtn() {
  loadMoreBtn.classList.add('hidden');
}

searchForm.addEventListener('submit', async event => {
  event.preventDefault();

currentQuery = event.target.elements["search-text"].value.trim();
  currentPage = 1;
  hideLoadMoreBtn();

  if (!currentQuery) return;
  clearGallery();
  showLoader();

  try {
    const data = await getImagesByQuery(currentQuery, currentPage);

   if (data.hits.length === 0) {
  iziToast.error({
    title: 'Error',
    message: 'Sorry, there are no images matching your search query. Please try again!',
  });

} else {
     createGallery(data.hits);
          const totalPagesLoaded = currentPage * 15;
    if (totalPagesLoaded >= data.totalHits) {
      hideLoadMoreBtn();
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
  });
} else {
  showLoadMoreBtn();
}
     
}
  }catch (error) {
    console.error(error);
    iziToast.error({
      title: 'Error',
      message: 'An error occurred while fetching images. Please try again later.',
    });
  }
  finally {
    hideLoader();
}

});

loadMoreBtn.addEventListener('click', async () => {
  currentPage += 1;

  showLoader();
  hideLoadMoreBtn();

  try {
    const data = await getImagesByQuery(currentQuery, currentPage);
createGallery(data.hits);
    const totalPagesLoaded = currentPage * 15;
    if (totalPagesLoaded >= data.totalHits) {
      hideLoadMoreBtn();
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
  });
} else {
  showLoadMoreBtn();
}
  } catch (error) {
    console.error(error);
    iziToast.error({
      title: 'Error',
      message: 'An error occurred while fetching images. Please try again later.',
    });
  } finally {
    hideLoader();
  }

});

