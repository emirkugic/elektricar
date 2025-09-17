import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBars,
	faTimes,
	faPhone,
	faEnvelope,
	faMapMarkerAlt,
	faClock,
	faCheckCircle,
	faShieldAlt,
	faTools,
	faHome,
	faIndustry,
	faBolt,
	faPlug,
	faAward,
	faUsers,
	faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import "./Homepage.css";

const Homepage = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		service: "",
		message: "",
	});

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

	const handleFormSubmit = (e) => {
		e.preventDefault();
		console.log("Form submitted:", formData);
		// Handle form submission here
	};

	const handleFormChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const services = [
		{
			icon: faHome,
			title: "Stambeni objekti",
			description:
				"Kompletne elektro instalacije za stanove, kuće i vikendice. Kvalitetno i sigurno.",
			price: "Od 50 KM",
		},
		{
			icon: faIndustry,
			title: "Poslovni prostori",
			description:
				"Elektro radovi za kancelarije, prodavnice, restorane i druge komercijalne objekte.",
			price: "Po dogovoru",
		},
		{
			icon: faTools,
			title: "Popravke & Održavanje",
			description:
				"Brze intervencije za sve vrste elektro kvarova. Dostupan 24/7.",
			price: "Od 30 KM",
		},
		{
			icon: faShieldAlt,
			title: "Sigurnosni sistemi",
			description:
				"Instalacija video nadzora, alarma i sistema kontrole pristupa.",
			price: "Od 200 KM",
		},
		{
			icon: faBolt,
			title: "Hitni pozivi",
			description:
				"24/7 dostupnost za sve elektro hitne slučajeve u Sarajevu i okolini.",
			price: "Uvijek dostupan",
		},
		{
			icon: faPlug,
			title: "EV punjači",
			description:
				"Instalacija kućnih i javnih punjača za električna i hibridna vozila.",
			price: "Od 800 KM",
		},
	];

	return (
		<div className="homepage">
			{/* Header */}
			<header className={`header ${isScrolled ? "scrolled" : ""}`}>
				<div className="container">
					<div className="header-content">
						<div className="logo">
							<span className="logo-name">Emir Sarić</span>
							<span className="logo-title">Električar</span>
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
							<a href="#kontakt" onClick={() => scrollToSection("kontakt")}>
								Kontakt
							</a>
						</nav>

						<div className="header-actions">
							<a href="tel:+38761456789" className="phone-btn">
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

			{/* Hero Section */}
			<section className="hero" id="home">
				<div className="container">
					<div className="hero-content">
						<div className="hero-text">
							<div className="hero-badge">
								<FontAwesomeIcon icon={faAward} />
								<span>Licencirani električar • 15+ godina iskustva</span>
							</div>

							<h1>Profesionalni elektro radovi u Sarajevu</h1>

							<p className="hero-description">
								Trebaju vam pouzdani elektro radovi? Emir Sarić je vaš ekspert
								za sve vrste električnih instalacija, popravki i održavanja.
								Brzo, sigurno i profesionalno.
							</p>

							<div className="hero-features">
								<div className="feature">
									<FontAwesomeIcon icon={faCheckCircle} />
									<span>Licencirani i certificirani</span>
								</div>
								<div className="feature">
									<FontAwesomeIcon icon={faClock} />
									<span>24/7 hitna pomoć</span>
								</div>
								<div className="feature">
									<FontAwesomeIcon icon={faShieldAlt} />
									<span>12 mjeseci garancije</span>
								</div>
							</div>

							<div className="hero-actions">
								<a href="tel:+38761456789" className="btn btn-primary">
									<FontAwesomeIcon icon={faPhone} />
									Pozovite odmah
								</a>
								<button
									className="btn btn-secondary"
									onClick={() => scrollToSection("kontakt")}
								>
									Zatražite ponudu
								</button>
							</div>

							<div className="hero-stats">
								<div className="stat">
									<span className="stat-number">500+</span>
									<span className="stat-label">Projekata</span>
								</div>
								<div className="stat">
									<span className="stat-number">15+</span>
									<span className="stat-label">Godina</span>
								</div>
								<div className="stat">
									<span className="stat-number">24/7</span>
									<span className="stat-label">Podrška</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Services Section */}
			<section className="services" id="usluge">
				<div className="container">
					<div className="section-header">
						<h2>Naše usluge</h2>
						<p>Profesionalne elektro usluge za sve vaše potrebe</p>
					</div>

					<div className="services-grid">
						{services.map((service, index) => (
							<div key={index} className="service-card">
								<div className="service-icon">
									<FontAwesomeIcon icon={service.icon} />
								</div>

								<h3>{service.title}</h3>
								<p>{service.description}</p>

								<div className="service-price">{service.price}</div>

								<a href="tel:+38761456789" className="service-btn">
									Zatražite ponudu
								</a>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* About Section */}
			<section className="about" id="o-meni">
				<div className="container">
					<div className="section-header">
						<h2>O meni</h2>
						<p>Vaš pouzdani partner za sve elektro radove</p>
					</div>

					<div className="about-content">
						<div className="about-text">
							<h3>Emir Sarić - Licencirani Električar</h3>
							<p>
								Sa više od 15 godina iskustva u elektro struci, specializovan
								sam za sve vrste električnih instalacija i popravki. Moj cilj je
								da svakom klijentu pružim vrhunsku uslugu, siguran rad i
								dugotrajno rješenje.
							</p>

							<div className="about-highlights">
								<div className="highlight">
									<h4>Iskustvo</h4>
									<p>
										15+ godina rada u struci sa 500+ uspješno završenih
										projekata
									</p>
								</div>
								<div className="highlight">
									<h4>Licenca</h4>
									<p>Potpuno licencirani i certificirani električar u BiH</p>
								</div>
								<div className="highlight">
									<h4>Garancija</h4>
									<p>
										12 mjeseci garancije na sve radove i korišćene materijale
									</p>
								</div>
								<div className="highlight">
									<h4>Dostupnost</h4>
									<p>24/7 podrška za sve hitne elektro slučajeve</p>
								</div>
							</div>
						</div>

						<div className="about-stats">
							<div className="stat-card">
								<FontAwesomeIcon icon={faUsers} />
								<h4>500+</h4>
								<p>Zadovoljnih klijenata</p>
							</div>
							<div className="stat-card">
								<FontAwesomeIcon icon={faAward} />
								<h4>15+</h4>
								<p>Godina iskustva</p>
							</div>
							<div className="stat-card">
								<FontAwesomeIcon icon={faShieldAlt} />
								<h4>100%</h4>
								<p>Garancija kvaliteta</p>
							</div>
							<div className="stat-card">
								<FontAwesomeIcon icon={faClock} />
								<h4>24/7</h4>
								<p>Hitna pomoć</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section className="contact" id="kontakt">
				<div className="container">
					<div className="section-header">
						<h2>Kontaktirajte me</h2>
						<p>Spremni ste za vaš sljedeći elektro projekat?</p>
					</div>

					<div className="contact-content">
						<div className="contact-info">
							<h3>Javite se već danas</h3>
							<p>
								Bilo da trebate hitnu pomoć ili planirate veći projekat, tu sam
								da vam pomognem. Besplatna procjena za sve radove.
							</p>

							<div className="contact-methods">
								<div className="contact-method">
									<FontAwesomeIcon icon={faPhone} />
									<div>
										<h4>Telefon</h4>
										<p>061/456-789</p>
										<span>Dostupan 24/7</span>
									</div>
								</div>

								<div className="contact-method">
									<FontAwesomeIcon icon={faEnvelope} />
									<div>
										<h4>Email</h4>
										<p>emir.saric@email.com</p>
										<span>Brz odgovor</span>
									</div>
								</div>

								<div className="contact-method">
									<FontAwesomeIcon icon={faMapMarkerAlt} />
									<div>
										<h4>Lokacija</h4>
										<p>Sarajevo, BiH</p>
										<span>I okolina</span>
									</div>
								</div>
							</div>

							<div className="working-hours">
								<h4>
									<FontAwesomeIcon icon={faClock} />
									Radno vrijeme
								</h4>
								<div className="hours-list">
									<div className="hour-item">
										<span>Pon - Pet:</span>
										<span>08:00 - 18:00</span>
									</div>
									<div className="hour-item">
										<span>Subota:</span>
										<span>09:00 - 15:00</span>
									</div>
									<div className="hour-item">
										<span>Nedjelja:</span>
										<span>Po dogovoru</span>
									</div>
								</div>
								<div className="emergency-note">
									Hitni pozivi dostupni 24 sata dnevno
								</div>
							</div>
						</div>

						<form className="contact-form" onSubmit={handleFormSubmit}>
							<h3>Pošaljite poruku</h3>

							<div className="form-row">
								<div className="form-group">
									<label htmlFor="name">Ime i prezime</label>
									<input
										type="text"
										id="name"
										name="name"
										value={formData.name}
										onChange={handleFormChange}
										required
									/>
								</div>
								<div className="form-group">
									<label htmlFor="phone">Telefon</label>
									<input
										type="tel"
										id="phone"
										name="phone"
										value={formData.phone}
										onChange={handleFormChange}
										required
									/>
								</div>
							</div>

							<div className="form-group">
								<label htmlFor="email">Email</label>
								<input
									type="email"
									id="email"
									name="email"
									value={formData.email}
									onChange={handleFormChange}
									required
								/>
							</div>

							<div className="form-group">
								<label htmlFor="service">Vrsta usluge</label>
								<select
									id="service"
									name="service"
									value={formData.service}
									onChange={handleFormChange}
									required
								>
									<option value="">Odaberite uslugu</option>
									<option value="stambeni">Stambeni objekti</option>
									<option value="poslovni">Poslovni prostori</option>
									<option value="popravke">Popravke i održavanje</option>
									<option value="sigurnost">Sigurnosni sistemi</option>
									<option value="hitno">Hitni poziv</option>
									<option value="punjaci">EV punjači</option>
								</select>
							</div>

							<div className="form-group">
								<label htmlFor="message">Opis radova</label>
								<textarea
									id="message"
									name="message"
									rows="4"
									value={formData.message}
									onChange={handleFormChange}
									placeholder="Opišite koje radove trebate..."
									required
								></textarea>
							</div>

							<button type="submit" className="btn btn-primary">
								<FontAwesomeIcon icon={faPaperPlane} />
								Pošaljite poruku
							</button>
						</form>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="footer">
				<div className="container">
					<div className="footer-content">
						<div className="footer-section">
							<div className="footer-logo">
								<span className="logo-name">Emir Sarić</span>
								<span className="logo-title">Električar</span>
							</div>
							<p>
								Profesionalne elektro usluge u Sarajevu i okolini. Licencirani,
								pouzdan i uvijek dostupan.
							</p>
						</div>

						<div className="footer-section">
							<h4>Kontakt</h4>
							<p>061/456-789</p>
							<p>emir.saric@email.com</p>
							<p>Sarajevo, BiH</p>
						</div>

						<div className="footer-section">
							<h4>Usluge</h4>
							<p>Stambeni objekti</p>
							<p>Poslovni prostori</p>
							<p>Hitne intervencije</p>
							<p>EV punjači</p>
						</div>
					</div>

					<div className="footer-bottom">
						<p>&copy; 2024 Emir Sarić. Sva prava zadržana.</p>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Homepage;
