import React from 'react';

const getImageUrl = (imageUrl, sizes) => `${imageUrl}?odnWidth=${sizes[0]}`;

const Image = ({
  alt,
  ariaHidden,
  className,
  imageUrl,
  sizes,
  style,
}) => (
  <img
    alt={alt}
    aria-hidden={ariaHidden}
    className={className}
    src={getImageUrl(imageUrl, sizes)}
    style={style}
  />
);

export default Image;
