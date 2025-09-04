import { useState } from "react";
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

    const newPost = {
      id: crypto.randomUUID(),
      authorName: "TestUser", // fake username for now
      authorAvatar: "https://i.pravatar.cc/100?u=testuser", // placeholder avatar
      date: new Date().toLocaleDateString(),
      title: title,
      imageSrc: image,
      text: content,
    };

    if (onSubmit) onSubmit(newPost);

    setTitle("");
    setContent("");
    setImage(null);
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
