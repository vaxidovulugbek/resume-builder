import { useExperienceEducation, useSelectorRedux } from "hooks";
import { isArray } from "lodash";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import useStore from "../../zustand/store";
import cn from "classnames";
import parse from "html-react-parser";
// import { FaPhoneAlt, FaEnvelope, FaLinkedinIn } from "react-icons/fa";
// import { ImLocation } from "react-icons/im";

export const Res2: React.FC = () => {
	const {
		resumeName,
		resumeLastName,
		resumeEmail,
		resumePhone,
		resumeAdress,
		resumeJobTitle,
		resumeSocialLinks,
		resumeAbout,
		resumePosition,
		resumeSkills,
		resumeEducationPosition,
		resumeInterests,
		resumeLanguages,
		resumeVolunteeringActivityName,
		resumeVolunteeringAddress,
		resumeVolunteeringStartDate,
		resumeVolunteeringEndDate,
		resumeVolunteeringAbout,
	} = useSelectorRedux();

	const {
		idExpirence,
		dataVolunteering,
		dataInterests,
		idEducation,
		setIdExpirence,
		setIdEducation,
	} = useStore();

	const dispatch = useDispatch();
	const { getExperienceData, getEducationData } = useExperienceEducation();
	const experience = getExperienceData();
	const education = getEducationData();

	const [filteredExperience, setFilteredExperience] = useState<
		{
			id?: number | string;
			position: string;
			companyName: string;
			startDate: string;
			endDate: string;
			experienceAbout: string;
		}[]
	>([]);
	const [filteredEducation, setFilteredEducation] = useState<
		{
			id?: number | string;
			position: string;
			instructionName: string;
			educationStartDate: string;
			educationEndDate: string;
			educationAbout: string;
		}[]
	>([]);

	useEffect(() => {
		if (idExpirence !== undefined) {
			const filtered = experience?.filter((el) => el.id !== idExpirence);
			setFilteredExperience(filtered);
			setIdExpirence(null);
		}
	}, [idExpirence, dispatch, resumePosition]);
	useEffect(() => {
		if (idEducation !== undefined) {
			const filtered = education?.filter((el) => el.id !== idEducation);
			setFilteredEducation(filtered);
			setIdEducation(null);
		}
	}, [idEducation, dispatch, resumeEducationPosition]);
	return (
		<div className="flex flex-col" style={{ maxWidth: "700px", minHeight: "800px" }}>
			<div className="bg-slate-700 w-full py-10 flex flex-col">
				<h2 className="text-center text-amber-200 text-[30px] tracking-[9px] font-serif">
					{resumeName ? resumeName : "EMMA"} {resumeLastName ? resumeLastName : "WATSON"}
				</h2>
				<p className="text-center text-amber-200 text-[12px] font-medium tracking-[2px] font-mono">
					{resumeJobTitle ? resumeJobTitle : "Digital marketing specialist"}
				</p>
			</div>
			<div className="w-full bg-white shadow-xl flex content-center grow">
				<div className="w-[33%] ps-9 pe-4 py-9">
					<div className="mb-6">
						<p className="font-semibold uppercase tracking-widest text-[14px] mb-4">
							Contact
						</p>
						<ul className="grid gap-3 text-[11px] font-medium">
							<li className="flex gap-3 items-center">
								{/* <FaPhoneAlt /> */}
								<span>{resumePhone ? resumePhone : "(90) 053 11 02"}</span>
							</li>
							<li className="flex gap-3 items-center">
								{/* <FaEnvelope /> */}
								<span>{resumeEmail ? resumeEmail : "yourEmail@mail.com"}</span>
							</li>
							<li className="flex gap-3 items-center">
								{/* <ImLocation /> */}
								<span>{resumeAdress ? resumeAdress : "your address"}</span>
							</li>
							<li className="flex gap-3 items-center">
								{/* <FaLinkedinIn /> */}
								{isArray(resumeSocialLinks) &&
									resumeSocialLinks.map((item, index) => (
										<span key={index} className="flex items-center">
											{item?.value1
												? `${item?.value1}: ${item?.value2}`
												: item?.value2}
										</span>
									))}
							</li>
						</ul>
					</div>

					{/* <div className="mb-6">
						<p className="font-bold tracking-widest text-[14px] mb-4 uppercase">
							EDUCATION
						</p>
						{isArray(filteredEducation) &&
							filteredEducation.map((item, index) => {
								return (
									<div className="text-[11px] font-medium">
										<p className="mb-1">
											{item?.position
												? item?.position
												: "Masters in Human Resources"}{" "}
										</p>
										<p className="mb-1">
											{" "}
											{item?.instructionName
												? item?.instructionName
												: "The University of Texas, Dallas"}
										</p>
										<p className="mb-1">
											{item?.educationStartDate
												? item?.educationStartDate
												: "September 2007"}{" "}
											-{" "}
											{item?.educationEndDate
												? item?.educationEndDate
												: "May 2011"}
										</p>
										<p>
											{item?.educationAbout
												? parse(item?.educationAbout)
												: `manage degital sales, and streming accaunts to improve
											brand positioning and growth`}
										</p>
									</div>
								);
							})}
					</div> */}

					<div className="mb-6">
						<p className="font-bold uppercase mb-4 tracking-widest text-[14px] uppercase">
							SKILLs
						</p>
						<ul className="list-disc text-[11px] font-medium ml-[14px] gap-2">
							{resumeSkills?.length > 0
								? resumeSkills?.map((el: any, index: number) => {
										return (
											<li className="mb-2 capitalize" key={index}>
												{el}
											</li>
										);
									})
								: [
										"adobe photoshop",
										"adobe illustrator",
										"figma",
										"digital marketing",
										"corel draw",
									].map((el, index) => {
										return (
											<li className="mb-2 capitalize" key={index}>
												{el}
											</li>
										);
									})}
						</ul>
					</div>

					<div>
						<p className="font-bold uppercase mb-4 tracking-widest text-[14px] uppercase">
							languages
						</p>
						<ul className="list-disc text-[11px] font-medium ml-[14px] gap-2">
							{resumeLanguages?.length > 0
								? resumeLanguages?.map((el: any, index: number) => {
										return (
											<li className="mb-2 capitalize" key={index}>
												{el?.value1
													? `${el?.value1}: ${el?.value2}`
													: el?.value2}
											</li>
										);
									})
								: ["English: Beginner", "Uzbek: Native", "Russian: B1"].map(
										(el, index) => {
											return (
												<li className="mb-2 capitalize" key={index}>
													{el}
												</li>
											);
										}
									)}
						</ul>
					</div>
				</div>
				<div className="my-10 border border-amber-300 w-[1px] h-auto" />
				<div className="w-[67%] ps-6 pe-9 py-9">
					<h2 className="font-semibold tracking-widest text-[14px]">PROFILE</h2>
					<p className="mt-4 mb-4 text-[11px] font-medium">
						{resumeAbout
							? resumeAbout
							: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque incidunt
							delectus aliquid explicabo! Ad temporibus nisi culpa ipsa eos quod impedit
							beatae quae. Voluptatem eius voluptatibus rem maxime hic id at voluptate,
							corrupti esse ipsum odit doloribus dolores eaque ducimus.`}
					</p>
					<div className="mb-8">
						<p className="mt-8 mb-4 font-semibold tracking-widest text-[14px] uppercase">
							PROFESSIONAL EXPERIENCE
						</p>
						{isArray(filteredExperience) &&
							filteredExperience.map((el, idx) => {
								return (
									<div className="mb-5" key={idx}>
										<h3 className="text-[11px] font-medium uppercase">
											{el?.position
												? el?.position
												: "WRITE YOUR JOB TITLE HERE"}
										</h3>
										<p className="mb-2 text-[11px] font-medium capitalize">
											{el?.companyName ? el?.companyName : "Company name"} |{" "}
											{el?.startDate ? el?.startDate : "January 2016"}{" "}
											<span> - </span> {el?.endDate ? el?.endDate : "2023"}
										</p>
										<ul className="text-[11px] font-medium">
											<li className="list-disc translate-x-6">
												{el?.experienceAbout
													? parse(el?.experienceAbout)
													: `manage degital sales, and streming accaunts to improve
											brand positioning and growth`}
											</li>
										</ul>
									</div>
								);
							})}
					</div>
					<div className="mb-8">
						<p className="mt-8 mb-4 font-semibold tracking-widest text-[14px] uppercase">
							education
						</p>
						{isArray(filteredEducation) &&
							filteredEducation.map((item, idx) => {
								return (
									<div className="mb-5" key={idx}>
										<h3 className="text-[11px] font-medium uppercase">
											{item?.position
												? item?.position
												: "Masters in Human Resources"}{" "}
										</h3>
										<p className="mb-2 text-[11px] font-medium capitalize">
											{item?.instructionName
												? item?.instructionName
												: "The University of Texas, Dallas"}
											{item?.educationStartDate
												? item?.educationStartDate
												: "September 2007"}{" "}
											<span> - </span>{" "}
											{item?.educationEndDate
												? item?.educationEndDate
												: "May 2011"}
										</p>
										<ul className="text-[11px] font-medium">
											<li className="list-disc translate-x-6">
												{item?.educationAbout
													? parse(item?.educationAbout)
													: `manage degital sales, and streming accaunts to improve
											brand positioning and growth`}
											</li>
										</ul>
									</div>
								);
							})}
					</div>

					{dataVolunteering.length > 0 && (
						<div className="mt-2">
							<p className="mt-8 mb-4 font-semibold tracking-widest text-[14px] uppercase">
								Volunteering
							</p>
							<div className="mb-5">
								<h3 className="text-[11px] font-medium uppercase">
									{resumeVolunteeringActivityName
										? resumeVolunteeringActivityName
										: "WRITE YOUR Volunteering Activity Name HERE"}
								</h3>
								<p className="mb-2 text-[11px] font-medium capitalize">
									{resumeVolunteeringAddress
										? resumeVolunteeringAddress
										: "Volunteering Address"}{" "}
									|{" "}
									{resumeVolunteeringStartDate
										? resumeVolunteeringStartDate
										: "January 2016"}{" "}
									<span> - </span>{" "}
									{resumeVolunteeringEndDate ? resumeVolunteeringEndDate : "2023"}
								</p>
								<ul className="text-[11px] font-medium">
									<li className="list-disc translate-x-6">
										{resumeVolunteeringAbout
											? parse(resumeVolunteeringAbout)
											: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque incidunt delectus aliquid explicabo! Ad temporibus nisi culpa ipsa eos quod impedit beatae quae."}
									</li>
								</ul>
							</div>
						</div>
					)}

					{dataInterests.length > 0 && (
						<div className="mt-2">
							<p className="mt-8 mb-4 font-semibold tracking-widest text-[14px] uppercase">
								interests
							</p>
							<ul className="text-[11px] font-medium">
								<li className="list-disc translate-x-6">
									{resumeInterests ? parse(resumeInterests) : null}
								</li>
							</ul>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};
