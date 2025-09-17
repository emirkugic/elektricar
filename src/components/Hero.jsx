import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faPhone,
	faCheckCircle,
	faBolt,
} from "@fortawesome/free-solid-svg-icons";
import "./Hero.css";

const Hero = () => {
	return (
		<section className="hero">
			<div className="hero-background">
				<div className="hero-overlay"></div>
			</div>

			<div className="container">
				<div className="hero-content">
					<div className="hero-text">
						<h1>
							Profesionalne <span className="highlight">Elektro Usluge</span>
							<br />u Sarajevu i okolini
						</h1>
						<p className="hero-description">
							Brzo, sigurno i pouzdano rješavanje svih elektro problema. Sa
							preko 10 godina iskustva, garantujem kvalitet rada i povoljne
							cijene.
						</p>

						<div className="hero-features">
							<div className="feature">
								<FontAwesomeIcon icon={faCheckCircle} />
								<span>24/7 Hitna pomoć</span>
							</div>
							<div className="feature">
								<FontAwesomeIcon icon={faCheckCircle} />
								<span>Licencirani elektriĹar</span>
							</div>
							<div className="feature">
								<FontAwesomeIcon icon={faCheckCircle} />
								<span>Garancija na sve radove</span>
							</div>
						</div>

						<div className="hero-actions">
							<a href="tel:+38761123456" className="btn btn-primary">
								<FontAwesomeIcon icon={faPhone} />
								Pozovi odmah
							</a>
							<a href="#usluge" className="btn btn-secondary">
								Pogledaj usluge
							</a>
						</div>
					</div>

					<div className="hero-visual">
						<div className="hero-card">
							<div className="card-icon">
								<FontAwesomeIcon icon={faBolt} />
							</div>
							<h3>Hitna pomoć</h3>
							<p>Dostupan 24 sata dnevno za sve elektro hitne slučajeve</p>
							<div className="card-number">24/7</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
