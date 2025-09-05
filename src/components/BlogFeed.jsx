import BlogCard from "./BlogCard";
import { users } from "../object/user";
import "../styles/blogfeed.css";

export default function BlogFeed({ posts }) {
    if (!Array.isArray(posts) || posts.length === 0) {
        return <p className="no-posts">📝 No posts yet. Go create one!</p>;
    }

    return (
        <div className="blog-feed">
            {posts.map((post) => {
                const author = users.find((u) => u.id === post.authorId);


                return (
                    <BlogCard
                        key={post.id}
                        title={post.title}
                        text={post.content}
                        date={post.date}
                        authorName={author?.username || "Unknown"}
                        authorAvatar={author?.avatar || "/default-avatar.png"}
                    />
                );
            })}
        </div>
    );
}