import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faHome,
	faIndustry,
	faTools,
	faShieldAlt,
	faBolt,
	faPlug,
	faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import "./Services.css";

const Services = () => {
	const services = [
		{
			icon: faHome,
			title: "Stambeni objekti",
			description:
				"Kompletne elektro instalacije za stanove, kuće i vikendice.",
			features: [
				"Nove instalacije",
				"Renoviranje",
				"LED osvjetljenje",
				"Pametni sistemi",
			],
		},
		{
			icon: faIndustry,
			title: "Poslovni prostori",
			description:
				"Elektro radovi za poslovne objekte, prodavnice i ordinacije.",
			features: ["Kancelarije", "Prodavnice", "Restorani", "Ordinacije"],
		},
		{
			icon: faTools,
			title: "Popravke i održavanje",
			description: "Brze intervencije za sve vrste elektro kvarova.",
			features: [
				"Dijagnostika kvarova",
				"Zamjena komponenti",
				"Preventivno održavanje",
				"Hitne intervencije",
			],
		},
		{
			icon: faShieldAlt,
			title: "Sigurnosni sistemi",
			description: "Instalacija sistema za sigurnost i video nadzor.",
			features: ["Video nadzor", "Alarmi", "Interfoni", "Kontrola pristupa"],
		},
		{
			icon: faBolt,
			title: "Hitni pozivi",
			description: "Dostupnost 24/7 za sve elektro hitne slučajeve.",
			features: [
				"Nestanak struje",
				"Kratki spoj",
				"Opasni kvarovi",
				"Noćne intervencije",
			],
		},
		{
			icon: faPlug,
			title: "Punjači za vozila",
			description: "Instalacija kućnih punjača za električna vozila.",
			features: ["Kućni punjači", "Wallbox sistemi", "Konzultacije", "Servis"],
		},
	];

	return (
		<section className="services section" id="usluge">
			<div className="container">
				<div className="section-header">
					<h2>Naše usluge</h2>
					<p>Profesionalne elektro usluge prilagođene vašim potrebama</p>
				</div>

				<div className="services-grid">
					{services.map((service, index) => (
						<div key={index} className="service-card">
							<div className="service-icon">
								<FontAwesomeIcon icon={service.icon} />
							</div>

							<h3>{service.title}</h3>
							<p className="service-description">{service.description}</p>

							<ul className="service-features">
								{service.features.map((feature, featureIndex) => (
									<li key={featureIndex}>{feature}</li>
								))}
							</ul>

							<a href="tel:+38761456789" className="service-link">
								Zatražite ponudu
								<FontAwesomeIcon icon={faArrowRight} />
							</a>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Services;
