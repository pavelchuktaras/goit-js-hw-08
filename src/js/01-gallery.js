// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line
const gallery = document.querySelector('.gallery');
const masive = [];

galleryItems.forEach((galleryItem, index) => {
  const itemGallery = document.createElement('li');
  const linkGallery = document.createElement('a');
  const imgGallery = document.createElement('img');

  itemGallery.classList.add('gallery__item');

  linkGallery.classList.add('gallery__link');
  linkGallery.src = galleryItem.original;
  linkGallery.href = galleryItem.original;

  imgGallery.classList.add('gallery__image');
  imgGallery.src = galleryItem.preview;
  imgGallery.alt = galleryItem.description;

  itemGallery.append(linkGallery);
  linkGallery.append(imgGallery);

  masive.push(itemGallery);
});

gallery.append(...masive);

const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});

console.log(gallery);
