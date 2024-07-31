import React from 'react'
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='flex-col flex items-center mx-56 gap-9'>
    <h1 className='font-extrabold text-[50px] text-center mt-16'>
        <span className="text-[#f56551]">Discover Your Next Adventure with AI:</span> Personalized Itineraries at Your Fingertips</h1>
        <p className="text-xl text-gray-500 text-center">Your personal trip planner curator, creating custom itineraries tailored to your interests and budget.</p>

      <Link to={'/create-trip'}>
        <Button className="bg-[#000] text-white rounded-md hover:text-gray-400 hover:bg-black "> Get Started, it's Free </Button>
        </Link>
    </div>
  )
}

export default Hero;