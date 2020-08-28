import React, {useEffect, useState} from 'react';

function App()
{
	
	const [theme, setTheme] = useState("dark");

	useEffect((theme) => {
		setTheme("dark")
	}, [])

	const toggleTheme = (theme) =>
	{
		if (theme === "dark")
			console.log("white")
		else
		{
			setTheme("dark")
		}
		return theme
	};

	return (
		<div className='App'>
			<div className='w-full min-h-screen bg-gray-900 flex items-center justify-center px-6'>
				<div className={`theme-${theme} bg-background-primary text-copy-primary rounded-md shadow-xl pt-3  xl:w-1/5 md:w-2/4 w-full`}>
					<div className='pt-2 pb-1 flex items-start justify-between w-full px-5'>
						<div>
							<h3
								className='font-medium text-light leading-tight tracking-widest'
								style={{fontSize: '10px'}}>
								POS FAILURE RATE
							</h3>
						</div>
						<div className='flex items-center space-x-3'>
							<div>
								<button className='focus:outline-none'>
									<svg
										className='w-5'
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 18 18'>
										<path
											fill='#fff'
											d='M13.8 0H1.2A1.2 1.2 0 000 1.3v12.4A1.3 1.3 0 001.3 15h12.4a1.3 1.3 0 001.3-1.3V1.3A1.3 1.3 0 0013.7 0zm-.4 6.9h-8a.3.3 0 01-.4-.3v-5a.3.3 0 01.3-.4h8.1a.3.3 0 01.3.4v5a.3.3 0 01-.3.3zM1.6 1.2h1.8a.3.3 0 01.4.4v11.8a.3.3 0 01-.4.3H1.6a.3.3 0 01-.4-.3V1.6a.3.3 0 01.4-.4zM5 13.4v-5a.3.3 0 01.3-.3h8.1a.3.3 0 01.3.3v5a.3.3 0 01-.3.3h-8a.3.3 0 01-.4-.3z'
										/>
									</svg>
								</button>
							</div>
							<div>
								<button className='focus:outline-none' onClick={toggleTheme}>
									<svg
										className='h-5'
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 18 18'>
										<path
											fill='#fff'
											d='M9 12.4a3.4 3.4 0 100-6.8 3.4 3.4 0 000 6.8z'
										/>
										<path
											stroke='#fff'
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth='1.5'
											d='M9 1.1v2.3M9 14.6V17M16.9 9h-2.3M3.4 9H1M14.6 3.4L13 5M5 13l-1.6 1.6M14.6 14.6L13 13M5 5L3.4 3.4'
										/>
									</svg>
								</button>
							</div>
						</div>
					</div>
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
								<div className='h-1 bg-gray-200 rounded-full'>
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
					<div className='w-3/3'>
						<div
							className='flex items-center text-center'
							style={{
								borderTopWidth: '0.032em',
								borderColor: 'rgb(211,211,211,0.75)',
							}}>
							<div
								className='border-r-2 py-3 rounded-bl-md leading-none w-1/3'
								style={{
									backgroundColor: '#383b40',
									fontSize: '12px',
									color: '#fff',
									borderRightWidth: '0.032em',
									borderColor: 'rgb(211,211,211,0.75)',
								}}>
								<p>Daily</p>
							</div>
							<div
								className='border-r-2 py-3 leading-none w-1/3'
								style={{
									fontSize: '12px',
									color: '#939496',
									borderRightWidth: '0.032em',
									borderColor: 'rgb(211,211,211,0.75)',
								}}>
								<p>Monthly</p>
							</div>
							<div
								className='py-3 leading-none w-1/3'
								style={{fontSize: '12px', color: '#939496'}}>
								Yearly
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;