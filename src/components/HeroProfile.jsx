import PropTypes from "prop-types";
import "../styles/heroProfile.css";

export default function HeroProfile({ hero }) {
  if (!hero) return null;

  const avatarSrc = hero.avatar && hero.avatar.trim() !== ""
    ? hero.avatar
    : "/default-avatar.png";

  async function copyId() {
    try {
      await navigator.clipboard.writeText(hero.userId);
    } catch { /* no-op */ }
  }

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

        <div className="hero-profile-idrow">
          <span className="hero-profile-idlabel">UUID</span>
          <code className="hero-profile-id">{hero.userId}</code>
          <button className="hero-profile-copy" onClick={copyId} aria-label="Copy UUID">Copy</button>
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
    userId: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    description: PropTypes.string,
  }),
};
