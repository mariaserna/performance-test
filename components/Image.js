import React, { useContext } from 'react';
import DeviceContext from '../contexts/DeviceContext';

export const getSize = ({
  sizes,
  isMobile,
  isTablet,
}) => {
  const isDesktop = !isMobile && !isTablet;

  if (isDesktop) {
    return sizes[sizes.length - 1];
  }

  if (isTablet) {
    return sizes[1] ? sizes[1] : sizes[0];
  }

  return sizes[0];
};

// getSize({size: [1,2,3], isMobile: true, isTablet: false})

const getImageUrl = (imageUrl, size) => `${imageUrl}?odnWidth=${size}`;

const Image = ({
  alt,
  ariaHidden,
  className,
  imageUrl,
  sizes,
  style,
}) => {
  const {
    isMobile,
    isTablet,
  } = useContext(DeviceContext);

  const size = getSize({
    sizes,
    isMobile,
    isTablet,
  });

  console.log('Device', {
    isMobile,
    isTablet,
  });

  return (
    <img
      alt={alt}
      aria-hidden={ariaHidden}
      className={className}
      src={getImageUrl(imageUrl, size)}
      style={style}
    />
  );
};

export default Image;
