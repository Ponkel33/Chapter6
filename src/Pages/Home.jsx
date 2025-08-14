import React from 'react';
import { posts } from '../data/posts';
import classes from '../styles/Home.module.css';

export const Home = () => {
return (
  <div className={classes.container}>
    <ul>
      {
        posts.map(post => {
          return (
            <li key={post.id} className={classes.post}>
              <div className={classes.postdate}>{new Date(post.createdAt).toLocaleDateString()}</div>
              <div className={classes.tags}>
              {post.categories.map(category => {
                return (
                  <div key={category} className={classes.categorytag}>{category}</div>
                )
              })}
              </div>
              <div className={classes.postTitle}>{post.title}</div>
              <div className={classes.postBody} dangerouslySetInnerHTML={{ __html: post.content }}></div>
            </li>
          );
        })
      }
    </ul>
  </div>
);
}
