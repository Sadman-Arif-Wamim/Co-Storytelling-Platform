import React, { useState } from 'react';
import Navbar from '../components/navbar';
import CommentSection from '../components/comment';

const StoryPage = () => {
    const [comments, setComments] = useState([
        {
            id: 1,
            author: 'User 1',
            text: 'This is the first comment.',
            replies: [
                {
                    id: 4,
                    author: 'User 2',
                    text: 'Reply to first comment.',
                    replies: []
                }
            ]
        },
        {
            id: 2,
            author: 'User 3',
            text: 'This is the second comment.',
            replies: [
                {
                    id: 4,
                    author: 'User 2',
                    text: 'Reply to first comment.',
                    replies: []
                }
            ]
        },
        {
            id: 3,
            author: 'User 4',
            text: 'This is the third comment.',
            replies: [
                {
                    id: 5,
                    author: 'User 5',
                    text: 'Reply to third comment.',
                    replies: [
                        {
                            id: 6,
                            author: 'User 6',
                            text: 'Reply to reply of third comment.',
                            replies: []
                        }
                    ]
                }
            ]
        }
    ]);
    const [showMainTextArea, setShowMainTextArea] = useState(false);
    const [commentText, setCommentText] = useState('');

    const [storyContent, setStoryContent] = useState(`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.`);

    const [isEditingStory, setIsEditingStory] = useState(false);

    const handleContinueEdit = () => {
        setIsEditingStory(!isEditingStory);
    };

    const handleStoryUpdate = () => {
        // Handle story update logic here 
        setIsEditingStory(false);
    };

    // Handler for submitting a new comment
    const handleSubmitComment = () => {
        // Create a new comment object with unique ID
        const newComment = {
            id: comments.length + 1, // Example: You can use a better method to generate unique IDs
            author: 'User', // Replace 'User' with the actual user's name or ID
            text: commentText,
            replies: [] // Nested replies for this comment
        };

        // Add the new comment to the list of comments
        setComments([...comments, newComment]);

        // Clear the comment text after submitting
        setCommentText('');
    };
    
    return (
        <>
            <Navbar />
            <div className="container mx-auto px-4 py-8">
                {/* Story Information Section */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">Title of the Story</h1>
                    <p className="text-sm text-gray-600 mb-2">By Author Name | Genre | Date Published</p>
                </div>

                {/* Story Content Section */}
                <div className="mb-8 w-3/4">
                    {isEditingStory ? (
                        <textarea
                            value={storyContent}
                            onChange={(e) => setStoryContent(e.target.value)}
                            className="w-full h-32 px-4 py-2 border border-gray-300 rounded-md resize-none"
                            placeholder="Update the story..."
                        />
                    ) : (
                        <p className="text-lg text-gray-800">{storyContent}</p>
                    )}
                </div>

                <div className="mb-8">
                    {/* Show the Continue button only if the author is viewing the story */}
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md mr-4">Upvote</button>
                    <button onClick={handleContinueEdit} className="bg-blue-500 text-white px-4 py-2 rounded-md mr-4">
                        {isEditingStory ? 'Cancel' : 'Continue'}
                    </button>
                    {/* Show the Update button only if the author is editing the story */}
                    {isEditingStory && (
                        <button onClick={handleStoryUpdate} className="bg-blue-500 text-white px-4 py-2 rounded-md">
                            Update
                        </button>
                    )}
                </div>



                {/* Comment Section */}
                <div>
                <div className="mt-8">
                    <textarea
                        value={commentText}
                        onChange={(e) => setCommentText(e.target.value)}
                        className={`w-full h-32 px-4 py-2 border border-gray-300 rounded-md resize-none ${showMainTextArea ? 'block' : 'hidden'}`}
                        placeholder="Add a comment..."
                    />
                    <button onClick={() => setShowMainTextArea(!showMainTextArea)} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md">
                        {showMainTextArea ? 'Hide Comment Box' : 'Add a comment'}
                    </button>
                    <button onClick={handleSubmitComment} className={`mt-2 bg-blue-500 text-white px-4 py-2 rounded-md ${showMainTextArea ? 'block' : 'hidden'}`}>
                        Submit
                    </button>
                </div>

                {/* Display comments */}
                <div className="mt-4">
                    <CommentSection comments={comments} />
                </div>
                </div>
            </div>
        </>
    );
};

export default StoryPage;

