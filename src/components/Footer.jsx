import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faPhone,
	faEnvelope,
	faMapMarkerAlt,
	faBolt,
	faClock,
} from "@fortawesome/free-solid-svg-icons";
import {
	faFacebook,
	faInstagram,
	faViber,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="container">
				<div className="footer-content">
					<div className="footer-section">
						<div className="footer-logo">
							<FontAwesomeIcon icon={faBolt} className="logo-icon" />
							<span>ElektriĹar</span>
						</div>
						<p className="footer-description">
							Profesionalne elektro usluge sa preko 10 godina iskustva. Brzo,
							sigurno i pouzdano rješavanje svih elektro problema.
						</p>
						<div className="social-links">
							<a href="#" aria-label="Facebook">
								<FontAwesomeIcon icon={faFacebook} />
							</a>
							<a href="#" aria-label="Instagram">
								<FontAwesomeIcon icon={faInstagram} />
							</a>
							<a href="#" aria-label="Viber">
								<FontAwesomeIcon icon={faViber} />
							</a>
						</div>
					</div>

					<div className="footer-section">
						<h3>Kontakt informacije</h3>
						<div className="contact-item">
							<FontAwesomeIcon icon={faPhone} />
							<span>061 123 456</span>
						</div>
						<div className="contact-item">
							<FontAwesomeIcon icon={faEnvelope} />
							<span>elektricar@email.com</span>
						</div>
						<div className="contact-item">
							<FontAwesomeIcon icon={faMapMarkerAlt} />
							<span>Sarajevo, Bosna i Hercegovina</span>
						</div>
					</div>

					<div className="footer-section">
						<h3>Radno vrijeme</h3>
						<div className="working-hours">
							<div className="hours-item">
								<FontAwesomeIcon icon={faClock} />
								<div>
									<span className="day">Ponedjeljak - Petak</span>
									<span className="time">08:00 - 18:00</span>
								</div>
							</div>
							<div className="hours-item">
								<FontAwesomeIcon icon={faClock} />
								<div>
									<span className="day">Subota</span>
									<span className="time">09:00 - 15:00</span>
								</div>
							</div>
							<div className="hours-item emergency">
								<span>Hitni pozivi 24/7</span>
							</div>
						</div>
					</div>
				</div>

				<div className="footer-bottom">
					<p>&copy; 2024 Električar. Sva prava zadržana.</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
