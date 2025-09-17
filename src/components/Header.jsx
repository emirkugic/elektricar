import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faPhone } from "@fortawesome/free-solid-svg-icons";
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

	const scrollToSection = (sectionId) => {
		document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
		setIsMenuOpen(false);
	};

	return (
		<header className={`header ${isScrolled ? "scrolled" : ""}`}>
			<div className="container">
				<div className="header-content">
					<div className="logo">
						<span className="logo-name">Emir Sarić</span>
						<span className="logo-title">Licencirani Električar</span>
					</div>

					<nav className={`nav ${isMenuOpen ? "nav-open" : ""}`}>
						<a href="#home" onClick={() => scrollToSection("home")}>
							Početna
						</a>
						<a href="#usluge" onClick={() => scrollToSection("usluge")}>
							Usluge
						</a>
						<a href="#o-meni" onClick={() => scrollToSection("o-meni")}>
							O meni
						</a>
						<a href="#referenci" onClick={() => scrollToSection("referenci")}>
							Reference
						</a>
						<a href="#kontakt" onClick={() => scrollToSection("kontakt")}>
							Kontakt
						</a>
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
