// Den här komponenten visar användarens avatar + namn till vänster,
// och ett helt separat datum-piller som ligger högst upp till höger.
// Den är fristående och används inuti BlogCard, men går också att
// återanvända i t.ex. kommentarslistor eller profilsidor.

import React from "react";
import "./usercard.css";

export default function UserCard({ avatarSrc, name, date }) {
  return (
    <div className="usercard" role="group" aria-label={`Postat av ${name} ${date}`}>
      <div className="usercard__left">
        {/* Bilden kan vara valfri URL. Om ingen bild ges – lägg gärna en default i vår public-mapp */}
        <img className="usercard__avatar" src={avatarSrc} alt={name} />
        <span className="usercard__name">{name}</span>
      </div>

      {/* Viktigt: datumet är ett separat piller i högerkant (enligt skissen) */}
      <div className="usercard__date">{date}</div>
    </div>
  );
}
