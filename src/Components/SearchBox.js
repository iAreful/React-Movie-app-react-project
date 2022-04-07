/** @format */

import React from "react";
import { ImEnter } from "react-icons/im";
function SearchBox(props) {
	return (
		<div className='relative pb-4 sm:pb-0'>
			<ImEnter className='absolute top-4 left-2 text-2xl text-blue-600 dark:text-slate-400' />
			<input
				type='text'
				placeholder='Search your favourite movies...'
				className='border px-10 py-3 rounded-xl w-80'
				value={props.value}
				onChange={(event) => props.setSearchValue(event.target.value)}
			/>
		</div>
	);
}

export default SearchBox;
