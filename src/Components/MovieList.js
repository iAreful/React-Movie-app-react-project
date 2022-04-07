/** @format */

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsFillSuitHeartFill } from "react-icons/bs";
import SectiuonTitle from "./SectionTitle";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./MovieList.css";

import { Pagination } from "swiper";
function MovieList(props) {
	return (
		<div className=' bg-[#1D4289]  dark:bg-[#6B7787] p-4 rounded-xl'>
			<SectiuonTitle title='ALL Movies Collection. [Find & Add yours]' />

			<div className='flex flex-row gap-2 '>
				<Swiper
					slidesPerView={2}
					spaceBetween={30}
					pagination={{
						clickable: true,
					}}
					breakpoints={{
						640: {
							width: 640,
							slidesPerView: 3,
							spaceBetween: 20,
						},
						768: {
							width: 768,
							slidesPerView: 4,
							spaceBetween: 20,
						},
						1024: {
							width: 1024,
							slidesPerView: 5,
							spaceBetween: 20,
						},
					}}
					modules={[Pagination]}
					className='mySwiper'>
					{props.chinema.map((movie, i) => (
						<SwiperSlide key={i}>
							<div
								onClick={() => props.handleFavouritesClick(movie)}
								className='movie-poster relative w-48 h-64 bg-blue-400 rounded-xl overflow-hidden'>
								<img src={movie.Poster} alt='movie' className='rounded-xl' />
								<div className='add-fev absolute bottom-0 left-0 bg-slate-100 bg-opacity-90 w-48 rounded-xl py-2'>
									<p className='text-md text-center'>Add to this Favrourite </p>
									<BsFillSuitHeartFill className='block ml-[5rem] mt-2 text-2xl text-red-600 hover:text-red-500' />
								</div>
								{/* movie Info */}.
								<div className='add-fev absolute top-0 left-0 bg-slate-200 bg-opacity-90 rounded-xl w-48 py-4 '>
									<p className='text-lg text-center text-violet-400 dark:text-slate-800 font-bold'>
										{" "}
										{[movie.Title.slice(0, 25)]}
									</p>
									<p className='text-md  text-center'>{movie.Year} </p>
									<p className='text-md  text-center mt-4'>
										<a
											href='/'
											className='bg-blue-400 bg-opacity-50 border-1 border-white px-2 py-1 rounded-xl font-semibold'>
											Detail
										</a>{" "}
									</p>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
}

export default MovieList;
