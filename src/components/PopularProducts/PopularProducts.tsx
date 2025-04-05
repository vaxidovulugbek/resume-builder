import React, { useEffect, useState } from "react";
import "./PopularProducts.scss";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Text, Title } from "ui";
import { useWindowSize } from "hooks";
import { isArray } from "lodash";
import { useTranslation } from "react-i18next";
import res1 from "assets/imgs/resume_templates/res1.jpg";
import res3 from "assets/imgs/resume_templates/res3.jpg";
import res5 from "assets/imgs/resume_templates/res5.jpg";
import res4 from "assets/imgs/resume_templates/res4.jpg";
import res2 from "assets/imgs/resume_templates/res2.jpg";
import res6 from "assets/imgs/resume_templates/res6.jpg";
const PopularProducts: React.FC = () => {
	const { t } = useTranslation();
	// const cards = [
	// 	{
	// 		img: "https://marketplace.canva.com/EAFC-9sdKHg/2/0/1131w/canva-black-and-white-minimalist-simple-design-freelancer-resume-wIpoHMlKB6I.jpg",
	// 	},
	// 	{
	// 		img: "https://marketplace.canva.com/EAEoLAxIWIo/1/0/1131w/canva-black-and-white-color-blocks-software-engineer-resume--RKK1cTL5JA.jpg",
	// 	},
	// 	{ img: "https://cdn-images.zety.com/templates/zety/minimo-4-classic-blue-navy-200@3x.png" },
	// 	{
	// 		img: "https://resumegenius.com/wp-content/uploads/2024-Modern-Resume-Template-Violet.png",
	// 	},
	// 	{
	// 		img: "https://i.etsystatic.com/43852575/r/il/e184e7/4982637963/il_fullxfull.4982637963_byt7.jpg",
	// 	},
	// 	{ img: "https://resumegenius.com/wp-content/uploads/clean-resume-skin-orange.png" },
	// 	{ img: "https://i.pinimg.com/736x/82/e0/92/82e092be16cf77305cbfff242ccdb7e9.jpg" },
	// ];
	const cards = [
		{
			img: res1,
		},
		{
			img: "https://marketplace.canva.com/EAEoLAxIWIo/1/0/1131w/canva-black-and-white-color-blocks-software-engineer-resume--RKK1cTL5JA.jpg",
		},
		{
			img: res3,
		},
		{
			img: res4,
		},
		{
			img: res5,
		},
		{
			img: res6,
		},
	];

	const [slidesToShowNum, setSlidesToShow] = useState(4);
	const width = useWindowSize();

	useEffect(() => {
		if (width > 0) {
			const newSlidesToShow = width < 480 ? 1 : width < 740 ? 2 : width < 1024 ? 3 : 4;
			setSlidesToShow((prevSlides) =>
				prevSlides === newSlidesToShow ? prevSlides : newSlidesToShow
			);
		}
	}, [width]);

	const settings: Settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: slidesToShowNum,
		slidesToScroll: 1,
	};

	return (
		<section className="section max-[480px]:pb-10">
			<div className="container">
				<Text
					className="uppercase text-center flex justify-center mb-1 text-gray"
					as="span"
					size="sm"
					text={t("BUILD YOUR RESUME")}
				/>
				<Title
					className="text-weight_medium text-center title-color font-header section__title mb-4"
					weight="semi-bold"
					as="h2"
					text={t("Popular products")}
				/>
				<Text
					className="max-[640px]:hidden uppercase text-balance text-center flex justify-center mb-6 text-gray"
					as="span"
					size="sm"
					text="Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar 
					elementum tempus hac tellus libero accumsan. "
				/>
				<div className="slick-slider-container">
					<Slider {...settings}>
						{isArray(cards) &&
							cards.map((card, index) => (
								<div className="slick-slider-container__card" key={index}>
									<div className="slick-slider-container__card-content overflow-hidden rounded-xl">
										<img src={card?.img} alt="resume tamplate" />
									</div>
								</div>
							))}
					</Slider>
				</div>
			</div>
		</section>
	);
};

export default PopularProducts;
