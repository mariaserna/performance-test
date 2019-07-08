/* eslint-disable jsx-a11y/anchor-is-valid, react/prop-types */
import React from 'react';
import Image from './Image';

const Card = ({
  title,
  image,
}) => (
  <div
    className="card"
    style={{
      margin: '1rem auto',
      width: '10rem',
    }}
  >
    <Image
      alt="Card cap"
      className="card-img-top"
      sizes={[282]}
      imageUrl={image}
    />
    <div className="card-body">
      <h5 className="card-title text-center">{title}</h5>
    </div>
  </div>
);

export default Card;
