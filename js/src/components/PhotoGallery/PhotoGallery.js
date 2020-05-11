import React from 'react';
import Gallery from 'react-photo-gallery';

const photos = [
  {
    src: 'https://picsum.photos/300/200',
    width: 5,
    height: 3,
  },
  {
    src: 'https://picsum.photos/200',
    width: 1,
    height: 1,
  },
  {
    src: 'https://picsum.photos/350/250',
    width: 4,
    height: 3,
  },
  {
    src: 'https://picsum.photos/300',
    width: 1,
    height: 1,
  },
];

const PhotoGallery = () => <Gallery photos={photos} />;

export default PhotoGallery;
