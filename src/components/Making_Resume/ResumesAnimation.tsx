import React from "react";
import "./Making_Resume.scss";
import res1 from "assets/imgs/resume_templates/res1.jpg";
import res3 from "assets/imgs/resume_templates/res3.jpg";
import res5 from "assets/imgs/resume_templates/res5.jpg";
import res4 from "assets/imgs/resume_templates/res4.jpg";
import res2 from "assets/imgs/resume_templates/res2.jpg";
import res6 from "assets/imgs/resume_templates/res6.jpg";

const Animation: React.FC<{ className: string; num: string }> = ({ className, num }) => {
	return (
		<div className={`slider ${className}`}>
			<div className={`${num === "1" ? "slide-track" : "slide-track-Bottom"}`}>
				<div className="slide">
					<img src={res1} />
				</div>
				<div className="slide">
					<img src={res2} />
				</div>
				<div className="slide">
					<img src={res3} />
				</div>
				<div className="slide">
					<img src={res4} />
				</div>
				<div className="slide">
					<img src={res5} />
				</div>
				<div className="slide">
					<img src={res6} />
				</div>
				<div className="slide">
					<img src="https://resumegenius.com/wp-content/uploads/clean-resume-skin-orange.png" />
				</div>
				{/* end */}
				<div className="slide">
					<img src={res1} />
				</div>
				<div className="slide">
					<img src={res2} />
				</div>
				<div className="slide">
					<img src={res3} />
				</div>
				<div className="slide">
					<img src={res4} />
				</div>
				<div className="slide">
					<img src={res5} />
				</div>
				<div className="slide">
					<img src={res6} />
				</div>
				<div className="slide">
					<img src="https://resumegenius.com/wp-content/uploads/clean-resume-skin-orange.png" />
				</div>
			</div>
		</div>
	);
};

export default Animation;
