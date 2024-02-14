import React from 'react'

const Propsfour = (Propsfour) => {
  return (
    <div className='grid  md:grid-cols-2  w-full justify-center flex-col lg:px-28  px-[20px] gap-5 bg-white pt-20'>
    <div className='lg:w-full pt-5 lg:pl-10'>
        <img src={Propsfour.image} alt=""/>
      </div>
      <div className='pt-5   lg:pr-20'>
      <div className='lg:w-1/2'>
        <h2 className='lg:text-4xl lg:w-[450px] font-bold py-1 text-1xl'>{ Propsfour.head}</h2>
        <p className='py-4 my-3 lg:w-[500px] lg:text-1xl'>{Propsfour.para3}</p>
        <button type='btn'className='rounded-lg px-10 py-3 bg-yellow-300 text-black'>{Propsfour.btn}</button>
      </div>
    </div>
  </div>
  )
}

export default Propsfour