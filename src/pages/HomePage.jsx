import React from "react";
import "../styles/HomePage.css";
import BlogFeed from "../components/BlogFeed";

export default function HomePage({ posts, users }) {
  return (
    <div className="home-container">
      <section className="home-intro">
        <h1>Välkommen till The Infinite Loopers Blogg</h1>
        <p>Här samlar vårt superhjälteteam rapporter från fältet...</p>
      </section>

      <BlogFeed posts={posts} users={users} />
    </div>
  );
}
