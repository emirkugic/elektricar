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
	faLightbulb,
	faWrench,
	faStar,
	faQuoteLeft,
	faArrowRight,
	faPlay,
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
	const [currentTestimonial, setCurrentTestimonial] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	useEffect(() => {
		const testimonialInterval = setInterval(() => {
			setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
		}, 5000);

		return () => clearInterval(testimonialInterval);
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
				"Kompletne elektro instalacije za stanove, kuće i vikendice. Moderna rješenja sa garancijom kvaliteta.",
			price: "Od 50 KM",
			features: ["Kompletna instalacija", "LED rasvjeta", "Sigurnosni sistemi"],
		},
		{
			icon: faIndustry,
			title: "Poslovni prostori",
			description:
				"Elektro radovi za kancelarije, prodavnice, restorane i druge komercijalne objekte.",
			price: "Po dogovoru",
			features: [
				"Profesionalna instalacija",
				"Energetska efikasnost",
				"24/7 podrška",
			],
		},
		{
			icon: faTools,
			title: "Popravke & Održavanje",
			description:
				"Brze intervencije za sve vrste elektro kvarova. Dostupan 24/7 za hitne slučajeve.",
			price: "Od 30 KM",
			features: [
				"Hitne intervencije",
				"Dijagnostika",
				"Preventivno održavanje",
			],
		},
		{
			icon: faShieldAlt,
			title: "Sigurnosni sistemi",
			description:
				"Instalacija video nadzora, alarma i sistema kontrole pristupa za maksimalnu sigurnost.",
			price: "Od 200 KM",
			features: ["Video nadzor", "Alarm sistemi", "Kontrola pristupa"],
		},
		{
			icon: faBolt,
			title: "Hitni pozivi",
			description:
				"24/7 dostupnost za sve elektro hitne slučajeve u Sarajevu i okolini.",
			price: "Uvijek dostupan",
			features: ["24/7 dostupnost", "Brza reakcija", "Profesionalna oprema"],
		},
		{
			icon: faPlug,
			title: "EV punjači",
			description:
				"Instalacija kućnih i javnih punjača za električna i hibridna vozila.",
			price: "Od 800 KM",
			features: ["Kućni punjači", "Javni punjači", "Smart funkcije"],
		},
	];

	const testimonials = [
		{
			name: "Amira Hasić",
			role: "Vlasnica stana",
			text: "Emir je uradio kompletnu instalaciju u našem novom stanu. Profesionalno, uredno i u dogovorenom roku. Preporučujem svima!",
			rating: 5,
		},
		{
			name: "Muhamed Dizdar",
			role: "Vlasnik restorana",
			text: "Kada nam je pala struja u restoranu, Emir je došao u roku od sat vremena. Brzo je riješio problem i spasio nam večernji rad.",
			rating: 5,
		},
		{
			name: "Sabina Muratović",
			role: "Direktor firme",
			text: "Instalirao je LED rasvjetu u našem uredu. Sada imamo savršenu rasvjetu i ušteđujemo na struji. Odličan posao!",
			rating: 5,
		},
	];

	const stats = [
		{ number: "500+", label: "Projekata" },
		{ number: "15+", label: "Godina iskustva" },
		{ number: "100%", label: "Zadovoljnih klijenata" },
		{ number: "24/7", label: "Podrška" },
	];

	return (
		<div className="homepage">
			{/* Header */}
			<header className={`header ${isScrolled ? "scrolled" : ""}`}>
				<div className="container">
					<div className="header-content">
						<div className="logo">
							<img
								src="/logo.png"
								alt="Emir Sarić Logo"
								className="logo-image"
							/>
							<div className="logo-text">
								<span className="logo-name">Emir Sarić</span>
								<span className="logo-title">Licencirani Električar</span>
							</div>
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
							<a href="#recenzije" onClick={() => scrollToSection("recenzije")}>
								Recenzije
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
				<div className="hero-background">
					<div className="hero-shapes">
						<div className="shape shape-1"></div>
						<div className="shape shape-2"></div>
						<div className="shape shape-3"></div>
					</div>
				</div>

				<div className="container">
					<div className="hero-content">
						<div className="hero-text">
							<div className="hero-badge">
								<FontAwesomeIcon icon={faAward} />
								<span>
									Licencirani električar • 15+ godina iskustva • 500+ projekata
								</span>
							</div>

							<h1>
								<span className="highlight">Profesionalni</span> elektro radovi
								<br />u Sarajevu
							</h1>

							<p className="hero-description">
								Vaš pouzdani partner za sve elektro potrebe. Od kompletnih
								instalacija do hitnih intervencija - nudim vrhunsku uslugu sa
								garancijom kvaliteta.
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
								<a href="tel:+38761456789" className="btn btn-primary pulse">
									<FontAwesomeIcon icon={faPhone} />
									Pozovite odmah
								</a>
								<button
									className="btn btn-secondary"
									onClick={() => scrollToSection("kontakt")}
								>
									<FontAwesomeIcon icon={faPaperPlane} />
									Zatražite ponudu
								</button>
							</div>

							<div className="hero-stats">
								{stats.map((stat, index) => (
									<div key={index} className="stat">
										<span className="stat-number">{stat.number}</span>
										<span className="stat-label">{stat.label}</span>
									</div>
								))}
							</div>
						</div>

						<div className="hero-visual">
							<div className="hero-card">
								<div className="card-header">
									<FontAwesomeIcon icon={faBolt} />
									<span>Profesionalna usluga</span>
								</div>
								<div className="card-content">
									<h3>Brzo. Sigurno. Profesionalno.</h3>
									<p>Sve što trebate za vaše elektro potrebe</p>
									<div className="card-features">
										<div className="card-feature">
											<FontAwesomeIcon icon={faLightbulb} />
											<span>Moderna rješenja</span>
										</div>
										<div className="card-feature">
											<FontAwesomeIcon icon={faWrench} />
											<span>Stručan pristup</span>
										</div>
									</div>
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
						<p>Kompletno rješenje za sve vaše elektro potrebe</p>
					</div>

					<div className="services-grid">
						{services.map((service, index) => (
							<div key={index} className="service-card">
								<div className="service-header">
									<div className="service-icon">
										<FontAwesomeIcon icon={service.icon} />
									</div>
									<div className="service-price">{service.price}</div>
								</div>

								<h3>{service.title}</h3>
								<p>{service.description}</p>

								<div className="service-features">
									{service.features.map((feature, idx) => (
										<div key={idx} className="service-feature">
											<FontAwesomeIcon icon={faCheckCircle} />
											<span>{feature}</span>
										</div>
									))}
								</div>

								<a href="tel:+38761456789" className="service-btn">
									<span>Zatražite ponudu</span>
									<FontAwesomeIcon icon={faArrowRight} />
								</a>
							</div>
						))}
					</div>

					<div className="services-cta">
						<div className="cta-content">
							<h3>Trebate custom rješenje?</h3>
							<p>
								Kontaktirajte nas za prilagođenu ponudu prema vašim potrebama
							</p>
						</div>
						<a href="tel:+38761456789" className="btn btn-primary">
							<FontAwesomeIcon icon={faPhone} />
							Pozovite nas
						</a>
					</div>
				</div>
			</section>

			{/* About Section */}
			<section className="about" id="o-meni">
				<div className="container">
					<div className="about-content">
						<div className="about-text">
							<div className="section-header">
								<h2>O meni</h2>
								<p>Vaš pouzdani partner za sve elektro radove</p>
							</div>

							<div className="about-story">
								<h3>Emir Sarić - Licencirani Električar</h3>
								<p>
									Sa više od 15 godina iskustva u elektro struci, posvećen sam
									pružanju vrhunskih usluga svim klijentima. Moja strast prema
									ovom poslu i kontinuirana edukacija omogućavaju mi da pratim
									najnovije tehnologije i standarde u struci.
								</p>
								<p>
									Vjerujem da kvalitetan rad i poštena cijena čine temelj
									uspješnog poslovanja. Zato svaki projekat pristupam sa
									maksimalnom pažnjom i profesionalizmom.
								</p>
							</div>

							<div className="about-certifications">
								<div className="certification">
									<FontAwesomeIcon icon={faAward} />
									<div>
										<h4>Licencirani električar</h4>
										<p>Potpuno licencirani i certificirani u BiH</p>
									</div>
								</div>
								<div className="certification">
									<FontAwesomeIcon icon={faShieldAlt} />
									<div>
										<h4>Osiguran rad</h4>
										<p>Svi radovi su pokriveni osiguranjem</p>
									</div>
								</div>
							</div>
						</div>

						<div className="about-stats">
							<div className="stats-grid">
								{stats.map((stat, index) => (
									<div key={index} className="stat-card">
										<div className="stat-icon">
											<FontAwesomeIcon
												icon={
													index === 0
														? faUsers
														: index === 1
														? faAward
														: index === 2
														? faStar
														: faClock
												}
											/>
										</div>
										<h4>{stat.number}</h4>
										<p>{stat.label}</p>
									</div>
								))}
							</div>

							<div className="about-highlights">
								<div className="highlight">
									<h4>Iskustvo koje možete vjerovati</h4>
									<p>
										15+ godina rada u struci sa 500+ uspješno završenih
										projekata
									</p>
								</div>
								<div className="highlight">
									<h4>Garancija kvaliteta</h4>
									<p>
										12 mjeseci garancije na sve radove i korišćene materijale
									</p>
								</div>
								<div className="highlight">
									<h4>24/7 dostupnost</h4>
									<p>Uvijek dostupan za hitne slučajeve u Sarajevu i okolini</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Testimonials Section */}
			<section className="testimonials" id="recenzije">
				<div className="container">
					<div className="section-header">
						<h2>Što kažu naši klijenti</h2>
						<p>Ponos nam je što imamo zadovoljne klijente</p>
					</div>

					<div className="testimonials-container">
						<div className="testimonial-card active">
							<div className="testimonial-content">
								<FontAwesomeIcon icon={faQuoteLeft} className="quote-icon" />
								<p>"{testimonials[currentTestimonial].text}"</p>

								<div className="testimonial-author">
									<div className="author-info">
										<h4>{testimonials[currentTestimonial].name}</h4>
										<span>{testimonials[currentTestimonial].role}</span>
									</div>
									<div className="rating">
										{[...Array(testimonials[currentTestimonial].rating)].map(
											(_, i) => (
												<FontAwesomeIcon key={i} icon={faStar} />
											)
										)}
									</div>
								</div>
							</div>
						</div>

						<div className="testimonial-nav">
							{testimonials.map((_, index) => (
								<button
									key={index}
									className={`nav-dot ${
										currentTestimonial === index ? "active" : ""
									}`}
									onClick={() => setCurrentTestimonial(index)}
								></button>
							))}
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
							<div className="contact-hero">
								<h3>Pozovite ili pošaljite poruku</h3>
								<p>
									Bilo da trebate hitnu pomoć ili planirate veći projekat, tu
									sam da vam pomognem. Besplatna procjena za sve radove.
								</p>
							</div>

							<div className="contact-methods">
								<div className="contact-method">
									<div className="method-icon">
										<FontAwesomeIcon icon={faPhone} />
									</div>
									<div className="method-info">
										<h4>Telefon</h4>
										<p>061/456-789</p>
										<span>Dostupan 24/7</span>
									</div>
								</div>

								<div className="contact-method">
									<div className="method-icon">
										<FontAwesomeIcon icon={faEnvelope} />
									</div>
									<div className="method-info">
										<h4>Email</h4>
										<p>emir.saric@email.com</p>
										<span>Brz odgovor</span>
									</div>
								</div>

								<div className="contact-method">
									<div className="method-icon">
										<FontAwesomeIcon icon={faMapMarkerAlt} />
									</div>
									<div className="method-info">
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
									<FontAwesomeIcon icon={faBolt} />
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
						<div className="footer-brand">
							<div className="footer-logo">
								<img
									src="/logo.png"
									alt="Emir Sarić Logo"
									className="logo-image"
								/>
								<div className="logo-text">
									<span className="logo-name">Emir Sarić</span>
									<span className="logo-title">Licencirani Električar</span>
								</div>
							</div>
							<p>
								Profesionalne elektro usluge u Sarajevu i okolini. Licencirani,
								pouzdan i uvijek dostupan za vaše potrebe.
							</p>
							<div className="footer-stats">
								<span>15+ godina iskustva</span>
								<span>500+ projekata</span>
								<span>24/7 podrška</span>
							</div>
						</div>

						<div className="footer-section">
							<h4>Kontakt</h4>
							<div className="footer-contact">
								<a href="tel:+38761456789">
									<FontAwesomeIcon icon={faPhone} />
									061/456-789
								</a>
								<a href="mailto:emir.saric@email.com">
									<FontAwesomeIcon icon={faEnvelope} />
									emir.saric@email.com
								</a>
								<span>
									<FontAwesomeIcon icon={faMapMarkerAlt} />
									Sarajevo, BiH
								</span>
							</div>
						</div>

						<div className="footer-section">
							<h4>Usluge</h4>
							<div className="footer-services">
								<span>Stambeni objekti</span>
								<span>Poslovni prostori</span>
								<span>Hitne intervencije</span>
								<span>EV punjači</span>
								<span>Sigurnosni sistemi</span>
							</div>
						</div>
					</div>

					<div className="footer-bottom">
						<p>&copy; 2024 Emir Sarić. Sva prava zadržana.</p>
						<div className="footer-links">
							<a href="#usluge" onClick={() => scrollToSection("usluge")}>
								Usluge
							</a>
							<a href="#o-meni" onClick={() => scrollToSection("o-meni")}>
								O meni
							</a>
							<a href="#kontakt" onClick={() => scrollToSection("kontakt")}>
								Kontakt
							</a>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Homepage;
