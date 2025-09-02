// BlogCard är hela "inlägget" – den innehåller UserCard (överst),
// en bild (valfri) och en textbubbla (som i mockupen).
// Den tar props för att hålla sig dum/återanvändbar. Vi kan mata in data
// från localStorage, API eller hårdkodat under utveckling.

import React from "react";
import "../styles/blogcard.css";
import UserCard from "../components/UserCard.css";

export default function BlogCard({
  authorName,
  authorAvatar,
  date,        // tips: skicka in redan formaterat datum, t.ex. "2025-08-22"
  imageSrc,    // kan vara tomt/null om posten saknar bild
  text,        // själva inläggstexten
}) {
  return (
    <article className="blogcard">
      {/* Top: user pill separat från resten */}
      <div className="blogcard__header">
        <UserCard avatarSrc={authorAvatar} name={authorName} date={date} />
      </div>

      {/* Media-sektion */}
      {imageSrc && /^https?:\/\/|^\/\//i.test(imageSrc) && (
        <figure className="blogcard__media">
          <img src={imageSrc} alt="" loading="lazy" />
        </figure>
      )}

      {/* Textbubblan under bilden */}
      {text && <div className="blogcard__bubble">{text}</div>}
    </article>
  );
}
