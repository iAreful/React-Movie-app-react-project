/** @format */

import React from "react";
import DarkModeToggle from "../Funyionality/DarkMode";
import Heading from "../Heading";
import SearchBox from "../SearchBox";
import ScrollToTop from "../Funyionality/ScrollToTop";
function Header() {
	return (
		<div className='mb-4 sticky top-0 z-30'>
			<div className=' rounded-xl p-4 flex flex-row justify-between items-center pb-4  bg-[#1D4289] dark:bg-[#6B7787]'>
				<Heading Head='MovieApp' />
				<DarkModeToggle />
				<ScrollToTop />
				<SearchBox />
			</div>
		</div>
	);
}

export default Header;
