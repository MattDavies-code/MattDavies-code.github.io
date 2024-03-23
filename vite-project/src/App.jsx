import React, { useEffect, useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { animateScroll as scroll } from 'react-scroll';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import './styles/tailwind.css';


import Contact from './components/Contact';
import Footer from './components/Footer';
import Intro from './components/Intro';
import Portfolio from './components/Portfolio';
import Timeline from './components/Timeline';
import NavBar from './components/NavBar';
import Skills from './components/Skills';
import Background from './components/Background';
import ParallaxLight from './components/Parallax';


function App() {
	
	const [theme, setTheme] = useState(null);

	useEffect(() => {
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			setTheme('dark');
		} else {
			setTheme('light');
		}
	}, []);

	const handleThemeSwitch = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	};

	useEffect(() => {
		if (theme === 'dark') {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}, [theme]);

	const sun = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={1.5}
			stroke="currentColor"
			className="w-6 h-6"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
			/>
		</svg>
	);

	const moon = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={1.5}
			stroke="white"
			className="w-6 h-6"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
			/>
		</svg>
	);

	const [showScroll, setShowScroll] = useState(false)

	const checkScrollTop = () => {
	  if (!showScroll && window.scrollY > 400){
		setShowScroll(true)
	  } else if (showScroll && window.scrollY <= 400){
		setShowScroll(false)
	  }
	};
  
	const scrollTop = () => {
		scroll.scrollToTop({ duration: 350 });
	};
  
	useEffect(() => {
	  window.addEventListener('scroll', checkScrollTop)
	  return () => window.removeEventListener('scroll', checkScrollTop)
	}, []);

  return (
	<>
	<NavBar handleThemeSwitch={handleThemeSwitch} theme={theme} />
	<div className="relative text-white dark:text-stone-300 min-h-screen font-sans" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: theme === 'light' ? '#282a57' : 'black' }}>		
		<Parallax pages={4} style={{ width: '100%', height: '100%' }}>					
				
				{theme === 'light' ? <ParallaxLight style={{ width: '100%', height: '100%' }} /> : <Background />}
				
				<ParallaxLayer offset={0} speed={0.3}>
						<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%' }}>
							<Fade triggerOnce>
								<Intro theme={theme} />
							</Fade>
						</div>
					</ParallaxLayer>

					<ParallaxLayer offset={0.9} speed={0.3}>
						<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%' }}>
							<div style={{ display: 'inline', width: '50%' }}>
								<Fade triggerOnce>
									<Skills />
								</Fade>
							</div>
						</div>
					</ParallaxLayer>

					<ParallaxLayer offset={1.5} speed={0.3}>
						<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%' }}>
							<div style={{ display: 'inline', width: '60%' }}>
								<Fade triggerOnce>
									<Portfolio />
								</Fade>
							</div>
						</div>
					</ParallaxLayer>

					<ParallaxLayer offset={2.3} speed={0.3}>
						<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%' }}>
							<div style={{ display: 'inline', width: '70%' }}>
								<Fade triggerOnce>
									<Timeline />
								</Fade>
							</div>
						</div>
					</ParallaxLayer>

					<ParallaxLayer offset={3} speed={0.3}>
						<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
							<div style={{ display: 'inline', width: '70%' }}>
								<Fade triggerOnce>
									<Contact />
								</Fade>
							</div>
						</div>
					</ParallaxLayer>

					<ParallaxLayer offset={3.4} speed={0.3}>
						<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%' }}>
							<Fade triggerOnce>
								<Footer className="fixed-footer" />
							</Fade>
						</div>
					</ParallaxLayer>
				</Parallax>
				<div className={showScroll ? 'fixed bottom-5 right-5 cursor-pointer z-50' : 'hidden'} onClick={scrollTop}>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10 text-gray-500">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
					</svg>
				</div>
			</div>
		
	 </>
  )
}

export default App
