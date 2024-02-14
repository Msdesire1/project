import React from 'react'

const propsthree = (Propsthree) => {
  return (
    <div className='px-10  pt-20 flex py-10 '>
        <div className='grid md:grid-cols-2 justify-center gap-6 '>
            <div className='py-5 lg:pl-32  pt-32'>
             <h3 className='lg:text-2xl font-semibold sm:text-sm'>{Propsthree.head}</h3>
             <p className="pt-4 text-1xl lg:w-[85%]">{Propsthree.para}</p>
              <div className='pt-28'>
                <img src={Propsthree.image} alt=""/>
                </div>
            </div>
            <div className='lg:pr-32 w-full '>
                <div className='border w-15  h-30 rounded-md pb-5 pe-20 '>
                <div className='pt-10 px-10'>
                <img src={Propsthree.img} alt="" className='px-4'/>
                 <h3 className='py-3 font-bold lg:text-2xl px-5'>{Propsthree.heading}</h3>
                 <p className="pt-4 lg:text-1xl lg:w-[85%]  w-full px-5 text-sm ">{Propsthree.parag}</p>
                </div>
                </div>

                <div className='w-full '>
                <div className='border w-15  h-50 rounded-md pb-5 pe-20 mt-7'>
                <div className='pt-10 px-10'>
                <img src={Propsthree.img2} alt="" className='px-4'/>
                 <h3 className='py-3 font-bold lg:text-2xl px-5 '>{Propsthree.heading2}</h3>
                 <p className="pt-4 lg:text-1xl  lg:w-[85%]  w-full px-5 text-sm">{Propsthree.parag2}</p>
                </div>
                </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default propsthree