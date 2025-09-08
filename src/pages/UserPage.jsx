import { useEffect, useState } from "react";
import "../styles/userpage.css";
import BlogCard from "../components/BlogCard";
import { users } from "../object/user";

export default function UserPage() {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);

  /*useEffect(() => {
    const username = localStorage.getItem("username");
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const loggedInUser = users.find((u) => u.username === username) || null;
    setUser(loggedInUser);*/

    useEffect(() => {
        const loggedInRaw = localStorage.getItem("loggedIn");
        if (loggedInRaw && loggedInRaw !== "false") {
            const loggedInUser = JSON.parse(loggedInRaw);
            setUser(loggedInUser);
        }

        const raw =
      localStorage.getItem("userPosts") ||
      localStorage.getItem("posts") ||
      localStorage.getItem("userPostsList") ||
      "[]";
    let saved = [];
      try {
          saved = JSON.parse(raw) || [];
      } catch (e) {
          console.error("Error parsing posts from localStorage:", e);
          saved = [];
      }

      function timeOf(v) {
      if (!v) return 0;
      const n = Number(v);
      if (!isNaN(n) && n !== 0) return n;
      const t = Date.parse(v);
      return isNaN(t) ? 0 : t;
    }

    saved.sort((a, b) => {
      const tb = timeOf(b.date ?? b.createdAt ?? b.timestamp ?? b.id);
      const ta = timeOf(a.date ?? a.createdAt ?? a.timestamp ?? a.id);
      return tb - ta;
    });

    setPosts(saved);
  }, []);

  const handleAvatarChange = (e) => {
      const file = e.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onloadend = () => {
          const updatedUser = { ...user, avatar: reader.result };

          //Update user in localStorage
          const users = JSON.parse(localStorage.getItem("users") || "[]");
          const updatedUsers = users.map((u) => u.userID === user.userID ? updatedUser : u);
          localStorage.setItem("users", JSON.stringify(updatedUsers));
          localStorage.setItem("loggedIn", JSON.stringify(updatedUser));

          setUser(updatedUser);
      };

      reader.readAsDataURL(file);
  };

  return (
    <div
      className="userpage"
      style={{
        padding: "2rem",
        maxWidth: 900,
        margin: "0 auto",
      }}
    >
      <section className="hero-profile" style={{ textAlign: "center", marginBottom: "2rem" }} >
          <img
              className="hero-avatar"
              src={user?.avatar || "https://i.pravatar.cc/100?u=default"}
              alt={user ? user.username : "guest"}
              style={{
                  width: 100,
                  height: 100,
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "3px solid #646cff",
                  marginBottom: "0.75rem",
              }}
              onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://i.pravatar.cc/100?u=default";
              }}
          />

          {user && (
              <div style={{ marginTop: "1rem" }}>
                  <input type="file" accept="image/*" onChange={handleAvatarChange} />
              </div>
          )}


          <h2 style={{ margin: 0 }}>{user ? user.username : "Not logged in"}</h2>
        {user && <p style={{ marginTop: ".4rem" }}>User ID: {user.userID}</p>}
      </section>

        <section className="user-posts">
            <h3 style={{ marginBottom: ".6rem" }}>Posts</h3>
            {posts.length === 0 ? (
                <p>No posts yet.</p>
            ) : (
                posts.map((p, idx) => {
                    const postAuthor = users.find((u) => u.userID === p.authorId);
                    return (
                        <BlogCard
                            key={p.id ?? idx}
                            authorName={postAuthor?.username || p.authorId}
                            authorAvatar={postAuthor?.avatar || "/default-avatar.png"}
                            date={p.date}
                            imageSrc={p.imageSrc || ""}
                            title={p.title}
                            text={p.content}
                        />
                    );
                })
            )}
        </section>
    </div>
  );
}
