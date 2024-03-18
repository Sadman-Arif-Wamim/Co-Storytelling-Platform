import React from 'react';
import Navbar from '../components/navbar';
import Card from '../components/card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faThumbsUp, faComment, faBook, faUpload } from '@fortawesome/free-solid-svg-icons';

const HomePage = () => {

    const cardsData = [
        { title: 'Story 1', genre: 'Fiction', likes: 10, comments: 5 },
        { title: 'Story 2', genre: 'Fantasy', likes: 15, comments: 7 },
        { title: 'Story 3', genre: 'Adventure', likes: 20, comments: 8 },
        { title: 'Story 1', genre: 'Fiction', likes: 10, comments: 5 },
        { title: 'Story 2', genre: 'Fantasy', likes: 15, comments: 7 },
        { title: 'Story 3', genre: 'Adventure', likes: 20, comments: 8 },
        { title: 'Story 1', genre: 'Fiction', likes: 10, comments: 5 },
        { title: 'Story 2', genre: 'Fantasy', likes: 15, comments: 7 },
        { title: 'Story 3', genre: 'Adventure', likes: 20, comments: 8 },
        { title: 'Story 1', genre: 'Fiction', likes: 10, comments: 5 },
        { title: 'Story 2', genre: 'Fantasy', likes: 15, comments: 7 },
        { title: 'Story 3', genre: 'Adventure', likes: 20, comments: 8 },
        // Add more card data as needed
    ];


    return (
        <>
            <Navbar />
            <div className="container mx-auto px-4 flex">
                <div className="mt-12 w-1/2 pr-4">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-8">Hello User!</h2>
                    <div className="w-full">
                        <p className="text-1xl font-semibold text-gray-800">Welcome to StoryWeave, your creative haven where storytelling comes to life! Whether you're a seasoned wordsmith or just starting your journey into the world of storytelling, StoryWeave provides the perfect platform to unleash your imagination. Dive into our collaborative storytelling community, where every line contributes to weaving intricate tales. Connect with fellow storytellers, embark on thrilling adventures, and let your creativity flow freely. Join us today and begin crafting your own captivating narratives, one line at a time.</p>
                    </div>
                </div>
                <div className="w-1/4"></div>
                <div className="mt-12 w-1/4 bg-gray-200 p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Story Stats</h3>
                    <div className="flex flex-col items-start">
                        <div className="flex items-center mb-2">
                            <FontAwesomeIcon icon={faBook} className="text-gray-600 mr-2" />
                            <span className="text-gray-800">Stories: 30</span>
                        </div>
                        <div className="flex items-center mb-2">
                            <FontAwesomeIcon icon={faUpload} className="text-gray-600 mr-2" />
                            <span className="text-gray-800">Publishes: 30</span>
                        </div>
                        <div className="flex items-center mb-2">
                            <FontAwesomeIcon icon={faArrowUp} className="text-gray-600 mr-2" />
                            <span className="text-gray-800">Upvotes: 100</span>
                        </div>
                        <div className="flex items-center mb-2">
                            <FontAwesomeIcon icon={faThumbsUp} className="text-gray-600 mr-2" />
                            <span className="text-gray-800">Likes: 50</span>
                        </div>
                        <div className="flex items-center mb-2">
                            <FontAwesomeIcon icon={faComment} className="text-gray-600 mr-2" />
                            <span className="text-gray-800">Comments: 30</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 mt-24">
            <div className="flex justify-between items-center mt-8 mb-4">
                <div>
                    <label htmlFor="filter" className="text-gray-600">Filter by:</label>
                    <select name="filter" id="filter" className="ml-2 px-2 py-1 border border-gray-300 rounded-md">
                        <option value="popularity">Popularity</option>
                        <option value="latest">Latest</option>
                        <option value="genre">Genre</option>
                    </select>
                </div>
                <div>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Apply Filter</button>
                </div>
            </div>
            </div>

            <div className="container mx-auto px-4">
                <div className="flex flex-wrap mt-24 -mx-4">
                    {cardsData.map((card, index) => (
                        <div key={index} className="w-1/4 px-4 mb-8">
                            <Card title={card.title} genre={card.genre} likes={card.likes} comments={card.comments} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default HomePage;
