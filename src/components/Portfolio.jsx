import React, { useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";
import ProjectDetailsModal from "./ProjectDetailsModal";
const Portfolio = ({ classicHeader, darkTheme }) => {
	// init one ref to store the future isotope object
	const isotope = useRef();
	// store the filter keyword in a state
	const [filterKey, setFilterKey] = useState("*");
	const [imagesLoaded, setimagesLoaded] = useState(0);
	const [selectedProjectDetails, setSelectedProjectDetails] = useState();

	const filters = {
		REACT: "React",
		PYTHON: "Python",
		EXPRESS: "Express",
	};

	const projectsData = [
		{
			title: "Trivia Fighter",
			projectInfo:
				"A full stack application that purports to the theme of a trivia game site, with a focus on three main features: trivia packages, questions, and reviews. Several partial CRUD features include Search, the game itself, and game data history.",
			technologies:
				"HTML5, CSS3, Javascript, Python, React, Flask, SQLAlchemy, Node.js",
			industry: "Education and Entertainment",
			date: "Jan 30, 2022",
			url: {
				name: "trivia fighter",
				link: "https://trivia-fighter-app.onrender.com/",
			},
			socialLinks: {
				facebook: "http://www.facebook.com/",
				twitter: "http://www.twitter.com/",
				google: "http://www.google.com/",
				instagram: "http://www.instagram.com/",
				mail: "mailto:dacapo0509@gmail.com",
			},
			thumbImage: "images/projects/project-1.jpg",
			sliderImages: [
				"images/projects/trivia-fighter2.jpg",
				"images/projects/trivia-fighter3.jpg",
			],
			categories: [filters.REACT, filters.PYTHON],
		},
		{
			title: "KWave",
			projectInfo:
				"KWave is a full stack application built with Express, Sequelize in the backend and React in the frontend. KWave is a SoundCloud clone with a Kpop music theme. Users are able to login/signup and upload/share their music with others",
			client: "Ruby Clinton",
			technologies:
				"HTML5, CSS3, JavaScript, React, Express, Sequelize, Node.js, React Audio Player",
			industry: "Art & Music",
			date: "November 20, 2022",
			url: {
				name: "KWave",
				link: "https://kwave-soundcloud-clone.onrender.com/",
			},
			socialLinks: {
				facebook: "http://www.facebook.com/",
				twitter: "http://www.twitter.com/",
				google: "http://www.google.com/",
				instagram: "http://www.instagram.com/",
				mail: "mailto:dacapo0509@gmail.com",
			},
			thumbImage: "images/projects/project-2.jpg",
			sliderImages: [
				"images/projects/kwave2.jpg",
				"images/projects/kwave3.jpg",
			],
			categories: [filters.REACT, filters.EXPRESS],
		},
		{
			title: "Homecooked",
			projectInfo:
				"Group Project: Homecooked is a one stop shop for finding local vendors that will cook up your next delicious meal. A full stack application that purports to the theme of the Etsy website, with a focus on two main features: Products and Reviews, and several partial CRUD features including Search, Orders, and Cart.",
			client: "Ruby Clinton",
			technologies:
				"JavaScript, Python, React/Redux, CSS3, HTML5, Flask/SQLAlchemy",
			industry: "e-commerce",
			date: "January 5, 2023",
			url: {
				name: "Homecooked",
				link: "https://home-cooked.onrender.com/",
			},
			socialLinks: {
				facebook: "http://www.facebook.com/",
				twitter: "http://www.twitter.com/",
				google: "http://www.google.com/",
				instagram: "http://www.instagram.com/",
				mail: "mailto:dacapo0509@gmail.com",
			},
			thumbImage: "images/projects/project-3.jpg",
			sliderImages: [
				"images/projects/homecooked-2.jpg",
				"images/projects/homecooked-3.jpg",
			],
			categories: [filters.REACT, filters.PYTHON],
		},
	];

	// initialize an Isotope object with configs
	useEffect(() => {
		isotope.current = new Isotope(".portfolio-filter", {
			itemSelector: ".filter-item",
			layoutMode: "masonry",
		});

		// cleanup
		return () => {
			isotope.current.destroy();
		};
	}, []);

	// handling filter key change
	useEffect(() => {
		if (imagesLoaded) {
			filterKey === "*"
				? isotope.current.arrange({ filter: `*` })
				: isotope.current.arrange({ filter: `.${filterKey}` });
		}
	}, [filterKey, imagesLoaded]);

	const handleFilterKeyChange = (key) => () => setFilterKey(key);

	return (
		<>
			<section
				id="portfolio"
				className={"section " + (darkTheme ? "bg-dark-2" : "bg-light")}
			>
				<div
					className={"container " + (classicHeader ? "" : "px-lg-5")}
				>
					{/* Heading */}
					<div className="position-relative d-flex text-center mb-5">
						<h2
							className={
								"text-24  text-uppercase fw-600 w-100 mb-0 " +
								(darkTheme
									? "text-muted opacity-1"
									: "text-light opacity-4")
							}
						>
							Portfolio
						</h2>
						<p
							className={
								"text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
								(darkTheme ? "text-white" : "text-dark")
							}
						>
							{" "}
							My Work
							<span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
						</p>
					</div>
					{/* Heading end*/}
					{/* Filter Menu */}
					<ul
						className={
							"portfolio-menu nav nav-tabs justify-content-center border-bottom-0 mb-5 " +
							(darkTheme ? "nav-light" : "")
						}
					>
						<li className="nav-item">
							<button
								className={
									"nav-link " +
									(filterKey === "*" ? "active" : "")
								}
								onClick={handleFilterKeyChange("*")}
							>
								All
							</button>
						</li>
						{Object.keys(filters).map((oneKey, i) => (
							<li className="nav-item" key={i}>
								<button
									className={
										"nav-link " +
										(filterKey === filters[oneKey]
											? "active"
											: "")
									}
									onClick={handleFilterKeyChange(
										filters[oneKey]
									)}
								>
									{filters[oneKey]}
								</button>
							</li>
						))}
					</ul>
					{/* Filter Menu end */}
					<div className="portfolio popup-ajax-gallery">
						<div className="row portfolio-filter filter-container g-4">
							{projectsData.length > 0 &&
								projectsData.map((project, index) => (
									<div
										className={
											"col-sm-6 col-lg-4 filter-item " +
											project.categories.join(" ")
										}
										key={index}
									>
										<div className="portfolio-box rounded">
											<div className="portfolio-img rounded">
												<img
													onLoad={() => {
														setimagesLoaded(
															imagesLoaded + 1
														);
													}}
													className="img-fluid d-block portfolio-image"
													src={project.thumbImage}
													alt=""
												/>
												<div className="portfolio-overlay">
													<a
														className="popup-ajax stretched-link"
														href=""
														onClick={() => {
															setSelectedProjectDetails(
																projectsData[
																	index
																]
															);
														}}
														data-bs-toggle="modal"
														data-bs-target="#exampleModal"
													/>
													<div className="portfolio-overlay-details">
														<h5 className="text-white fw-400">
															{project.title}
														</h5>
														{/* <span className="text-light">
															Category
														</span> */}
													</div>
												</div>
											</div>
										</div>
									</div>
								))}
						</div>
					</div>
				</div>
			</section>
			<div className="project-details-modal">
				{/* Modal */}
				<ProjectDetailsModal
					projectDetails={selectedProjectDetails}
					darkTheme={darkTheme}
				></ProjectDetailsModal>
			</div>
		</>
	);
};

export default Portfolio;
