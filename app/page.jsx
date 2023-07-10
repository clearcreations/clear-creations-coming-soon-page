'use client'

import React, { useEffect } from 'react'
import {useRef, useState} from 'react'
import emailjs from '@emailjs/browser'
import './page.css'
import Image from 'next/image'
import HeaderLogo from '../public/Assets/clear-creations-header-logo.png'
import Progress from './Progress'

const page = () => {

	// Email Scripts
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

	// Logo Carousel Script
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

	// Service Dropdown
		const [isOpen, setIsOpen] = useState(false);
		const [selectedOption, setSelectedOption] = useState('');
	  
		const options = [
		  'Branding',
		  'UI UX Design',
		  'Social Media',
		  'Paid Ads',
		  'SEO'
		];
	  
		const handleDropdownClick = () => {
		  setIsOpen(!isOpen);
		};
	  
		const handleOptionSelect = (option) => {
		  setSelectedOption(option);
		  setIsOpen(false);
		};

	return (
		<div className='content'>
			<div className="header">
				<Image src={HeaderLogo} alt='Clear Creations | Charlotte Branding Agency'/>
			</div>
			<div className="main-content">
				<div className="content-inner content-left">
					<div className="services-section">
						<div className="progress-bar"></div>
						<div className="services">
							<div className="float float-top"></div>
							<div className="service-content">
								<div className="icon-container"></div>
								<div className="text-container"></div>
							</div>
							<div className="float float-bottom"></div>
						</div>
					</div>
				</div>
				<div className="content-inner content-right">
					<div className="form-section">
						<div className="form-text">
							<h1 className="form-heading">
								
							</h1>
							<p className="form-body">

							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default page