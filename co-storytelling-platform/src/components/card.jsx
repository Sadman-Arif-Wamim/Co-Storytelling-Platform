import React from 'react';

const Card = ({ title, genre, likes, comments }) => {
    return (
        <div className="rounded-md overflow-hidden shadow-lg" style={{ background: 'linear-gradient(to bottom, #3498db, #ffffff)' }}>
            <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
                <p className="text-gray-600">{genre}</p>
            </div>
            <div className="px-6 py-4">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        {/* Icon for likes */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 4.999v9.04m0 0L12 15l3-1.961M9 14l-3-2m3-2.039l3-2.961-3 2.04z" />
                        </svg>
                        <span className="text-gray-600">{likes}</span>
                    </div>
                    <div className="flex items-center">
                        {/* Icon for comments */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 4.999v9.04m0 0L12 15l3-1.961M9 14l-3-2m3-2.039l3-2.961-3 2.04z" />
                        </svg>
                        <span className="text-gray-600">{comments}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
