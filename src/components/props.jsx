import React from 'react'

const Props =(Props)=> {
  return (
    <div className='grid  md:grid-cols-2  w-full justify-center flex-col lg:px-28  px-[20px] gap-40 bg-white pt-20'>
      <div className='pt-5 lg:pl-16'>
        <div className='lg:w-1/2'>
          <h2 className='lg:text-6xl lg:w-[450px] font-bold py-1 text-1xl'>{ Props.title}</h2>
          <p className='py-4 lg:w-[600px] lg:text-1xl'>{Props.para}</p>
          <button type='btn' className='rounded-lg px-10 py-3 bg-yellow-300 text-black'>{Props.btn}</button>
        </div>
      </div>
      <div className='lg:w-full pt-5'>
          <img src={Props.image} alt=""/>
        </div>
    </div>
  )
}

export default Props