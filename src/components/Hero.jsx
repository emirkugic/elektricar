import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faPhone,
	faEnvelope,
	faCheckCircle,
	faClock,
	faShieldAlt,
	faTools,
} from "@fortawesome/free-solid-svg-icons";
import "./Hero.css";

const Hero = () => {
	const scrollToSection = (sectionId) => {
		document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<section className="hero" id="home">
			<div className="container">
				<div className="hero-content">
					<div className="hero-left">
						<h1>Profesionalne elektro usluge u Sarajevu</h1>

						<p className="hero-description">
							Potrebni su vam elektro radovi? Emir Sarić je licencirani
							električar sa 15 godina iskustva koji pruža pouzdane usluge za
							stambene i poslovne objekte. Brza intervencija, kvalitetno
							izvršavanje i garantovano zadovoljstvo.
						</p>

						<div className="hero-features">
							<div className="feature">
								<FontAwesomeIcon icon={faCheckCircle} />
								<span>Licencirani i sertifikovani električar</span>
							</div>
							<div className="feature">
								<FontAwesomeIcon icon={faClock} />
								<span>24/7 dostupnost za hitne slučajeve</span>
							</div>
							<div className="feature">
								<FontAwesomeIcon icon={faShieldAlt} />
								<span>12 mjeseci garancije na sve radove</span>
							</div>
							<div className="feature">
								<FontAwesomeIcon icon={faTools} />
								<span>Moderna oprema i alati</span>
							</div>
						</div>

						<div className="hero-cta">
							<a href="tel:+38761456789" className="btn btn-primary">
								<FontAwesomeIcon icon={faPhone} />
								Pozovite odmah
							</a>
							<button
								className="btn btn-secondary"
								onClick={() => scrollToSection("kontakt")}
							>
								<FontAwesomeIcon icon={faEnvelope} />
								Pošaljite poruku
							</button>
						</div>
					</div>

					<div className="hero-right">
						<div className="hero-card">
							<h3>Zašto odabrati Emira?</h3>
							<ul>
								<li>15+ godina iskustva u struci</li>
								<li>500+ uspješno završenih projekata</li>
								<li>Licencirani i osigurani električar</li>
								<li>Besplatan pregled i procjena</li>
								<li>Konkurentne cijene</li>
								<li>24/7 podrška za hitne slučajeve</li>
							</ul>

							<div className="card-contact">
								<div className="contact-info">
									<strong>Kontakt:</strong>
									<span>061/456-789</span>
								</div>
								<div className="contact-info">
									<strong>Email:</strong>
									<span>emir.saric@email.com</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
