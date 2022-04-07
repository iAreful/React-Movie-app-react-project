/** @format */

import React from "react";
import FavouriteMovies from "../FavouriteMovies";
function FavouriteMoviesArea() {
	return (
		<div className='  bg-[#1D4289]  dark:bg-slate-400 p-4 rounded-xl my-4'>
			<h2 className='text-2xl mb-2'>Favourite Movies</h2>
			<FavouriteMovies />
		</div>
	);
}

export default FavouriteMoviesArea;
