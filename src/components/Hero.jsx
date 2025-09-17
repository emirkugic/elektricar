import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faPhone,
	faCheckCircle,
	faClock,
	faShieldAlt,
	faAward,
} from "@fortawesome/free-solid-svg-icons";
import "./Hero.css";

const Hero = () => {
	return (
		<section className="hero">
			<div className="container">
				<div className="hero-content">
					<div className="hero-text">
						<div className="hero-badge">
							<FontAwesomeIcon icon={faAward} />
							<span>Licencirani električar • 15+ godina iskustva</span>
						</div>

						<h1>Pouzdane elektro usluge za vaš dom i posao</h1>

						<p className="hero-description">
							Emir Sarić pruža profesionalne elektro usluge u Sarajevu i
							okolini. Specijalizovan za stambene i poslovne objekte sa
							garancijom kvaliteta i 24/7 podrškom.
						</p>

						<div className="hero-features">
							<div className="feature">
								<FontAwesomeIcon icon={faClock} />
								<span>24/7 Hitna pomoć</span>
							</div>
							<div className="feature">
								<FontAwesomeIcon icon={faShieldAlt} />
								<span>Licencirani i osiguran</span>
							</div>
							<div className="feature">
								<FontAwesomeIcon icon={faCheckCircle} />
								<span>12 mjeseci garancije</span>
							</div>
						</div>

						<div className="hero-actions">
							<a href="tel:+38761456789" className="btn btn-primary">
								<FontAwesomeIcon icon={faPhone} />
								Pozovi odmah
							</a>
							<a href="#usluge" className="btn btn-secondary">
								Pogledaj usluge
							</a>
						</div>

						<div className="hero-stats">
							<div className="stat">
								<div className="stat-number">500+</div>
								<div className="stat-label">Završenih projekata</div>
							</div>
							<div className="stat">
								<div className="stat-number">15+</div>
								<div className="stat-label">Godina iskustva</div>
							</div>
							<div className="stat">
								<div className="stat-number">24/7</div>
								<div className="stat-label">Podrška</div>
							</div>
						</div>
					</div>

					<div className="hero-image">
						<div className="image-placeholder">
							<FontAwesomeIcon icon={faShieldAlt} />
							<p>Profesionalni električni radovi</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
