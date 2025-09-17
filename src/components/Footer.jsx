import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faPhone,
	faEnvelope,
	faMapMarkerAlt,
	faBolt,
	faClock,
} from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="container">
				<div className="footer-content">
					<div className="footer-section">
						<div className="footer-logo">
							<div className="logo-icon">
								<FontAwesomeIcon icon={faBolt} />
							</div>
							<div className="logo-text">
								<span className="company-name">Emir Sarić</span>
								<span className="company-subtitle">Električar</span>
							</div>
						</div>
						<p className="footer-description">
							Profesionalne elektro usluge sa preko 15 godina iskustva. Pouzdano
							rješavanje svih elektro problema u Sarajevu i okolini.
						</p>
					</div>

					<div className="footer-section">
						<h3>Kontakt</h3>
						<div className="contact-info">
							<div className="contact-item">
								<FontAwesomeIcon icon={faPhone} />
								<span>061/456-789</span>
							</div>
							<div className="contact-item">
								<FontAwesomeIcon icon={faEnvelope} />
								<span>emir.saric@email.com</span>
							</div>
							<div className="contact-item">
								<FontAwesomeIcon icon={faMapMarkerAlt} />
								<span>Sarajevo, BiH</span>
							</div>
						</div>
					</div>

					<div className="footer-section">
						<h3>Radno vrijeme</h3>
						<div className="working-hours">
							<div className="hours-item">
								<span className="day">Pon - Pet</span>
								<span className="time">08:00 - 18:00</span>
							</div>
							<div className="hours-item">
								<span className="day">Subota</span>
								<span className="time">09:00 - 15:00</span>
							</div>
							<div className="hours-item">
								<span className="day">Nedjelja</span>
								<span className="time">Zatvoreno</span>
							</div>
							<div className="emergency-note">
								<FontAwesomeIcon icon={faClock} />
								<span>Hitni pozivi 24/7</span>
							</div>
						</div>
					</div>
				</div>

				<div className="footer-bottom">
					<p>&copy; 2024 Emir Sarić - Električar. Sva prava zadržana.</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
