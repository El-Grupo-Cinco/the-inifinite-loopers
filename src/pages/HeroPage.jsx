import { useEffect, useState, Fragment } from "react";
import { useParams } from "react-router-dom";
import BlogFeed from "../components/BlogFeed";
import HeroProfile from "../components/HeroProfile.jsx";

export function HeroPage() {
  const { heroId } = useParams();
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const u = JSON.parse(localStorage.getItem("users") || "[]");
    const p = JSON.parse(localStorage.getItem("posts") || "[]");
    setUsers(u);
    setPosts(p.filter((post) => post.userId === heroId));
  }, [heroId]);

  const hero = users.find((u) => u.userId === heroId);

  return (
    <div className="home-container">
      <HeroProfile hero={hero} />

      {hero && (
        <Fragment>
          <h2 style={{margin: "8px 0 12px"}}>Posts by {hero.username}</h2>
        </Fragment>
      )}

      <BlogFeed posts={posts} users={users} />
    </div>
  );
}