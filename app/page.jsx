'use client'

import React, { useEffect } from 'react'
import {useRef, useState} from 'react'
import emailjs from '@emailjs/browser'
import './page.css'
import Image from 'next/image'
import HeaderLogo from '../public/Assets/clear-creations-header-logo.png'
import brandingIcon from '../public/Assets/branding-icon.png'
import brandingFloatTop from '../public/Assets/branding-float-1.png'
import brandingFloatBottom from '../public/Assets/branding-float-2.png'
import uiuxIcon from '../public/Assets/uiux-icon.png'
import uiuxFloatTop from '../public/Assets/uiux-float-1.png'
import uiuxFloatBottom from '../public/Assets/uiux-float-2.png'
import digitalMarketingIcon from '../public/Assets/digital-marketing-icon.png'
import digitalMarketingFloatTop from '../public/Assets/digital-marketing-float-1.png'
import digitalMarketingFloatBottom from '../public/Assets/digital-marketing-float-2.png'

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

	// Service Content Script
	const [showContent, setShowcontent] = useState(1);
    // const [progressHeight, setProgressHeight] = useState(0)
    const handleContent = (itemdId) => {
        setShowcontent(itemdId);
        // const heightPercentage = (itemdId - 1) * 25;
        // setProgressHeight(heightPercentage);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setShowcontent((prevContent) => (prevContent % 3) + 1);
        }, 2500);

        return () => clearInterval(interval);
    }, []);   

    const contentItems = [
        {
          id: 1,
          className: 'branding-content',
          floatTopImage: brandingFloatTop,
          iconImage: brandingIcon,
          heading: 'Standout Branding.',
          offers: ['Brand Strategy', 'Brand Identity', 'Brand Messaging'],
          floatBottomImage: brandingFloatBottom
        },
        {
          id: 2,
          className: 'uiux-content',
          floatTopImage: uiuxFloatTop,
          iconImage: uiuxIcon,
          heading: 'Drive Digital Success.',
          offers: ['Product Strategy', 'UI/UX Design', 'Web & Mobile'],
          floatBottomImage: uiuxFloatBottom
        },
        {
          id: 3,
          className: 'digmar-content',
          floatTopImage: digitalMarketingFloatTop,
          iconImage: digitalMarketingIcon,
          heading: 'Unleash Growth.',
          offers: ['Social Media', 'Pay-Per-Click', 'SEO', 'Content Marketing', 'Email Marketing'],
          floatBottomImage: digitalMarketingFloatBottom
        }
    ]

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

	return (
		<div className='content'>
			<div className="header">
				<Image src={HeaderLogo} alt='Clear Creations | Charlotte Branding Agency'/>
			</div>
			<div className="main-content">
				<div className="content-inner content-left">
					<div className="services-section">
						<div className="progress-bar">
							<div className="progress"></div>
							<div className={showContent === 1 ? "circle circle1 active" : "circle circle1"} onClick={() => handleContent(1)}></div>
							<div className={showContent === 2 ? "circle circle2 active" : "circle circle2"} onClick={() => handleContent(2)}></div>
							<div className={showContent === 3 ? "circle circle3 active" : "circle circle3"} onClick={() => handleContent(3)}></div>
						</div>
						<div className="services">
							{contentItems.map((item) => (
								<div
									key={item.id}
									className={`service-content ${showContent === item.id ? 'active' : ''}`}
								>
									<div className={item.className}>
										<div className="float float-top">
											<Image src={item.floatTopImage} className="top-img" alt={item.heading} />
										</div>
										<div className="icon-container">
											<Image src={item.iconImage} className="icon" alt={item.heading} />
										</div>
										<div className="service-text-container">
											<h2 className="service-heading">{item.heading}</h2>
											<div className="service-offer">
												{item.offers.map((offer, index) => (
													<p key={index} className="offer">{offer}</p>
												))}
											</div>
										</div>
										<div className="float float-bottom">
											<Image src={item.floatBottomImage} className="bottom-img" alt={item.heading} />
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
				<div className="content-inner content-right">
					<div className="form-section">
						<div className="form-text">
							<h1 className="form-heading">
								Empower Your Business Vision With Unparalleled Expertise
							</h1>
							<p className="form-body">
								While our website undergoes maintenance, our results-driven branding agency 
								remains fully operational, dedicated to empowering entrepreneurs like you.
								Tap into our strategic prowess and disruptive creativity to turn your vision into reality,
								and find clarity today.
							</p>
						</div>
						<form className='form-container' ref={form} onSubmit={sendEmail}>
						<div className="form-row">
						<div className="input-data">
							<input type="text" name="name" id="name" required />
							<label htmlFor="name">Name</label>
						</div>
						<div className="input-data">
							<input type="text" name="company" id="company" required />
							<label htmlFor="company">Company Name</label>
						</div>
						</div>
						<div className="form-row">
							<div className="input-data">
								<input type="email" name="email" id="email" required />
								<label htmlFor="email">Email</label>
							</div>
							<div className="input-data">
								<input type="text" name="phone" id="phone" required />
								<label htmlFor="phone">Phone</label>
							</div>
						</div>
						<div className="form-row">
							<div className="input-data textarea">
								<textarea name="message" id="message" required></textarea>
								<label htmlFor="message">Let us know what you need!</label>
							</div>
						</div>
						{/* <div className="submit-btn">
							<FormSubmitBtn />
						</div> */}
						<input
							className="submit collision"
							type="submit"
							value="Get In Touch"
							onClick={() => {

							}}
						/>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default page