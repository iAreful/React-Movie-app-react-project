/** @format */

import React, { useState, useEffect } from "react";
import { FaAngleUp } from "react-icons/fa";

import "./ScrollToTop.css";

const ScrollToTop = () => {
	const [showTopBtn, setShowTopBtn] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 0) {
				setShowTopBtn(true);
			} else {
				setShowTopBtn(false);
			}
		});
	}, []);

	const goToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<div className='top-to-btm'>
			{showTopBtn && (
				<FaAngleUp
					className='icon-position dark:bg-[#6B7787] bg-blue-200 dark:text-slate-200 text-blue-500 border border-blue-400 dark:border-white icon-style'
					onClick={goToTop}
				/>
			)}
		</div>
	);
};

export default ScrollToTop;
