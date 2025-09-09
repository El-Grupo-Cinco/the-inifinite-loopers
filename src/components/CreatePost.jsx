import { useState } from "react";
import { BlogPost } from "../object/BlogPost.js";
import "../styles/createpost.css";

export default function CreatePost({ onSubmit }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result); // base64 data URL
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPost = new BlogPost(
      crypto.randomUUID(),
      new Date().toLocaleDateString(),
      title,
      content,
      "123" // TODO: Replace with logged-in user's ID
    );

    onSubmit(newPost);
    setTitle("");
    setContent("");
  };

  return (
    <form className="create-post-form" onSubmit={handleSubmit}>
      <h2>Create New Post</h2>

      <input
        type="text"
        placeholder="Post Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <textarea
        placeholder="Write your post here..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />

      <div className="image-upload">
        <input
          type="file"
          accept="image/*"
          id="postImageInput"
          onChange={handleImageChange}
        />
        <label htmlFor="postImageInput">Choose Cover Image</label>
      </div>

      {image && <img src={image} alt="Preview" className="preview-image" />}

      <button type="submit">Post</button>
    </form>
  );
}
