// src/components/UserPage.jsx
import React from "react";

export default function UserPage() {
  const { user } = useAuth();
  return (
    <div>
      <h1>Your Profile</h1>
      <p>Welcome, <strong>{user?.username}</strong>!</p>
      <p>This is your user page. You can expand this with your posts, settings, etc.</p>
    </div>
  );
}
