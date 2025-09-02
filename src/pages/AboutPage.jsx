import React from 'react';
import '../styles/AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-container">
      <section className="about-hero">
        <h1>The Infinite Loopers 🦸‍♀️🦸‍♂️</h1>
        <p className="tagline">
          Ett superhjälteteam som räddar buggar, skeppar features och brygger kaffe i realtid.
        </p>
      </section>

      <section className="about-mission">
        <h2>Vårt uppdrag</h2>
        <p>
          Vi skyddar internet från segladdningar och ond monolit-arkitektur.
          När natten blir mörk och prod går ner, tänd din terminal—så dyker vi upp.
        </p>
      </section>

      <section className="about-grid">
        <div className="card">
          <div className="emoji">⚡</div>
          <h3>Super-Bobang</h3>
          <p>Patchar kritiska buggar snabbare än CI hinner köra. Favoritvapen: <em>git bisect</em>.</p>
        </div>
        <div className="card">
          <div className="emoji">🧠</div>
          <h3>Fever Zever</h3>
          <p>Magi med API:er och README:er. Alltid 100% test coverage (nästan).</p>
        </div>
        <div className="card">
          <div className="emoji">🛰️</div>
          <h3>Garlic Baguette</h3>
          <p>Teleportera kod till produktion utan nedtid. Kan prata flytande Java.</p>
        </div>
        <div className="card">
          <div className="emoji">🕶️</div>
          <h3>Rabbit of Fire</h3>
          <p>Ser allt användaren ser – och allt de inte borde se. Pixel-perfekt sedan 2015.</p>
        </div>
      </section>

      <section className="about-funfacts">
        <h2>Fun facts</h2>
        <ul>
          <li>Hemlig bas: <strong>/var/hero/base</strong></li>
          <li>Svaghet: oformaterad JSON</li>
          <li>Kraftkälla: bryggkaffe och commit-meddelanden med emojis</li>
        </ul>
      </section>
    </div>
  );
};

export default AboutPage;
