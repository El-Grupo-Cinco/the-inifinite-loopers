import { useEffect, useState } from "react";
import "../styles/UserPage.css";

function InlinePostCard({ post }) {
  const { authorName, authorAvatar, date, imageSrc, text } = post || {};
  return (
    <article className="blogcard" style={{ marginBottom: "1rem" }}>
      <div
        className="blogcard__header"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: ".6rem" }}>
          <img
            src={
              authorAvatar || /*process.env.PUBLIC_URL +*/ "/default-avatar.png"
            }
            alt={authorName || "avatar"}
            style={{
              width: 40,
              height: 40,
              borderRadius: "50%",
              objectFit: "cover",
              border: "2px solid rgba(255,255,255,0.12)",
            }}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = /*process.env.PUBLIC_URL +*/ "/default-avatar.png";
            }}
          />
          <div style={{ minWidth: 0 }}>
            <div
              style={{
                fontWeight: 700,
                fontSize: "0.95rem",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                maxWidth: "18ch",
              }}
            >
              {authorName}
            </div>
          </div>
        </div>
        <div
          style={{
            background: "rgba(137,49,104,0.95)",
            color: "#EAEAEA",
            padding: ".25rem .6rem",
            borderRadius: 999,
            fontSize: ".85rem",
          }}
        >
          {date}
        </div>
      </div>

      {imageSrc && (
        <figure
          className="blogcard__media"
          style={{ marginTop: ".6rem", overflow: "hidden", borderRadius: 12 }}
        >
          <img
            src={imageSrc}
            alt=""
            style={{ width: "100%", display: "block" }}
          />
        </figure>
      )}

      {text && (
        <div className="blogcard__bubble" style={{ marginTop: ".7rem" }}>
          {text}
        </div>
      )}
    </article>
  );
}

export default function UserPage() {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const username = localStorage.getItem("username");
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const loggedInUser = users.find((u) => u.username === username) || null;
    setUser(loggedInUser);

    const raw =
      localStorage.getItem("userPosts") ||
      localStorage.getItem("posts") ||
      localStorage.getItem("userPostsList") ||
      "[]";
    let saved = [];
    try {
      saved = JSON.parse(raw) || [];
    } catch (e) {
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

  return (
    <div
      className="userpage"
      style={{
        padding: "2rem",
        maxWidth: 900,
        margin: "0 auto",
        color: "#EAEAEA",
      }}
    >
      <section
        className="hero-profile"
        style={{ textAlign: "center", marginBottom: "2rem" }}
      >
        <img
          className="hero-avatar"
          src={
            (user && user.avatar) ||
            /*process.env.PUBLIC_URL +*/ "/default-avatar.png"
          }
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
            e.target.src = /*process.env.PUBLIC_URL +*/ "/default-avatar.png";
          }}
        />
        <h2 style={{ margin: 0, color: "#EAEAEA" }}>
          {user ? user.username : "Not logged in"}
        </h2>
        {user && (
          <p style={{ marginTop: ".4rem", color: "rgba(234,234,234,0.9)" }}>
            User ID: {user.userID}
          </p>
        )}
      </section>

      <section className="user-posts">
        <h3 style={{ color: "#EAEAEA", marginBottom: ".6rem" }}>Posts</h3>
        {posts.length === 0 ? (
          <p style={{ color: "rgba(234,234,234,0.8)" }}>No posts yet.</p>
        ) : (
          posts.map((p, idx) => <InlinePostCard key={p.id ?? idx} post={p} />)
        )}
      </section>
    </div>
  );
}
