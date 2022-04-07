/** @format */

import React from "react";

function SectiuonTitle(props) {
	return (
		<div>
			<h2 className='text-2xl mb-4 font-bold text-white text-blue-400 dark:text-slate-100 '>
				{props.title}
			</h2>
		</div>
	);
}

export default SectiuonTitle;
