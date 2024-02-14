
import Image from "next/image";
export default function Home() {

 
return (

<div className='bg-white py-5 lg:px-[10%] px-[5%] mt-5'>
                <div className='bg-black text-center pt-10 rounded-lg ' >
                    <h2 className=' text-white lg:text-5xl font-bold pt-10'>Your key to global <br /> payment success</h2>
                    <p className='py-4 text-white'>Go global with Tulu Gateway! Expand your reach and cater to a worldwide clientele by<br/> choosing multiple payment options for your business.</p>
                    <button type="button" className="text-black bg-yellow-300 hover:bg-yellow-300 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-10 py-3 pb-4 mt-5 text-center dark:hover:bg-yellow-300  dark:focus:ring-yellow-300">Create account</button>
                    <div className='lg:ps-20 pt-10 mt-10'><Image height={100} width={1000} src="/asset/Group 1359.png" className="lg:h-[600px] pb-10" alt="png" /></div>
                </div>
            </div>
)}