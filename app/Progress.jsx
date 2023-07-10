// import React, {useState, useEffect} from 'react'
// import Image from 'next/image'
// import brandingIcon from '../public/Assets/branding-icon.png'
// import brandingFloatTop from '../public/Assets/branding-float-1.png'
// import brandingFloatBottom from '../public/Assets/branding-float-2.png'
// import uiuxIcon from '../public/Assets/uiux-icon.png'
// import uiuxFloatTop from '../public/Assets/uiux-float-1.png'
// import uiuxFloatBottom from '../public/Assets/uiux-float-2.png'
// import digitalMarketingIcon from '../public/Assets/digital-marketing-icon.png'
// import digitalMarketingFloatTop from '../public/Assets/digital-marketing-float-1.png'
// import digitalMarketingFloatBottom from '../public/Assets/digital-marketing-float-2.png'

// const Progress = () => {

//     const [showContent, setShowcontent] = useState(1);
//     const [progressHeight, setProgressHeight] = useState(0)
//     const handleContent = (itemdId) => {
//         setShowcontent(itemdId);
//         // const heightPercentage = (itemdId - 1) * 25;
//         // setProgressHeight(heightPercentage);
//     }

//     // useEffect(() => {
//     //     const interval = setInterval(() => {
//     //         setShowcontent((prevContent) => (prevContent % 3) + 1);
//     //     }, 3000);

//     //     return () => clearInterval(interval);
//     // }, []);   

//     const contentItems = [
//         {
//           id: 1,
//           className: 'branding-content',
//           floatTopImage: brandingFloatTop,
//           iconImage: brandingIcon,
//           heading: 'Standout Branding.',
//           offers: ['Brand Strategy', 'Brand Identity', 'Brand Messaging'],
//           floatBottomImage: brandingFloatBottom
//         },
//         {
//           id: 2,
//           className: 'uiux-content',
//           floatTopImage: uiuxFloatTop,
//           iconImage: uiuxIcon,
//           heading: 'Drive Digital Success.',
//           offers: ['Product Strategy', 'UI/UX Design', 'Web & Mobile'],
//           floatBottomImage: uiuxFloatBottom
//         },
//         {
//           id: 3,
//           className: 'digmar-content',
//           floatTopImage: digitalMarketingFloatTop,
//           iconImage: digitalMarketingIcon,
//           heading: 'Unleash Growth.',
//           offers: ['Social Media', 'Pay-Per-Click', 'SEO', 'Content Marketing', 'Email Marketing'],
//           floatBottomImage: digitalMarketingFloatBottom
//         }
//     ]

    
//   return (
// //     <div className='service-container'>
// //         <div className="progress-container">
// //             <div className="progress-bar"  >
// //                 <div className="progress" style={{ height: `${progressHeight}%` }}></div>
// //                 <div className={showContent === 1 ? "circle circle1 active" : "circle circle1"} onClick={() => handleContent(1)}></div>
// //                 <div className={showContent === 2 ? "circle circle2 active" : "circle circle2"} onClick={() => handleContent(2)}></div>
// //                 <div className={showContent === 3 ? "circle circle3 active" : "circle circle3"} onClick={() => handleContent(3)}></div>
// //             </div>
// //         </div>
// //         <div className="service-contents">
// //   {contentItems.map((item) => (
// //     <div
// //       key={item.id}
// //       className={`service-content ${showContent === item.id ? 'active' : ''}`}
// //     >
// //       <div className={item.className}>
// //         <div className="float-top">
// //           <Image src={item.floatTopImage} className="top-img" alt={item.heading} />
// //         </div>
// //         <div className="icon-container">
// //           <Image src={item.iconImage} className="icon" alt={item.heading} />
// //         </div>
// //         <div className="service-text-container">
// //           <h2 className="service-heading">{item.heading}</h2>
// //           <div className="service-offer">
// //             {item.offers.map((offer, index) => (
// //               <p key={index} className="offer">{offer}</p>
// //             ))}
// //           </div>
// //         </div>
// //         <div className="float-bottom">
// //           <Image src={item.floatBottomImage} className="bottom-img" alt={item.heading} />
// //         </div>
// //       </div>
// //     </div>
// //   ))}
// // </div>
// //     </div>
//   // )
// // }

// export default Progress