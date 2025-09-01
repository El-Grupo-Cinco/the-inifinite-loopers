import BlogCard from './BlogCard'
import './blogfeed.css'

export default function BlogFeed({ posts }) {
    if (!Array.isArray(posts) || posts.length === 0) {
        return <p className="no-posts">📝 No posts yet. Go create one!</p>
    }

    return (
        <div className="blog-feed">
            {posts.map((post, index) => {
                if (!post || typeof post !== 'object') return null

                return (
                    <BlogCard
                        key={post.id || index}
                        authorName={post.authorName || 'Unknown'}
                        authorAvatar={post.authorAvatar || 'https://i.pravatar.cc/100?u=anon'}
                        date={post.date || 'Unknown date'}
                        imageSrc={post.imageSrc || ''}
                        text={post.text || ''}
                    />
                )
            })}
        </div>
    )
}
