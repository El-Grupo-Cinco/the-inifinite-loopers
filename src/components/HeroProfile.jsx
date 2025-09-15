import PropTypes from "prop-types";
import "../styles/heroProfile.css";

export default function HeroProfile({ hero }) {
  if (!hero) return null;

  const avatarSrc =
    hero.avatar && hero.avatar.trim() !== "" ? hero.avatar : "/default-avatar.png";

  return (
    <section className="hero-profile-card">
      <img
        className="hero-profile-avatar"
        src={avatarSrc}
        alt={`${hero.username}'s avatar`}
        loading="lazy"
      />

      <div className="hero-profile-body">
        <h1 className="hero-profile-name">{hero.username}</h1>
        <div className="hero-profile-handle">@{hero.username}</div>

        <div className="hero-profile-idrow">
          <span className="hero-profile-idlabel">UUID</span>
          <code className="hero-profile-id">{hero.userId}</code>
        </div>

        {hero.description && (
          <p className="hero-profile-desc">{hero.description}</p>
        )}
      </div>
    </section>
  );
}

HeroProfile.propTypes = {
  hero: PropTypes.shape({
    userId: PropTypes.string.isRequired,     // hårdkodat i setupCode.js
    username: PropTypes.string.isRequired,   // t.ex. "Rabbit-Of-Fire"
    avatar: PropTypes.string,                // url till bild
    description: PropTypes.string,           // hårdkodad info
  }),
};
