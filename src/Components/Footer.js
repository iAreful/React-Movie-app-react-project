/** @format */

import React from "react";

import { GrReactjs } from "react-icons/gr";
import { AiFillApi } from "react-icons/ai";
import { SiTailwindcss } from "react-icons/si";
import { HiCode } from "react-icons/hi";
function Footer() {
	const codeURL = "https://areful.com/react/movie-app/";
	return (
		<section className=''>
			<div className='flex flex-col space-y-4 sm:space-y-0 sm:flex-row justify-between items-center '>
				<div className='flex flex-row gap-4'>
					<p className='dark:text-white text-white text-xl font-bold'>
						Made by Areful with
					</p>
					<GrReactjs className='block  text-3xl dark:text-white text-white pb-1' />
					<AiFillApi className='block  text-3xl dark:text-white  text-white pb-1' />
					<SiTailwindcss className='block  text-3xl dark:text-white  text-white pb-1' />
				</div>
				<div>
					<a
						href={codeURL}
						className='flex flex-row'
						target='_blank'
						rel='noreferrer'>
						<p className='dark:text-white text-white text-xl font-bold'>
							Code view
						</p>{" "}
						<HiCode className='block ml-2 text-3xl dark:text-white  text-white hover:text-white ' />
					</a>
				</div>
			</div>
		</section>
	);
}

export default Footer;
