// Card.js
import React from 'react';

const Card = ({ title, content, imageUrl }) => {
  return (
    <div className="bg-purple-900 shadow-md rounded-md p-2 border border-white">
      {imageUrl && (
        <img src={imageUrl} alt={title} className="flex justify-center items-center h-30 object-cover mb-6 rounded-md mx-auto" />
      )}
      <h2 className="text-2xl text-center w-56 font-semibold mb-2">{title}</h2>
      <p className="text-white text-3xl text-center ">{content}</p>
    </div>
  );
};

export default Card;
