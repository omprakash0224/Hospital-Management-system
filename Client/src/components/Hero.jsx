import React from 'react'

const Hero = ({title, imageUrl}) => {
  return (
    <div className='hero container flex gap-[50px] pt-[120px] pb-[120px] relative '>
      <div className='banner flex-1 p-5 m-6'>
        <h1 className='max-w-[650px] tracking-[2px] space-x-[5px] text-[40px] font-bold'>{title}</h1>
        <p className='max-w-[650px] text-[#111] tracking-[2px] text-xl'>
        Welcome to Hospital Name, a premier healthcare institution dedicated to providing exceptional medical services and patient care. Our hospital is equipped with state-of-the-art facilities and a team of highly skilled professionals committed to ensuring the well-being of our patients.
        </p>
      </div>
      <div className="banner">
        <img src={imageUrl} alt="Hero" className='animated-image' />
        <span className='absolute right-[-300px] top-[-200px] -z-10'>
          <img src="/vector.png" alt="vector" />
        </span>
      </div>
    </div>
  )
}

export default Hero
