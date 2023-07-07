import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import brandingIcon from '../public/Assets/branding-icon.png'
import brandingFloatTop from '../public/Assets/branding-float-1.png'
import brandingFloatBottom from '../public/Assets/branding-float-2.png'
import uiuxIcon from '../public/Assets/uiux-icon.png'
import uiuxFloatTop from '../public/Assets/uiux-float-1.png'
import uiuxFloatBottom from '../public/Assets/uiux-float-2.png'
import digitalMarketingIcon from '../public/Assets/digital-marketing-icon.png'
import digitalMarketingFloatTop from '../public/Assets/digital-marketing-float-1.png'
import digitalMarketingFloatBottom from '../public/Assets/digital-marketing-float-2.png'

const Progress = () => {

    const [showContent, setShowcontent] = useState(1);
    const [progressHeight, setProgressHeight] = useState(0)
    const handleContent = (selectedStage) => {
        setShowcontent(selectedStage);
        const heightPercentage = (selectedStage - 1) * 25;
        setProgressHeight(heightPercentage);
    }

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setShowcontent((prevContent) => (prevContent % 3) + 1);
    //     }, 2000);

    //     return () => clearInterval(interval);
    // }, []);   

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
    ];

    
  return (
    <div className='service-container'>
        <div className="progress-container">
            <div className="progress-bar"  >
                <div className="progress" style={{ height: `${progressHeight}%` }}></div>
                <div className={showContent === 1 ? "circle circle1 active" : "circle circle1"} onClick={() => handleContent(1)}></div>
                <div className={showContent === 2 ? "circle circle2 active" : "circle circle2"} onClick={() => handleContent(2)}></div>
                <div className={showContent === 3 ? "circle circle3 active" : "circle circle3"} onClick={() => handleContent(3)}></div>
            </div>
        </div>
        <div className="service-contents">
                <div className={showContent === 1 ? 'service-content content1 active' : 'service-content content1'}>
                    <div className="branding-content">
                    <div className="float-top">
                                {/* <Image src={brandingFloatTop} className='float-top' alt={`Clear Creations | Restaurant Brand Identity | Restaurant Branding Agency`} /> */}
                            </div>
                            <div className="icon-container">
                                {/* <Image src={brandingIcon} className='icon' alt={`Clear Creations | Charlotte Branding Services`}/> */}
                            </div>
                            <div className="service-text-container">
                                {/* <h2 className="service-heading">Standout Branding.</h2>
                                <div className="service-offer">
                                    <p className="offer">Brand Strategy</p>
                                    <p className="offer">Brand Identity</p>
                                    <p className="offer">Brand Messaging</p>
                                </div> */}
                            </div>
                            <div className="float-bottom">
                                {/* <Image src={brandingFloatBottom} className='float-btm' alt={`Clear Creations | Saas Brand Identity | Saas Branding Agency`} /> */}
                            </div>
                    </div>
                </div>
                <div className={showContent === 2 ? 'service-content content2 active' : 'service-content content2'}>
                    <div className="uiux-content">
                    <div className="float">
                                {/* <Image src={uiuxFloatBottom} className='float-btm' alt={`Clear Creations | Restaurant Web Design & Mobile App Design | Restaurant Web Design & Mobile App Design Agency`} /> */}
                            </div>
                            <div className="icon-container">
                                {/* <Image src={uiuxIcon} className='icon' alt={`Clear Creations | Charlotte Web Design & Mobile App Design Services`}/> */}
                            </div>
                            <div className="service-text-container">
                                {/* <h2 className="service-heading">Drive Digital Success.</h2>
                                <div className="service-offer">
                                    <p className="offer">Product Strategy</p>
                                    <p className="offer">UI/UX Design</p>
                                    <p className="offer">Web & Mobile</p>
                                </div> */}
                            </div>
                            <div className="float">
                                {/* <Image src={uiuxFloatTop} className='float-top' alt={`Clear Creations | Saas Web Design & Mobile App Design | Saas Web Design & Mobile App Design Agency`} /> */}
                            </div>
                    </div>
                </div>
                <div className={showContent === 3 ? 'service-content content3 active' : 'service-content content3'}>
                    <div className="digmar-content">
                        <div className="float">
                            <div className="float-top"></div>
                                {/* <Image src={digitalMarketingFloatTop} className='float-top' alt={`Clear Creations | Restaurant Digital Marketing | Restaurant Digital Marketing Agency`} /> */}
                        </div>
                        <div className="icon-container">
                            {/* <Image src={digitalMarketingIcon} className='icon' alt={`Clear Creations | Charlotte Digital Marketing Services`}/> */}
                        </div>
                        <div className="service-text-container">
                            {/* <h2 className="service-heading">Unleash Growth.</h2>
                            <div className="service-offer">
                                <p className="offer">Social Media</p>
                                <p className="offer">Pay-Per-Click</p>
                                <p className="offer">SEO</p>
                                <p className="offer">Content Marketing</p>
                                <p className="offer">Email Marketing</p>
                            </div> */}
                        </div>
                        <div className="float">
                            <div className="float-btm"></div>
                            {/* <Image src={digitalMarketingFloatBottom} className='float-btm' alt={`Clear Creations | Saas Digital Marketing | Saas Digital Marketing Agency`} /> */}
                        </div>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Progress