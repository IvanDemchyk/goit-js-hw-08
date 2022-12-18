// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const markup = galleryItems
  .map(
    ({ preview, description, original }) =>
      `<a href="${original}" class="gallery__link">
    <img class="gallery__image" src="${preview}" alt="${description}" ></a>
    `
  )
  .join('');

gallery.insertAdjacentHTML('beforeend', markup);

const lightBox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
