import React from 'react';
import { posts } from '../data/posts';
import { Link } from 'react-router-dom';

export const Home = () => {
return (
  <div className="max-w-3xl mx-auto my-2 p-2">
    <ul>
      {
        posts.map(post => {
          return (
            <li key={post.id} className="border border-gray-300 p-2 my-2">
            <Link to={`/posts/${post.id}`}>
              <div className="text-gray-500 text-sm">{new Date(post.createdAt).toLocaleDateString()}</div>
              <div className="flex justify-end">
              {post.categories.map(category => {
                return (
                  <div key={category} className="text-blue-500 border border-blue-500 rounded mx-0.5 px-1">{category}</div>
                )
              })}
              </div>
              <div className="text-2xl font-bold my-2">{post.title}</div>
              <div className="text-sm my-2 text-overflow-ellipsis line-clamp-2" dangerouslySetInnerHTML={{ __html: post.content }}></div>
            </Link>
            </li>
          );
        })
      }
    </ul>
  </div>
);
}
