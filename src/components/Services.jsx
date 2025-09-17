import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faHome,
	faIndustry,
	faTools,
	faLightbulb,
	faBolt,
	faShieldAlt,
	faPlug,
	faCog,
} from "@fortawesome/free-solid-svg-icons";
import "./Services.css";

const Services = () => {
	const services = [
		{
			icon: faHome,
			title: "Kućne instalacije",
			description:
				"Kompletne elektro instalacije za stanove i kuće, uključujući osvjetljenje i utičnice.",
			features: [
				"Nove instalacije",
				"Renoviranje postojećih",
				"LED osvjetljenje",
				"Pametni prekidači",
			],
		},
		{
			icon: faTools,
			title: "Popravke i održavanje",
			description:
				"Brze i efikasne popravke svih vrsta elektro kvarova u vašem domu ili poslovnom prostoru.",
			features: [
				"Kvarovi na instalaciji",
				"Zamjena prekidača",
				"Popravka utičnica",
				"Dijagnostika problema",
			],
		},
		{
			icon: faShieldAlt,
			title: "Sigurnosni sistemi",
			description:
				"Instalacija i održavanje sistema za sigurnost, protuprovalne alarme i video nadzor.",
			features: [
				"Protuprovalni alarmi",
				"Video nadzor",
				"Interfoni",
				"Kontrola pristupa",
			],
		},
		{
			icon: faIndustry,
			title: "Poslovni prostori",
			description:
				"Elektro radovi za poslovne objekte, prodavnice, ordinacije i druge komercijalne prostore.",
			features: [
				"Kancelarije",
				"Prodavnice",
				"Restorani",
				"Medicinskih ordinacija",
			],
		},
		{
			icon: faBolt,
			title: "Hitni pozivi",
			description:
				"Dostupan sam 24/7 za sve hitne elektro probleme koji zahtijevaju trenutno rješavanje.",
			features: [
				"Nestanak struje",
				"Kratki spoj",
				"Opasni kvarovi",
				"Noćni pozivi",
			],
		},
		{
			icon: faPlug,
			title: "Punjači za auta",
			description:
				"Instalacija kućnih punjača za električne automobile i hibridna vozila.",
			features: [
				"Kućni punjači",
				"Javni punjači",
				"Konzultacije",
				"Održavanje",
			],
		},
	];

	return (
		<section className="services" id="usluge">
			<div className="container">
				<div className="section-title">
					<h2>Moje usluge</h2>
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
									<li key={featureIndex}>
										<FontAwesomeIcon
											icon={faLightbulb}
											className="feature-icon"
										/>
										{feature}
									</li>
								))}
							</ul>

							<div className="service-cta">
								<a href="tel:+38761123456" className="service-btn">
									Pozovi za ponudu
								</a>
							</div>
						</div>
					))}
				</div>

				<div className="services-footer">
					<div className="guarantee-badge">
						<FontAwesomeIcon icon={faShieldAlt} />
						<div>
							<h4>Garancija na rad</h4>
							<p>12 mjeseci garancije na sve radove</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services;
