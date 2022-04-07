/** @format */

import React from "react";
import MovieList from "../MovieList";
function MoviesAvialable() {
	return (
		<div className='my-4  bg-[#1D4289]  dark:bg-slate-400 p-4 rounded-xl'>
			<h2 className='text-2xl mb-2'> Avialable Movies</h2>
			<MovieList />
		</div>
	);
}

export default MoviesAvialable;
