import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBolt,
	faBars,
	faTimes,
	faPhone,
} from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 20);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header className={`header ${isScrolled ? "scrolled" : ""}`}>
			<div className="container">
				<div className="header-content">
					<Link to="/" className="logo">
						<div className="logo-icon">
							<FontAwesomeIcon icon={faBolt} />
						</div>
						<div className="logo-text">
							<span className="company-name">Emir Sarić</span>
							<span className="company-subtitle">Električar</span>
						</div>
					</Link>

					<nav className={`nav ${isMenuOpen ? "nav-open" : ""}`}>
						<Link to="/">Početna</Link>
						<Link to="/usluge">Usluge</Link>
						<Link to="/o-meni">O meni</Link>
						<Link to="/referenci">Reference</Link>
						<Link to="/kontakt">Kontakt</Link>
					</nav>

					<div className="header-actions">
						<a href="tel:+38761456789" className="phone-link">
							<FontAwesomeIcon icon={faPhone} />
							<span>061/456-789</span>
						</a>

						<button
							className="menu-toggle"
							onClick={() => setIsMenuOpen(!isMenuOpen)}
						>
							<FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
						</button>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
