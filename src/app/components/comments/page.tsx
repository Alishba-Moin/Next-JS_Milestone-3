"use client";
import { useState } from "react";

interface Comment {
  id: number;
  text: string;
}

const Comments = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState<string>("");

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([...comments, { id: comments.length + 1, text: newComment }]);
      setNewComment("");
    }
  };

  return (
    <div className="p-6 border rounded-lg shadow-lg bg-blue-50 mt-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-blue-800 mb-6">Comments</h2>
      <ul className="space-y-4 mb-4">
        {comments.map((comment) => (
          <li key={comment.id} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
            <p className="text-gray-800">{comment.text}</p>
          </li>
        ))}
      </ul>
      <div className="flex flex-col gap-3">
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment"
          className="border border-orange-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-300"
        />
        <button
          onClick={handleAddComment}
          className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors duration-300"
        >
          Add Comment
        </button>
      </div>
    </div>
  );
};

export default Comments;
