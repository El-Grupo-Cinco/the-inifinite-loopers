import "../styles/privacy.css";

export default function Privacy() {
  return (
    <>
      <div className="privacy-container">
        <section className="privacy-hero">
          <h1>Integritetspolicy</h1>
          <p className="tagline">Vi skyddar din data som en superhjälte skyddar sin hemliga identitet.</p>
        </section>

        <section className="privacy-section">
          <h2>Vem är vi?</h2>
          <p>
            Vi är The Infinite Loopers — ett gäng utvecklare, designers och DevOps-wizards med en kärlek för clean code, AI och en och annan dålig puns.
            Om du kom hit via vår kontaktformulär, Discord eller kod-befriade signaler, vet du redan att vi tar våra användares förtroende på allvar.
          </p>
        </section>

        <section className="privacy-section">
          <h2>Vilken data samlar vi in?</h2>
          <ul>
            <li><strong>Kontaktformulär:</strong> Namn, e‑post och meddelande. Inga hemliga identiteter krävs.</li>
            <li><strong>Analytics:</strong> Vi använder inga cookies för att spåra dig som en skurk i skuggorna. Faktum är att vi inte ens gillar kakor. 🍪</li>
            <li><strong>Manuella meddelanden:</strong> Om du mailar oss direkt – då vet du vad du delar. Vi säljer det inte vidare till LexCorp.</li>
          </ul>
        </section>

        <section className="privacy-section">
          <h2>Hur skyddar vi din data?</h2>
          <p>
            Med kod rustad starkare än Vibranium. Vi använder modern kryptering och säkerhetsmetoder värdiga Tony Stark himself.
            Ditt meddelande lagras bara så länge vi behöver det för att hjälpa dig – sen säger vi "shazam" och det försvinner.
          </p>
        </section>

        <section className="privacy-section">
          <h2>Dina rättigheter</h2>
          <p>
            Du har rätt att be oss:
          </p>
          <ul>
            <li>🔎 Se vilken data vi har om dig</li>
            <li>🧹 Radera allt (även om det inte lämnar några coola explosioner)</li>
            <li>✏️ Rätta något om vi stavade ditt namn som "Bruce Wane"</li>
          </ul>
          <p>
            Hör bara av dig via <a href="mailto:privacy@theinfiniteloopers.dev">privacy@theinfiniteloopers.dev</a> så fixar vi det. Inga formulär, inga capes.
          </p>
        </section>

        <section className="privacy-section">
          <h2>Uppdateringar</h2>
          <p>
            Om vi ändrar något i policyn säger vi till – vi jobbar ju trots allt med transparens (och osynliga servrar).
            Den här versionen uppdaterades senast 4 september 2025.
          </p>
        </section>

        <section className="privacy-section">
          <p>💌 Frågor? Kontakta vårt superteam på <a href="mailto:hello@theinfiniteloopers.dev">hello@theinfiniteloopers.dev</a></p>
        </section>
      </div>
    </>
  );
}