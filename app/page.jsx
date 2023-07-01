'use client'

import React from 'react'
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
	return (
		<div className='content'>
			<div className="content-container">
				<div className="content-left">
					<div className="content-inner">
						<Progress/>
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