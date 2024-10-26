import React from 'react'
import BannerImage from "../assets/1beef.jpg"
const About = () => {
  return (
    <div className='about'>
        <div className='aboutTop' style={{backgroundImage: `url(${BannerImage})`}} ></div>
        <div className='aboutBottom'>
            <h1>About Us</h1>
            <p>We are a family-owned restaurant specializing in authentic burgers and spicy mixed meals. Our commitment to quality, fresh ingredients, and a warm ambiance is our core values.</p>
        </div>
    </div>
  )
}

export default About