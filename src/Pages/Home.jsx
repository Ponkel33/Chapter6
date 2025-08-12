import React from 'react';
import { posts } from '../data/posts';
import '../styles/home.css';

export const Home = () => {
return (
  <div className="container">
    <ul>
      {
        posts.map(post => {
          return (
            <li key={post.id} className="post">
              <div className="postdate">{new Date(post.createdAt).toLocaleDateString()}</div>
              <div className="tags">
              {post.categories.map(category => {
                return (
                  <div key={category} className="categorytag">{category}</div>
                )
              })}
              </div>
              <div className="postTitle">{post.title}</div>
              <div className="postBody" dangerouslySetInnerHTML={{ __html: post.content }}></div>
            </li>
          );
        })
      }
    </ul>
  </div>
);
}
