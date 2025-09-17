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
	faImages,
	faCheck,
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
	const [formSubmitted, setFormSubmitted] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);

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

	const handleFormSubmit = async (e) => {
		e.preventDefault();
		setIsSubmitting(true);

		// Simulate form submission
		setTimeout(() => {
			setIsSubmitting(false);
			setFormSubmitted(true);
			setFormData({
				name: "",
				email: "",
				phone: "",
				service: "",
				message: "",
			});

			// Hide success message after 5 seconds
			setTimeout(() => {
				setFormSubmitted(false);
			}, 5000);
		}, 1500);
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

	const galleryImages = [
		{
			url: "https://images.pexels.com/photos/1426620/pexels-photo-1426620.jpeg",
			title: "Moderna LED rasvjeta",
			description: "Instalacija LED sistema u poslovnom prostoru",
		},
		{
			url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
			title: "Elektro instalacije",
			description: "Kompletna instalacija u stambenom objektu",
		},
		{
			url: "https://images.pexels.com/photos/96612/pexels-photo-96612.jpeg",
			title: "Sigurnosni sistemi",
			description: "Video nadzor i alarm sistemi",
		},
		{
			url: "https://images.pexels.com/photos/9800002/pexels-photo-9800002.jpeg",
			title: "EV punjači",
			description: "Instalacija električnih punjača",
		},
		{
			url: "https://images.pexels.com/photos/9242887/pexels-photo-9242887.jpeg",
			title: "Profesionalna oprema",
			description: "Korištenje najmodernijih alata",
		},
		{
			url: "https://images.pexels.com/photos/8853504/pexels-photo-8853504.jpeg",
			title: "Održavanje sistema",
			description: "Redovno održavanje i provjere",
		},
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
								alt="Emir Sarić - Licencirani Električar"
								className="logo-image"
							/>
						</div>

						<nav className={`nav ${isMenuOpen ? "nav-open" : ""}`}>
							<a href="#home" onClick={() => scrollToSection("home")}>
								Početna
							</a>
							<a href="#usluge" onClick={() => scrollToSection("usluge")}>
								Usluge
							</a>
							<a href="#galerija" onClick={() => scrollToSection("galerija")}>
								Galerija
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
							<div className="header-contact">
								<span className="contact-label">Pozovite odmah</span>
								<a href="tel:+38761456789" className="phone-number">
									<FontAwesomeIcon icon={faPhone} />
									061/456-789
								</a>
							</div>

							<a href="tel:+38761456789" className="cta-button">
								<FontAwesomeIcon icon={faPhone} />
								<span>Pozovi</span>
							</a>

							<button
								className="menu-toggle"
								onClick={() => setIsMenuOpen(!isMenuOpen)}
							>
								<span className={`hamburger ${isMenuOpen ? "active" : ""}`}>
									<span></span>
									<span></span>
									<span></span>
								</span>
							</button>
						</div>
					</div>
				</div>
			</header>

			{/* Hero Section */}
			<section className="hero" id="home">
				<div className="hero-background">
					<div className="hero-pattern"></div>
				</div>

				<div className="container">
					<div className="hero-content">
						<div className="hero-main">
							<div className="hero-badge">
								<FontAwesomeIcon icon={faBolt} />
								<span>Licencirani električar sa 15+ godina iskustva</span>
							</div>

							<h1 className="hero-title">
								Profesionalne elektro usluge
								<span className="highlight"> u Sarajevu</span>
							</h1>

							<p className="hero-description">
								Od hitnih intervencija do kompletnih instalacija - pružam
								vrhunske elektro usluge sa garancijom kvaliteta i dugogodišnjim
								iskustvom. Dostupan 24/7 za sve vaše potrebe.
							</p>

							<div className="hero-features-grid">
								<div className="hero-feature">
									<div className="feature-icon">
										<FontAwesomeIcon icon={faCheckCircle} />
									</div>
									<span>Licencirani i certificirani</span>
								</div>
								<div className="hero-feature">
									<div className="feature-icon">
										<FontAwesomeIcon icon={faClock} />
									</div>
									<span>24/7 hitna pomoć</span>
								</div>
								<div className="hero-feature">
									<div className="feature-icon">
										<FontAwesomeIcon icon={faShieldAlt} />
									</div>
									<span>Garancija 12 mjeseci</span>
								</div>
								<div className="hero-feature">
									<div className="feature-icon">
										<FontAwesomeIcon icon={faAward} />
									</div>
									<span>500+ uspješnih projekata</span>
								</div>
							</div>

							<div className="hero-cta">
								<a
									href="tel:+38761456789"
									className="btn btn-primary hero-btn-primary"
								>
									<FontAwesomeIcon icon={faPhone} />
									Pozovite odmah
								</a>
								<button
									className="btn btn-secondary hero-btn-secondary"
									onClick={() => scrollToSection("kontakt")}
								>
									<FontAwesomeIcon icon={faPaperPlane} />
									Zatražite ponudu
								</button>
							</div>
						</div>

						<div className="hero-visual">
							<div className="hero-image-container">
								<img
									src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
									alt="Profesionalni elektro radovi"
									className="hero-image"
								/>
								<div className="image-overlay">
									<div className="quality-badge">
										<FontAwesomeIcon icon={faStar} />
										<span>Vrhunski kvalitet</span>
									</div>
								</div>
							</div>

							<div className="hero-stats-card">
								{stats.map((stat, index) => (
									<div key={index} className="hero-stat">
										<div className="stat-number">{stat.number}</div>
										<div className="stat-label">{stat.label}</div>
									</div>
								))}
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
							<h3>Trebate prilagođeno rješenje?</h3>
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

			{/* Gallery Section */}
			<section className="gallery" id="galerija">
				<div className="container">
					<div className="section-header">
						<h2>Naši radovi</h2>
						<p>Pogledajte neke od naših uspješno završenih projekata</p>
					</div>

					<div className="gallery-grid">
						{galleryImages.map((image, index) => (
							<div key={index} className="gallery-item">
								<div className="gallery-image">
									<img src={image.url} alt={image.title} />
									<div className="gallery-overlay">
										<div className="gallery-content">
											<h4>{image.title}</h4>
											<p>{image.description}</p>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>

					<div className="gallery-cta">
						<p>Želite vidjeti više naših radova?</p>
						<a href="tel:+38761456789" className="btn btn-primary">
							<FontAwesomeIcon icon={faImages} />
							Pozovite za više informacija
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
										<p>emir.saric@gmail.com</p>
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

						<div className="contact-form-container">
							{formSubmitted && (
								<div className="success-message">
									<FontAwesomeIcon icon={faCheck} />
									<h4>Poruka uspješno poslana!</h4>
									<p>
										Hvala vam na povjerenju. Kontaktirat ću vas u najkraćem
										roku.
									</p>
								</div>
							)}

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
											disabled={isSubmitting}
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
											disabled={isSubmitting}
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
										disabled={isSubmitting}
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
										disabled={isSubmitting}
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
										disabled={isSubmitting}
									></textarea>
								</div>

								<button
									type="submit"
									className={`btn btn-primary ${
										isSubmitting ? "submitting" : ""
									}`}
									disabled={isSubmitting}
								>
									{isSubmitting ? (
										<>
											<div className="loading-spinner"></div>
											Šalje se...
										</>
									) : (
										<>
											<FontAwesomeIcon icon={faPaperPlane} />
											Pošaljite poruku
										</>
									)}
								</button>
							</form>
						</div>
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
								<a href="mailto:emir.saric@gmail.com">
									<FontAwesomeIcon icon={faEnvelope} />
									emir.saric@gmail.com
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
						<p>&copy; 2025 Emir Sarić. Sva prava zadržana.</p>
						<div className="footer-links">
							<a href="#usluge" onClick={() => scrollToSection("usluge")}>
								Usluge
							</a>
							<a href="#galerija" onClick={() => scrollToSection("galerija")}>
								Galerija
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
