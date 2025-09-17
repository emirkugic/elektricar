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
			setIsScrolled(window.scrollY > 50);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<header className={`header ${isScrolled ? "scrolled" : ""}`}>
			<div className="container">
				<div className="nav-wrapper">
					<Link to="/" className="logo">
						<FontAwesomeIcon icon={faBolt} className="logo-icon" />
						<span>ElektriĹar</span>
					</Link>

					<nav className={`nav ${isMenuOpen ? "nav-open" : ""}`}>
						<Link to="/" onClick={() => setIsMenuOpen(false)}>
							Početna
						</Link>
						<Link to="/usluge" onClick={() => setIsMenuOpen(false)}>
							Usluge
						</Link>
						<Link to="/o-meni" onClick={() => setIsMenuOpen(false)}>
							O meni
						</Link>
						<Link to="/kontakt" onClick={() => setIsMenuOpen(false)}>
							Kontakt
						</Link>
					</nav>

					<div className="header-actions">
						<a href="tel:+38761123456" className="phone-btn">
							<FontAwesomeIcon icon={faPhone} />
							<span>061 123 456</span>
						</a>

						<button className="menu-toggle" onClick={toggleMenu}>
							<FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
						</button>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
