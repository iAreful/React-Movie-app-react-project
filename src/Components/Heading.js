/** @format */

import React from "react";

function Heading(props) {
	return (
		<div>
			<h2 className='text-3xl font-bold py-2 text-white bg-[#1D4289] dark:bg-[#6B7787]'>
				{props.Head}
			</h2>
		</div>
	);
}

export default Heading;
