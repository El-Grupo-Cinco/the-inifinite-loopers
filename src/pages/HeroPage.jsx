import { useEffect, useState } from "react";
import BlogFeed from "../components/BlogFeed";
import { BlogPost } from "../object/BlogPost";
import { User } from "../object/user.js";
import { useParams } from "react-router-dom";

export function HeroPage() {
  const heroId = useParams().heroId;
  console.log(heroId);

  const [posts, setPosts] = useState([]);

  const heroParsed = JSON.parse(localStorage.getItem("users")).find(
    (u) => u.userId === heroId
  );

  const hero = new User(heroParsed.userId, heroParsed.username, "", "");

  useEffect(() => {
    getHerosPost(heroId).then(setPosts);
  }, [heroId]);

  return (
    <main>
      <div className="hero-presentation">{hero.username}</div>
      <BlogFeed posts={posts} users={[hero]} />
    </main>
  );
}

async function getHerosPost(heroId) {
  const allPosts = await JSON.parse(localStorage.getItem("posts"));
  const filtered = allPosts
    .filter((p) => p.userId === heroId)
    .map(
      (post) =>
        new BlogPost(post.id, post.date, post.title, post.content, post.userId)
    );
  console.log(JSON.stringify(filtered));

  return filtered;
}
