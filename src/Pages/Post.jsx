import React from 'react';
import { posts } from '../data/posts';
import { useParams } from 'react-router-dom';

export const Post = () => {
  const { id } = useParams();
  const post = posts.find(post => post.id === Number(id));

    return (
      <div className="max-w-3xl mx-auto my-2 p-2">
        <img src={post.thumbnailUrl} alt="" />
        <div className="text-gray-500 text-sm">{new Date(post.createdAt).toLocaleDateString()}</div>
        <div className="flex justify-end">
        {post.categories.map(category => {
          return (
            <div key={category} className="text-blue-500 border border-blue-500 rounded mx-0.5 px-1">{category}</div>
          )
        })}
        </div>
        <div className="text-2xl font-bold my-2">{post.title}</div>
        <div className="text-sm my-8" dangerouslySetInnerHTML={{ __html: post.content }}></div>
      </div>
    )
}
