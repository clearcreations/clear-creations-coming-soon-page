'use client'

import {useRef, useState} from 'react'
import emailjs from '@emailjs/browser'
import React from 'react'
import './page.css'

import Image from 'next/image'
import HeaderLogo from '../public/Assets/clear-creations-header-logo.png'
import LogoCarousel from './LogoCarousel'



export const metadata = {
    title: 'Clear Creations | Charlotte Branding Agency',
    description: 'We are a Charlotte based design agency, helping you develop brands, design websites, and create campaigns that convert. Fill out our form to schedule your consultation today.',
    robot: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: true,
        },
        viewport: {
            width: 'device-width',
            initialScale: 1,
            maximumScale: 1,
        },
        charset: 'UTF-8'
    }
}

const Home = () => {
    
    const ImageSet1 = []
    
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('clearcreations', 'contactForm', form.current, '3VoYYe1WsgxtLt4Jl')
        .then(
            () => {
              alert('Message successfully sent!')
              window.location.reload(false)
            },
            () => {
              alert('Failed to send the message, please try again')
            }
          )
    }
  return (
    <div className="content">
        <header>
            <div className="header-content">
                <Image src={HeaderLogo} alt="Clear Creations | Charlotte Branding Agency" />
            </div>
        </header>
        <div className="container">
            <div className="left-content">
                <div className="service-offerings">
                    <div className="progess-bar">
                        <div className="progress-markers">
                            <span className="branding"></span>
                            <span className="uiux"></span>
                            <span className="marketing"></span>
                        </div>
                    </div>
                    <div className="services-display">
                        <div className="service"></div>
                        <div className="service"></div>
                        <div className="service"></div>
                    </div>
                </div>
                <div className="social-proof">
                    <LogoCarousel/>
                </div>
            </div>
            <div className="right-content">
                <div className="main-text">
                    <h1 className="heading-text">Revolutionize Branding, Drive Digital Success, Unleash Growth.</h1>
                    <p className="body-text">
                        Although our website is under construction, we are still accepting new clients. 
                        Need help developing the perfect brand, website or digital campaign? 
                        Fill out our form below to book a consultation.
                    </p>
                </div>
                <div className="contact-form">
                    <form action="" ref={form} onSubmit={sendEmail}>
                        <div className="form-row">
                            <div className="input-data">
                                <input type="text" name='name' id='name' required />
                                <label htmlFor="name">Name</label>
                            </div>
                            <div className="input-data">
                                <input type="email" name='email' id='email' required />
                                <label htmlFor="email">Email Address</label>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="input-data">
                                <input type="text" name='company' id='company' required />
                                <label htmlFor="company">Company Name</label>
                            </div>
                            <div className="input-data">
                                <select name="service" id="service">
                                    <option value="default">Service Type</option>
                                    <option value="branding">Branding</option>
                                    <option value="uiux">UI/UX Design</option>
                                    <option value="webdev">Web Development</option>
                                    <option value="seo">Search Engine Optimization</option>
                                    <option value="paidads">Paid Ads</option>
                                    <option value="socialmedia">Social Media</option>
                                </select>
                                <label className='service-label' htmlFor="service">Service Type</label>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="input-data textarea">
                                <textarea name="message" id="message" required></textarea>
                                <label className='message-label' htmlFor="message">Message</label>
                            </div>
                        </div>
                        <input className='submit' type="submit" value="Get In Touch"/>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home