import React from "react";
import "./services.css";
const Services = ({ classicHeader, darkTheme }) => {
	// services details
	const services = [
		{
			name: "JavaScript",
			desc: "A lightweight, interpreted, or just-in-time compiled programming language with first-class functions.",
			icon: "fas fa-palette",
			img: "https://soundcloud-clone-kpop-seeders.s3.us-west-2.amazonaws.com/JavaScript-logo.png",
		},
		{
			name: "React",
			desc: "A declarative, efficient, and flexible JavaScript library for building user interfaces.",
			icon: "fas fa-desktop",
			img: "https://soundcloud-clone-kpop-seeders.s3.us-west-2.amazonaws.com/react-1-logo-png-transparent.png",
		},
		{
			name: "Python",
			desc: "Often used to build websites and software, automate tasks, and conduct data analysis.",
			icon: "fas fa-pencil-ruler",
			img: "data:image/png;base64,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",
		},
		{
			name: "Node.js",
			desc: "An open source, cross-platform runtime environment for executing JavaScript code.",
			icon: "fas fa-chart-area",
			img: "https://soundcloud-clone-kpop-seeders.s3.us-west-2.amazonaws.com/nodeJs.png",
		},
		{
			name: "HTML5",
			desc: "The standard programming language for describing the contents and appearance of Web pages.",
			icon: "fas fa-bullhorn",
			img: "https://soundcloud-clone-kpop-seeders.s3.us-west-2.amazonaws.com/png-transparent-logo-html-html5.png",
		},
		{
			name: "CSS3",
			desc: "The language for describing the presentation of Web pages, including colors, layout, and fonts.",
			icon: "fas fa-bullhorn",
			img: "https://soundcloud-clone-kpop-seeders.s3.us-west-2.amazonaws.com/299-2994003_css3-icon-logo-css3-hd-png-download.png",
		},
		{
			name: "PostgreSQL",
			desc: "Open source object-relational database system that uses and extends the SQL language.",
			icon: "fas fa-bullhorn",
			img: "https://soundcloud-clone-kpop-seeders.s3.us-west-2.amazonaws.com/postgresql.png",
		},
		{
			name: "Sequelize",
			desc: "A promise-based, Node.js ORM (Object-relational mapping) for Postgres, MySQL, MariaDB, SQLite.",
			icon: "fas fa-bullhorn",
			img: "https://soundcloud-clone-kpop-seeders.s3.us-west-2.amazonaws.com/sequelize.jpg",
		},
		{
			name: "Express",
			desc: "A layer built on the top of the Node js that helps manage servers and routes..",
			icon: "fas fa-bullhorn",
			img: "https://soundcloud-clone-kpop-seeders.s3.us-west-2.amazonaws.com/express.png",
		},
		{
			name: "Flask",
			desc: "A web framework that is a Python module that lets your develop web applications",
			icon: "fas fa-paint-brush",
			img: "https://soundcloud-clone-kpop-seeders.s3.us-west-2.amazonaws.com/flask.png",
		},
		{
			name: "Github",
			desc: "A code hosting platform for version control and collaboration.",
			icon: "fas fa-paint-brush",
			img: "https://soundcloud-clone-kpop-seeders.s3.us-west-2.amazonaws.com/github.png",
		},
		{
			name: "Heroku",
			desc: "A container-based cloud Platform. Used to deploy, manage, and scale modern apps.",
			icon: "fas fa-paint-brush",
			img: "https://soundcloud-clone-kpop-seeders.s3.us-west-2.amazonaws.com/heroku.png",
		},
	];

	return (
		<section
			id="services"
			className={"section " + (darkTheme ? "bg-dark-2" : "bg-light")}
		>
			<div className={"container " + (classicHeader ? "" : "px-lg-5")}>
				{/* Heading */}
				<div className="position-relative d-flex text-center mb-5">
					<h2
						className={
							"text-24  text-uppercase fw-600 w-100 mb-0 " +
							(darkTheme
								? "text-white-50  opacity-1"
								: "text-light  opacity-4")
						}
					>
						Technologies
					</h2>
					<p
						className={
							"text-9  fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
							(darkTheme ? "text-white" : "text-dark")
						}
					>
						My Skills
						<span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
					</p>
				</div>
				{/* Heading end*/}
				{/* content start */}
				<div className="row">
					<div className="col-lg-11 mx-auto">
						<div className="row">
							{services.length > 0 &&
								services.map((service, index) => (
									<div className="col-md-6" key={index}>
										<div className="featured-box style-3 mb-5">
											<div
												className={
													"featured-box-icon text-primary  shadow-sm rounded " +
													(darkTheme
														? "bg-dark-1"
														: "bg-white")
												}
											>
												<img
													className="service-img"
													src={service.img}
													alt="service-icon"
												/>
												{/* <i className={service.icon} /> */}
											</div>
											<h3
												className={
													darkTheme
														? "text-white"
														: ""
												}
											>
												{service.name}
											</h3>
											<p
												className={
													"mb-0 " +
													(darkTheme
														? "text-white-50"
														: "")
												}
											>
												{service.desc}
											</p>
										</div>
									</div>
								))}
						</div>
					</div>
				</div>
				{/* content end */}
			</div>
		</section>
	);
};

export default Services;
