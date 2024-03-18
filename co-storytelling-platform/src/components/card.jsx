import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faComments } from '@fortawesome/free-solid-svg-icons';

const Card = ({ title, genre, likes, comments }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-4">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-500 mb-4">{genre}</p>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <FontAwesomeIcon icon={faThumbsUp} className="text-blue-500 mr-2" />
          <span className="text-sm text-gray-600">{likes}</span>
        </div>
        <div className="flex items-center">
          <FontAwesomeIcon icon={faComments} className="text-blue-500 mr-2" />
          <span className="text-sm text-gray-600">{comments}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
