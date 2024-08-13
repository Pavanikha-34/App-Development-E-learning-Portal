import React, { useState, useEffect } from 'react';
import '../../Assets/CSS/Forum.css';

const Forum = () => {
  const [user, setUser] = useState({ role: 'student' }); // Mock user with role 'student'
  const [categories, setCategories] = useState([
    { id: 1, name: 'General Discussion' },
    { id: 2, name: 'Course Topics' },
  ]);
  const [selectedCategory, setSelectedCategory] = useState(1);
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');

  const handlePostSubmit = (e) => {
    e.preventDefault();
    setPosts([...posts, { id: posts.length + 1, category: selectedCategory, content: newPost, comments: [] }]);
    setNewPost('');
  };

  const handleCommentSubmit = (postId, comment) => {
    setPosts(posts.map(post =>
      post.id === postId
        ? { ...post, comments: [...post.comments, comment] }
        : post
    ));
  };

  const handleDeletePost = (postId) => {
    setPosts(posts.filter(post => post.id !== postId));
  };

  return (
    <div className="forum-container">
      <h2>Discussion Forum</h2>
      <div className="categories">
        <h3>Categories</h3>
        <ul>
          {categories.map(category => (
            <li key={category.id} className={category.id === selectedCategory ? 'selected' : ''}
              onClick={() => setSelectedCategory(category.id)}>
              {category.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="new-post">
        <h3>Create a new post</h3>
        <form onSubmit={handlePostSubmit}>
          <textarea
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            placeholder="Write your post..."
          />
          <button type="submit">Post</button>
        </form>
      </div>
      <div className="posts">
        <h3>Posts</h3>
        {posts.filter(post => post.category === selectedCategory).map((post) => (
          <Post
            key={post.id}
            post={post}
            onCommentSubmit={handleCommentSubmit}
            onDelete={user.role === 'admin' || user.role === 'teacher' ? handleDeletePost : null}
          />
        ))}
      </div>
    </div>
  );
};

const Post = ({ post, onCommentSubmit, onDelete }) => {
  const [newComment, setNewComment] = useState('');

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    onCommentSubmit(post.id, newComment);
    setNewComment('');
  };

  return (
    <div className="post">
      <p>{post.content}</p>
      {onDelete && <button onClick={() => onDelete(post.id)}>Delete Post</button>}
      <div className="comments">
        <h4>Comments</h4>
        {post.comments.map((comment, index) => (
          <p key={index}>{comment}</p>
        ))}
        <form onSubmit={handleCommentSubmit}>
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Write a comment..."
          />
          <button type="submit">Comment</button>
        </form>
      </div>
    </div>
  );
};

export default Forum;
