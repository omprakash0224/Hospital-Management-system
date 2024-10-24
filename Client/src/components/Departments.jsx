import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Departments = () => {

  const departmentsArray = [
    {
      name: "Pediatrics",
      imageUrl: "/departments/pedia.jpg",
    },
    {
      name: "Orthopedics",
      imageUrl: "/departments/ortho.jpg",
    },
    {
      name: "Cardiology",
      imageUrl: "/departments/cardio.jpg",
    },
    {
      name: "Neurology",
      imageUrl: "/departments/neuro.jpg",
    },
    {
      name: "Oncology",
      imageUrl: "/departments/onco.jpg",
    },
    {
      name: "Radiology",
      imageUrl: "/departments/radio.jpg",
    },
    {
      name: "Physical Therapy",
      imageUrl: "/departments/therapy.jpg",
    },
    {
      name: "Dermatology",
      imageUrl: "/departments/derma.jpg",
    },
    {
      name: "ENT",
      imageUrl: "/departments/ent.jpg",
    },
  ];

  const responsive = {
    extraLarge: {
      breakpoint: { max: 3000, min: 1324 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    large: {
      breakpoint: { max: 1324, min: 1005 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    medium: {
      breakpoint: { max: 1005, min: 700 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    small: {
      breakpoint: { max: 700, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div className='departContainer pt-[30px] pb-[50px]'>
      <h2 className='text-gray-600 mb-[30px] ml-7 font-bold text-4xl'>Departments</h2>
      <Carousel responsive={responsive}
        removeArrowOnDeviceType={[
          // "superLargeDesktop",
          // "desktop",
          "tablet",
          "mobile",
        ]}
      >
        {departmentsArray.map((depart, index) => {
          return (
            <div key={index} className="card relative rounded-lg flex-1 flex justify-center items-end pb-4 pl-2 pr-5 min-h-[360px] mx-2 no-underline">
              <div className="depart-name mb-8 bg-gray-200 w-[320px] text-xl uppercase flex justify-center p-3 rounded-[30px] left-0 h-fit font-bold">{depart.name}</div>
              <img className='absolute w-full h-full -z-10 top-0 left-0 rounded-xl' src={depart.imageUrl} alt="Department" />
            </div>
          );
        })}
      </Carousel>
    </div>
  )
}

export default Departments
