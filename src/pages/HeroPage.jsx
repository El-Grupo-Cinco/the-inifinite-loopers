import { useEffect, useState } from "react";
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
      {/* Profil-headern du ville ha */}
      <HeroProfile hero={hero} />

      {/* Befintligt postflöde, återanvänder dina komponenter */}
      <BlogFeed posts={posts} users={users} />
    </div>
  );
}
