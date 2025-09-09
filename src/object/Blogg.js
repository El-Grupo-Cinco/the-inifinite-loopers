// Importera BlogPost (kan användas senare om vi vill skapa/hantera inlägg här)
import { BlogPost } from "../object/blogPost.js";

// Vänta tills hela HTML-sidan är laddad
document.addEventListener("DOMContentLoaded", () => {
    // Hämta posts och users från localStorage
    const posts = JSON.parse(localStorage.getItem("posts")) || [];
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Hitta containern där vi ska lägga in inlägg
    const blogContainer = document.getElementById("blog-container");

    // Om containern inte finns i HTML → logga fel och avbryt
    if (!blogContainer) {
        console.error("No container with id 'blog-container' found.");
        return;
    }

    // Om inga posts finns → visa meddelande
    if (posts.length === 0) {
        blogContainer.innerHTML = "<p>No blog posts available.</p>";
        return;
    }

    // Loopa igenom alla inlägg och rendera dem
    posts.forEach(post => {
        // Hitta användaren som skrev inlägget via authorId
        const author = users.find(u => u.id === post.authorId);

        // Skapa en <div> för inlägget
        const postElement = document.createElement("div");
        postElement.classList.add("blog-post"); // lägg till css-klass

        // Bygg HTML för inlägget
        postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p><em>${new Date(post.date).toLocaleString()}</em></p>
            <p>${post.content}</p>
            <p><strong>Author:</strong> ${author ? author.username : "Unknown"}</p>
            <hr/>
        `;

        // Lägg in inlägget i containern
        blogContainer.appendChild(postElement);
    });
});
