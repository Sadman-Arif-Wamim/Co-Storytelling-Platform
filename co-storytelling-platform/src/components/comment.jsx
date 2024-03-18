import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faUserCircle } from '@fortawesome/free-solid-svg-icons';

const Comment = ({ comment, onReply, level, isLast }) => {
    const [showReplies, setShowReplies] = useState(false);
    const [replyText, setReplyText] = useState('');
    const [showReplyBox, setShowReplyBox] = useState(false);
    const [upvotes, setUpvotes] = useState(comment.upvotes || 0); // Initial upvotes count

    const toggleReplies = () => {
        setShowReplies(prevState => !prevState);
    };

    const handleReply = () => {
        setShowReplyBox(!showReplyBox);
    };

    const handleSubmitReply = () => {
        // Handle submitting reply
        // Here you can implement the logic to add the reply to the comment object or send it to the server
        console.log('Reply submitted:', replyText);
        // Clear reply text
        setReplyText('');
        // Close reply box
        setShowReplyBox(false);
    };

    const handleUpvote = () => {
        // Handle upvoting the comment
        // You can implement the upvoting logic here
        setUpvotes(prevCount => prevCount + 1); // Increment upvotes count
    };

    return (
        <div className={`mb-4 ${level > 0 ? 'ml-8 pl-4 border-l-2 border-gray-400' : ''}`}>
            <div className="flex items-center">
                <FontAwesomeIcon icon={faUserCircle} className="text-gray-400 h-6 w-6 mr-2" />
                <p className="text-gray-800 font-semibold mr-2">{comment.author}</p>
                <p className="text-gray-600">{comment.text}</p>
                <button onClick={handleUpvote} className="ml-auto flex items-center">
                    <FontAwesomeIcon icon={faThumbsUp} className="text-blue-500 hover:text-blue-700" />
                    <span className="ml-1">{upvotes}</span>
                </button>
            </div>
            {level === 0 && <hr className={`my-2 border-gray-400 ${isLast ? 'hidden' : ''}`} />}
            <div className="mt-2">
                <button onClick={handleReply} className="text-blue-500 hover:text-blue-700">Reply</button>
                {showReplyBox && (
                    <div className="mt-2">
                        <textarea
                            value={replyText}
                            onChange={(e) => setReplyText(e.target.value)}
                            className="w-full h-16 px-4 py-2 border border-gray-300 rounded-md resize-none"
                            placeholder="Write a reply..."
                        />
                        <button onClick={handleSubmitReply} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md">Submit Reply</button>
                    </div>
                )}
            </div>
            {comment.replies.length > 0 && (
                <>
                    <button onClick={toggleReplies} className="text-gray-500 hover:text-gray-700">
                        {showReplies ? 'Hide Replies' : `View ${comment.replies.length} Replies`}
                    </button>
                    {showReplies && comment.replies.map((reply, index) => (
                        <Comment key={reply.id} comment={reply} level={level + 1} isLast={index === comment.replies.length - 1} />
                    ))}
                </>
            )}
        </div>
    );
};

const CommentSection = ({ comments }) => {
    return (
        <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Comments</h2>
            {comments.map((comment, index) => (
                <Comment key={comment.id} comment={comment} level={0} isLast={index === comments.length - 1} />
            ))}
        </div>
    );
};

export default CommentSection;
