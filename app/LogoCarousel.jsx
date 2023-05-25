import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Logo1 from '../public/Assets/ash-and-barrel-logo.png'
import Logo2 from '../public/Assets/cross-country-healthcare-logo.png'
import Logo3 from '../public/Assets/robbin-n-williams-logo.png'
import Logo4 from '../public/Assets/scadc-actual.png'
import Logo5 from '../public/Assets/sd-botox-logo.png'
import Logo6 from '../public/Assets/smartboost-logo.png'
import Logo7 from '../public/Assets/soundful-logo.png'
import Logo8 from '../public/Assets/trinity-logo.png'
import Logo9 from '../public/Assets/veloce-actual.png'
import Logo10 from '../public/Assets/wellness-med-spa-logo.png'
import Logo11 from '../public/Assets/wonf-logo.png'
import Logo12 from '../public/Assets/order-my-maid-logo.png'

const LogoCarousel = () => {
  const images1 = ['wonf-logo.png', 'sd-botox-logo.png', 'trinity-logo.png']
  const images2 = ['scadc-actual.png', 'veloce-actual.png', 'cross-country-healthcare-logo.png']
  const images3 = ['ash-and-barrel-logo.png', 'smartboost-logo.png', 'soundful-logo.png']

  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % images1.length);
    }, 5000);

    return () => clearInterval(interval)
  }, []);

  return (
    <div className="logo-carousel">
        <Image className='logo' src={`/Assets/${images1[index]}`} width={100} height={30} />
        <Image className='logo' src={`/Assets/${images2[index]}`} width={100} height={30} />
        <Image className='logo' src={`/Assets/${images3[index]}`} width={125} height={20} />
    </div>
  )
}

export default LogoCarousel