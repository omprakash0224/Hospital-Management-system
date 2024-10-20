import React from 'react'

const Biography = ({imageUrl}) => {
  return (
    <div className='biography flex'>
      <div className="banner w-1/2">
        <img src={imageUrl} alt="about img" />
      </div>
      <div className="banner w-1/2">
        <p className='font-bold text-4xl mb-5'>Biography</p>
        <p className='text-xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus ad veritatis, cupiditate libero, velit similique eligendi eos vitae exercitationem quia culpa voluptates veniam doloremque! Rem, vel distinctio! Ipsam magnam nisi, voluptatem eum voluptatum incidunt quam illo, aperiam exercitationem quidem odio architecto labore distinctio doloremque eos praesentium! Officiis perferendis placeat iure.</p>
      </div>
    </div>
  )
}

export default Biography
