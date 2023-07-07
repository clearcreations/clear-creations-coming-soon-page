'use client'

import React, { useEffect } from 'react'
import {useRef, useState} from 'react'
import emailjs from '@emailjs/browser'
import './page.css'
import Image from 'next/image'
import HeaderLogo from '../public/Assets/clear-creations-header-logo.png'
import Progress from './Progress'

const page = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"clearcreations",
				"contactForm",
				form.current,
				"3VoYYe1WsgxtLt4Jl"
			)
			.then(
				() => {
					alert("Message successfully sent!");
					window.location.reload(false);
				},
				() => {
					alert("Failed to send the message, please try again");
				}
			);
	};

	const logos = [
		'/Assets/ash-and-barrel-logo.png',
		'/Assets/cross-country-healthcare-logo.png',
		'/Assets/order-my-maid-logo.png',
		'/Assets/robbin-n-williams-logo.png',
		'/Assets/scadc-actual.png',
		'/Assets/sd-botox-logo.png',
		'/Assets/smartboost-logo.png',
		'/Assets/soundful-logo.png',
		'/Assets/trinity-logo.png',
		'/Assets/veloce-actual.png',
		'/Assets/wellness-med-spa-logo.png',
		'/Assets/wonf-logo.png'
	]

	const [currentLogoIndex, setCurrentLogoIndex] = useState(0);
	
	useEffect(() => {
		//Change logo every 2 seconds
		const interval = setInterval(() => {
			setCurrentLogoIndex((prevIndex) => (prevIndex + 1) % logos.length);
		}, 3000);

		//Clear function
		return () => clearInterval(interval)
	}, []);

	return (
		<div className='content'>
			<div className="content-container">
				
				<div className="content-left">
					<div className="content-inner">
						<Progress/>
						<div className="social-proof">
      						<div className="logo-container">
        						{logos.map((logo, index) => (
								<div
									key={index}
									className={`logo ${index === currentLogoIndex ? 'active' : ''}`}
								>
									<Image 
										src={logo}
										alt={`Logo ${index + 1}`}
										width={90}
										height={25}
								/>
								</div>
								))}
								{logos.map((logo, index) => (
								<div
									key={index}
									className={`logo ${index === currentLogoIndex ? 'active' : ''}`}
								>
									<Image 
										src={logo}
										alt={`Logo ${index + 1}`}
										width={90}
										height={25}
								/>
								</div>
								))}
							</div>
						</div>
					</div>
				</div>
				<div className="content-right">
					<div className="content-inner">
					<div className="form-text">
						<h1 className='form-heading'>We May Be Enhancing Our User Experience, But Don't Hesitate To Contact Us!</h1>
						<p className="form-body">
							Although our website is under construction, we are still accepting new client opportunities.
							Need help developing the perfect brand, website, mobile app, or campagin? Fill out the form
							to book a consultation.
						</p>
					</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default page