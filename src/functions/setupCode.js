// Importera User-klassen och BlogPost-klassen
import { BlogPost } from "../object/BlogPost.js";
import { User } from "../object/user.js";
import { create_UUID } from "./uuidGenerator.js";

/*
// Check if users already exist, skip setup if they do
const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");
const existingPosts = JSON.parse(localStorage.getItem("posts") || "[]");

if (existingUsers.length === 0 || existingPosts.length === 0) {
  console.log("First time setup — creating users and posts");

  const userList = [
    new User("9371ab7b-e043-41fb-899d-5efd256f136f", "Super-Bobang", "Test123"),
    new User("65d2d61b-6188-470e-ac1d-fe8f189d0372", "Rabbit Of Fire", "Test123"),
    new User("caded204-9e89-4777-ab3e-cda1362202ab", "Fever Zever", "Test123"),
    new User("db48811e-134b-4497-9982-131cea1316f2", "Garlic Baguette", "Test123"),
  ];

  saveUsers(userList);
  savePosts(userList);
}
*/

// Rensa gamla värden i localStorage och starta med tomma arrayer
localStorage.setItem("users", JSON.stringify([]));
localStorage.setItem("posts", JSON.stringify([]));

// Skapa en lista med "låtsas-användare"
const userList = [
  new User(
    "9371ab7b-e043-41fb-899d-5efd256f136f",
    "Super-Bobang",
    "Test123",
    "",
    "Patchar kritiska buggar snabbare än CI hinner köra. Favoritvapen: git bisect."
  ),
  new User(
    "65d2d61b-6188-470e-ac1d-fe8f189d0372",
    "Rabbit-Of-Fire",
    "Test123",
    "",
    "Ser allt användaren ser – och allt de inte borde se. Pixel-perfekt sedan 2015."
  ),
  new User(
    "caded204-9e89-4777-ab3e-cda1362202ab",
    "Fever-Zever",
    "Test123",
    "",
    "Magi med API:er och README:er. Alltid 100% test coverage (nästan)."
  ),
  new User(
    "db48811e-134b-4497-9982-131cea1316f2",
    "Garlic-Baguette",
    "Test123",
    "",
    "Teleportera kod till produktion utan nedtid. Kan prata flytande Java."
  ),
];

// Spara användare och skapa inlägg
saveUsers();
savePosts();

// Funktion som sparar användare i localStorage
function saveUsers() {
  // Add userList <---------------------------------------
  console.log("Setting up mock users");

  for (let user of userList) {
    user.save(); // varje User-objekt sparar sig själv i localStorage
  }

  console.log("user-list created.");
}

// Funktion som skapar och sparar blogginlägg
function savePosts() {
  // Add userList <---------------------------------------
  console.log("Setting up mock posts");
  const postList = []; // här samlas alla inlägg

  // Lite exempeltexter som jag återanvänder
  const sampleContents = [
    "Exploring the mysteries of the cosmos.",
    "How I built my first rocket in the backyard.",
    "Why garlic bread is the fuel of champions.",
    "Top 5 ways to stay motivated as a space explorer.",
    "Behind the scenes of Rabbit Of Fire’s adventures.",
  ];

  // För varje användare, skapa 5 inlägg
  for (let user of userList) {
    for (let i = 1; i <= 5; i++) {
      const post = new BlogPost(
        create_UUID(), // unikt id
        new Date().toISOString(), // datum & tid i ISO-format
        `${user.username}'s Post #${i}`, // titel
        sampleContents[(i - 1) % sampleContents.length], // innehåll
        user.userId // koppla till författarens id
      );
      postList.push(post); // lägg till i listan
    }
  }

  // Spara alla inlägg i localStorage
  localStorage.setItem("posts", JSON.stringify(postList));
}
