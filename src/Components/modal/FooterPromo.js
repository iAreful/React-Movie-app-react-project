/** @format */
import img from "../Score.png";

export default function FooterPromo(props) {
	let url = "https://www.areful.com/contact";
	return (
		<div className='sticky top-0 z-50 mx-auto bg-yellow-400 bg-opacity-90 p-4 rounded-xl my-4'>
			<div className='modal-content relative'>
				<div className='modal-body text-3xl font-bold flex flex-col justify-center items-center'>
					<h1 className='text-5xl mb-6'> {props.text}</h1>
					<div className='flex flex-row justify-between'>
						<img src={img} alt='ss' className='rounded-xl w-6/12' />
						<div className=''>
							<h2 className='text-2xl font-bold text-red-500'>
								We Offer best Service
							</h2>
							<a href={url} className='text-4xl text-blue-400 font-bold'>
								Contact US!
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
