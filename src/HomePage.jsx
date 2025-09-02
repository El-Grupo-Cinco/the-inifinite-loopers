// src/HomePage.jsx
import React from 'react';
import './HomePage.css';
import BlogFeed from './components/BlogFeed';

export default function HomePage({ posts }) {
  return (
    <div className="home-container">
      <section className="home-intro">
        <h1>Välkommen till The Infinite Loopers Blogg</h1>
        <p>Här samlar vårt superhjälteteam rapporter från fältet...</p>
      </section>

      <BlogFeed posts={posts} />
    </div>
  );
}