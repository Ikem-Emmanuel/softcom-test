/*
	Developed by IKEM EMMANUEL, based on the given User interface (UI), in fulfillment of the Softcom test for the role of an interface developer
*/

import React, { useState } from 'react';

function App()
{
	
	// Defining the theme state as a boolean value of true and false :where true is the dark mode and false is the light moode
	const [theme, setTheme] = useState(true);

	// layoutOption are the three view mode for the card
	let layoutOptions = ['FULL', 'COMPACT', 'MINIMIZED'];

	// this is the initial layout that will be loaded when the component mounts for the first time
	const [selectedLayout, setSelectedLayout] = useState('FULL');

	// Based on the layoutOption Array index which is 0, 1, 2 : the layoutIndex represent each card view in the layoutOption based on the index
	const [layoutIndex, setLayoutIndex] = useState(0);


	// This function Updates the selectedLayout state and then returns a value of either 'Full', 'Compact', 'Minimized'
	const toggleView = () =>
	{
		
		// Adding one to the layout index to increament it and the gotten value Modules 3 since the lenght of the layoutOption array is 3 : this prevent the increament from going pass 3 index
		let index = (layoutIndex + 1) % layoutOptions.length;

		// update layout index
		setLayoutIndex(index);

		// Set layout value to that of the layout option at that particular index
		setSelectedLayout(layoutOptions[index]);
	};

	// THis function gets the selectedLayout value genereated by the toggle view function and set each layout Option as true or false based on the slectedLayout value
	const getLayout = () => {
		let obj = {};

		if (selectedLayout === 'FULL') {
			// setLayout({full:true, compact:false, minimized:false})
			obj = { full: true, compact: false, minimized: false };
		}

		if (selectedLayout === 'MINIMIZED') {
			// setLayout({full:false, compact:false, minimized:true})
			obj = {full: false, compact: false, minimized: true};
			
		}

		if (selectedLayout === 'COMPACT') {
			// setLayout({full:false, compact:true, minimized:false})
			obj = {full: false, compact: true, minimized: false};
		}

		return obj;

		boty()
	};


	// This function sets the initial theme state which true to false.
	const toggleTheme = e => {
		setTheme(!theme);
	};

	return (
		<div className='App'>
			<div className='w-full min-h-screen bg-gray-900 flex items-center justify-center px-6'>
				<div
					className={`theme-${
						theme ? 'dark' : 'light'
					} bg-background-primary text-copy-primary rounded-md shadow-xl pt-3  xl:w-1/4 md:w-2/4 w-full`}>
					<div className='pt-2 pb-1 flex items-start justify-between w-full px-5'>
						<div>
							<h3
								className='font-medium leading-tight tracking-widest'
								style={{fontSize: '10px'}}>
								POS FAILURE RATE
							</h3>
						</div>
						<div className='text-copy-primary flex items-center space-x-4'>
							<div>
								<button className='focus:outline-none' onClick={toggleView}>
									<svg
										className='w-5 fill-current text-copy-primary'
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 18 18'>
										<path d='M13.8 0H1.2A1.2 1.2 0 000 1.3v12.4A1.3 1.3 0 001.3 15h12.4a1.3 1.3 0 001.3-1.3V1.3A1.3 1.3 0 0013.7 0zm-.4 6.9h-8a.3.3 0 01-.4-.3v-5a.3.3 0 01.3-.4h8.1a.3.3 0 01.3.4v5a.3.3 0 01-.3.3zM1.6 1.2h1.8a.3.3 0 01.4.4v11.8a.3.3 0 01-.4.3H1.6a.3.3 0 01-.4-.3V1.6a.3.3 0 01.4-.4zM5 13.4v-5a.3.3 0 01.3-.3h8.1a.3.3 0 01.3.3v5a.3.3 0 01-.3.3h-8a.3.3 0 01-.4-.3z' />
									</svg>
								</button>
							</div>
							<div>
								<button className='focus:outline-none' onClick={toggleTheme}>
									{theme ? (
										<svg
											className='h-5 -mt-5 fill-current text-copy-primary'
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 18 18'>
											<path d='M9 12.4a3.4 3.4 0 100-6.8 3.4 3.4 0 000 6.8z' />
											<path
												stroke='#7E7E7E'
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth='1.5'
												d='M9 1.1v2.3M9 14.6V17M16.9 9h-2.3M3.4 9H1M14.6 3.4L13 5M5 13l-1.6 1.6M14.6 14.6L13 13M5 5L3.4 3.4'
											/>
										</svg>
									) : (
										<svg
											className='h-4 -mt-5 fill-current text-copy-primary'
											xmlns='http://www.w3.org/2000/svg'
											viewBox='0 0 15 15'>
											<path d='M12 10.1A7.3 7.3 0 015 .7a7.3 7.3 0 1010 8.7c-1 .5-2 .7-3 .7z' />
										</svg>
									)}
								</button>
							</div>
						</div>
					</div>
					{getLayout().minimized ? (
						<div className='py-2 relative'>
							<div className=''>
								<div className='flex px-5 items-center'>
									<div>
										<h4
											className='pr-2 font-bold leading-none'
											style={{color: '#4F63FF', fontSize: '40px'}}>
											{' '}
											60%
										</h4>
									</div>
									<div className='pt-3 px-1'>
										<svg
											className='fill-current h-2 w-2'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'
											viewBox='0 0 10 8'>
											<path d='M5 0l4.3 7.5H.7L5 0z' fill='#FF005C' />
										</svg>
									</div>
									<div>
										<p
											className='text-center pt-3 font-light leading-none'
											style={{color: '#FF005C', fontSize: '14px'}}>
											8%
										</p>
									</div>
								</div>
								<div className='pt-4 px-2 relative rounded-full'>
									<div
										className={`theme-${
											theme ? 'dark' : 'light'
										} bg-background-secondary h-1 rounded-full`}>
										<div
											className='absolute h-1 rounded-full xl:w-2/3 md:w-2/3 lg:w-2/3  w-2/3'
											style={{backgroundColor: '#FF005C'}}
										/>
									</div>
								</div>
							</div>
						</div>
					) : (
						<div>
							<div className='pt-1 pb-2 px-5 relative'>
								<div className='flex items-center'>
									<div className='flex items-center'>
										<div>
											<h4
												className='pr-2 font-black leading-none'
												style={{color: '#4F63FF', fontSize: '36px'}}>
												{' '}
												12%
											</h4>
										</div>
										<div className='pt-4 px-1'>
											<svg
												className='fill-current h-2 w-2'
												xmlns='http://www.w3.org/2000/svg'
												fill='none'
												viewBox='0 0 10 8'>
												<path fill='#28B759' d='M5 8L9.3.5H.7L5 8z' />
											</svg>
										</div>
										<div>
											<p
												className='text-center pt-3 font-light leading-none'
												style={{color: '#28B759', fontSize: '14px'}}>
												14%
											</p>
										</div>
									</div>
									<div className='py-1 relative w-1/2 ml-auto rounded-full'>
										<div className='h-1 bg-background-secondary rounded-full'>
											<div
												className='absolute h-1 rounded-full xl:w-24 md:w-24 lg:w-32  w-21'
												style={{backgroundColor: '#35BB63'}}
											/>
											<div
												className='absolute h-3 flex items-center justify-center w-3  rounded-full bg-white shadow-2xl border-solid border-4 -ml-2 top-0 cursor-pointer'
												unselectable='on'
												style={{
													left: '61%',
													borderColor: '#35BB63',
													backdropFilter: 'blur(500px)',
												}}>
												<div className='relative -mt-2 w-1 rounded-full'>
													<div
														className='absolute z-40 opacity-100 bottom-100 mb-2 left-0 min-w-full'
														style={{marginLeft: '-20.5px'}}
													/>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className='pt-1 pb-4 px-5 w-full'>
								<div className='flex items-center justify-end'>
									<div>
										<svg
											className='h-3 w-3'
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 10 10'>
											<path
												fill='#9ba1b5'
												d='M5 0a5 5 0 100 10A5 5 0 005 0zm1.2 7.7H3.9a.4.4 0 110-.9h.6a.1.1 0 00.1-.1V4.5a.1.1 0 00-.1-.2h-.6a.4.4 0 110-.8h.6a1 1 0 011 1v2.2a.1.1 0 00.1.1h.6a.4.4 0 110 .9zM5 1.4a.7.7 0 110 1.4.7.7 0 010-1.4z'
											/>
										</svg>
									</div>
									<div className='px-1'>
										<p
											className='text-center font-light leading-none tracking-wider'
											style={{color: '#939496', fontSize: '8px'}}>
											Source{' '}
											<span
												className='font-medium'
												style={{color: '#9ba1b5', fontSize: '9px'}}>
												NIBSS
											</span>
										</p>
									</div>
								</div>
							</div>
						</div>
					)}
					{getLayout().full && (
						<div className='w-3/3'>
							<div
								className='flex items-center text-center'
								style={{
									borderTopWidth: '0.01rem',
									borderColor: 'rgb(211,211,211,0.75)',
								}}>
								<div
									className={`theme-${
										theme ? 'dark' : 'light'
									} border-r-2 py-3 bg-background-secondary text-copy-primary rounded-bl-md leading-none w-1/3`}
									style={{
										fontSize: '12px',
										borderRightWidth: '0.01rem',
										borderColor: 'rgb(211,211,211,0.75)',
									}}>
									<p>Daily</p>
								</div>
								<div
									className='border-r-2 py-3 leading-none w-1/3'
									style={{
										fontSize: '12px',
										borderRightWidth: '0.01em',
										borderColor: 'rgb(211,211,211,0.75)',
									}}>
									<p>Monthly</p>
								</div>
								<div className='py-3 leading-none w-1/3' style={{fontSize: '12px'}}>
									Yearly
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default App;
