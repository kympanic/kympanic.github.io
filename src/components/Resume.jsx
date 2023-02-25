import React from "react";
import resumeFile from "../documents/resume.pdf";

const Resume = ({ classicHeader, darkTheme }) => {
	const educationDetails = [
		{
			yearRange: "2022 - 2023",
			title: "Software Engineering",
			place: "App Academy",
			desc: "1000-hour immersive full-stack web development intensive bootcamp with <3% acceptance rate",
		},
		{
			yearRange: "2011-2013",
			title: "Associates Degree",
			place: "Montgomery Community College",
			desc: "Provides strong foundation in economics, accounting, management, and project planning",
		},
	];

	const experienceDetails = [
		{
			yearRange: "2022 - 2023",
			title: "Assistant Manager",
			place: "Snap-E Ed's Country Liquor",
			desc: "Managed monthly budget and sales reports, while optimizing cash flow and identifying cost-saving opportunities, resulting in financial gains for the business",
		},
		{
			yearRange: "2018 - 2022",
			title: "Dental Lab Technician",
			place: "Modern Dental USA",
			desc: "Comprehensive understanding of a wide range of dental lab procedures, with exceptional proficiency in model room operations, die trimming, crown glazing and contouring, enabling the ability to transition between multiple functions to delivery high-quality results",
		},
		{
			yearRange: "2016 - 2018",
			title: "Manager/Owner",
			place: "Plus Dental Studio",
			desc: "Started own dental lab business in College Park, MD. Managed all aspects of inventory for the dental lab, built and maintained strong vendor relationships to secure cost-saving opportunities, and ensuring that the team had all the necessary supplies to delivery high-quality products to clients, driving business growth and success",
		},
	];

	const skills = [
		{
			name: "Web Design",
			percent: 65,
		},
		{
			name: "HTML/CSS",
			percent: 95,
		},
		{
			name: "JavaScript",
			percent: 80,
		},
		{
			name: "React JS",
			percent: 70,
		},
		{
			name: "Angular Js",
			percent: 60,
		},
		{
			name: "Bootstrap",
			percent: 99,
		},
	];

	return (
		<section
			id="resume"
			className={"section " + (darkTheme ? "bg-dark-1" : "")}
		>
			<div className={"container " + (classicHeader ? "" : "px-lg-5")}>
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
						Summary
					</h2>
					<p
						className={
							"text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
							(darkTheme ? "text-white" : "text-dark")
						}
					>
						{" "}
						Resume
						<span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
					</p>
				</div>
				{/* Heading end*/}
				<div className="row gx-5">
					{/* My Education */}
					<div className="col-md-6">
						<h2
							className={
								"text-6 fw-600 mb-4 " +
								(darkTheme ? "text-white" : "")
							}
						>
							My Education
						</h2>
						{educationDetails.length > 0 &&
							educationDetails.map((value, index) => (
								<div
									key={index}
									className={
										"bg-white  rounded p-4 mb-4 " +
										(darkTheme
											? "bg-dark"
											: "bg-white border")
									}
								>
									<p className="badge bg-primary text-2 fw-400">
										{value.yearRange}
									</p>
									<h3
										className={
											"text-5 " +
											(darkTheme ? "text-white" : "")
										}
									>
										{value.title}
									</h3>
									<p
										className={
											darkTheme
												? "text-primary"
												: "text-danger"
										}
									>
										{value.place}
									</p>
									<p
										className={
											"mb-0 " +
											(darkTheme ? "text-white-50" : "")
										}
									>
										{value.desc}
									</p>
								</div>
							))}
					</div>
					{/* My Experience */}
					<div className="col-md-6">
						<h2
							className={
								"text-6 fw-600 mb-4 " +
								(darkTheme ? "text-white" : "")
							}
						>
							My Experience
						</h2>
						{experienceDetails.length > 0 &&
							experienceDetails.map((value, index) => (
								<div
									key={index}
									className={
										"bg-white  rounded p-4 mb-4 " +
										(darkTheme
											? "bg-dark"
											: "bg-white border")
									}
								>
									<p className="badge bg-primary text-2 fw-400">
										{value.yearRange}
									</p>
									<h3
										className={
											"text-5 " +
											(darkTheme ? "text-white" : "")
										}
									>
										{value.title}
									</h3>
									<p
										className={
											darkTheme
												? "text-primary"
												: "text-danger"
										}
									>
										{value.place}
									</p>
									<p
										className={
											"mb-0 " +
											(darkTheme ? "text-white-50" : "")
										}
									>
										{value.desc}
									</p>
								</div>
							))}
					</div>
				</div>
				{/* My Skills */}
				{/* <h2
					className={
						"text-6 fw-600 mt-4 mb-4 " +
						(darkTheme ? "text-white" : "")
					}
				>
					My Skills
				</h2>
				<div className="row gx-5">
					{skills.length > 0 &&
						skills.map((skill, index) => (
							<div key={index} className="col-md-6">
								<p
									className={
										" fw-500 text-start mb-2 " +
										(darkTheme ? "text-light" : "text-dark")
									}
								>
									{skill.name}{" "}
									<span className="float-end">
										{skill.percent}%
									</span>
								</p>
								<div
									className={
										"progress progress-sm mb-4 " +
										(darkTheme ? "bg-dark" : "")
									}
								>
									<div
										className="progress-bar"
										role="progressbar"
										style={{ width: skill.percent + "%" }}
										aria-valuenow={skill.percent}
										aria-valuemin={0}
										aria-valuemax={100}
									/>
								</div>
							</div>
						))}
				</div> */}
				<div className="text-center mt-5">
					<a
						className="btn btn-outline-secondary rounded-pill shadow-none"
						href={resumeFile}
						download
					>
						Download CV
						<span className="ms-1">
							<i className="fas fa-download" />
						</span>
					</a>
				</div>
			</div>
		</section>
	);
};

export default Resume;
