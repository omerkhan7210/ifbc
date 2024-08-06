import React from 'react'

const BecomeAConsultant = () => {
  return (
    <div className='flex justify-center'>
      <video 
      src='/video/becomeaconsultant.mp4' 
      type="video/mp4"
      width="60%" 
      height="60%"
      autoPlay
      controls
      loop
      // className='w-full h-full object-cover'
      className='rounded-3xl'
      >
      </video>
    </div>
  )
}

export default BecomeAConsultant
