import "../styles/contact.css";


export default function Contact() {
return (
<div className="contact-container">
<section className="contact-hero">
<h1>Kontakta oss</h1>
<p className="tagline">Signalera oss från taket – eller maila, det går också bra.</p>
</section>


<section className="contact-section">
<h2>🦸‍♀️ Vårt superteam 🐰</h2>
<ul className="contact-list">
<li>
<strong>Allmänna ärenden</strong><br />
<a href="mailto:hello@theinfiniteloopers.dev">hello@theinfiniteloopers.dev</a>
</li>
<li>
<strong>Integritetsfrågor</strong><br />
<a href="mailto:privacy@theinfiniteloopers.dev">privacy@theinfiniteloopers.dev</a>
</li>
<li>
<strong>Discord</strong><br />
<span>theinfiniteloopers</span>
</li>
<li>
<strong>Fältkontakt</strong><br />
<span>Vi håller till i molnet. Och ibland Stockholm.</span>
</li>
</ul>
</section>


<section className="contact-section">
<h2>📣 Akuta ärenden</h2>
<p>
Sätt "AKUT" i ämnesraden när du mailar oss – vår larmsignal blinkar rött och någon i teamet svarar så snabbt som möjligt.
</p>
</section>


<section className="contact-section">
<h2>💬 Vill du snacka kod?</h2>
<p>
Vi hänger på Discord, Github och ibland i kaffekön. Hör av dig om du vill prata AI, frontend, Java ☕️ eller varför JavaScript ibland känns som en superkraft – och ibland som en förbannelse.
</p>
</section>
</div>
);
}