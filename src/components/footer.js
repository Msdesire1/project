import Image from "next/image";
export default function Home() {

 
return (
    <>
   
      {/* 13 footer */}
      <div className='pt-10 bg-white'>
        <div className='bg-black pt-10 lg:pl-40 pb-5 px-5 '>
          <div className='grid md:grid-cols-2  grid-flow-col-1 '>
            <div className='pt-5'><Image width={200} height={60} src="/asset/customcolor.png" className="h-[60]" alt="GatewayLogo"/></div>
            <div className='flex text-center lg:pl-40  px-5 pt-5 lg:flex-row   flex-col-  gap-3'>
              <Image width={70} height={55} src="/asset/Group 7 (4).png" className="h-[60] lg:pe-4" alt="GatewayLogo" />
              <Image width={70} height={55} src="/asset/Group 4 (3).png" className="h-[60] lg:pe-4" alt="GatewayLogo" />
              <Image width={70} height={55} src="/asset/Group 5 (2).png" className="h-[60] lg:pe-4" alt="GatewayLogo" />
              <Image width={70} height={55} src="/asset/Group 6 (2).png" className="h-[60] lg:pe-4" alt="GatewayLogo" />
              <Image width={70} height={55} src="/asset/Group 8 (2).png" className="h-[60] lg:pe-4" alt="GatewayLogo" />
            </div>
          </div>  
        </div>
      </div>
      {/* 14 footer */}
      <div className=''>
        <div className='bg-black pt-10 lg:pl-40  px-10'>
          <div className='grid  md:grid-cols-2 text-white'>
            <div className='flex gap-10 lg:flex-row   flex-wrap '>
              <div className='pt-5'>
                <a href="#" className='text-yellow-300  lg:text-1xl pb-2'>Use Case</a><br /><br />
                <a href="#" className='text-white-300'>Payment</a><br /><br />
                <a href="#" className='text-white-300'>Remittance</a><br /><br />
                <a href="#" className='text-white-300'>Investment</a><br /><br />
                <a href="#" className='text-white-300'>Trade</a><br /><br />
                <a href="#" className='text-white-300'>Capital</a><br /><br />
              </div>
              <div className='pt-5 lg:ps-20'>
                <a href="#" className='text-yellow-300 pb-2 text-1xl '>Products</a><br /><br />
                <a href="#" className='text-white-300'>Exchange</a><br /><br />
                <a href="#" className='text-white-300'>Academy</a><br /><br />
                <a href="#" className='text-white-300'>Wallet</a><br /><br />
                <a href="#" className='text-white-300'>Coin</a><br /><br />
                <a href="#" className='text-yellow-300 underline text-1xl pt-3 '>See More</a><br /><br />
              </div>
              <div className='pt-5 lg:ps-20'>
                <a href="#" className='text-yellow-300 pb-2 text-1xl '>Company</a><br /><br />
                <a href="#" className='text-white-300'>About</a><br /><br />
                <a href="#" className='text-white-300'>Contact</a><br /><br />
                <a href="#" className='text-white-300'>FAQ</a><br /><br />
                <a href="#" className='text-white-300'>Team</a><br /><br />
                <a href="#" className='text-white-300'>Pricing</a><br /><br />
                <a href="#" className='text-white-300'>Parttner</a><br /><br />
                <a href="#" className='text-white-300'>Career</a><br /><br />
              </div>

              <div className='pt-5 lg:ps-10 py-5'>
                <a href="#" className='text-yellow-300 pb-2 text-1xl '>Developers</a><br /><br />
                <a href="#" className='text-white-300'>APIS</a><br /><br />
                <a href="#" className='text-white-300'>SDKs</a><br /><br />
                <a href="#" className='text-white-300'>Documentation</a><br /><br />
                <a href="#" className='text-white-300'>Trade</a><br /><br />
              </div>
            </div>

            <div className=' lg:w-[364px] lg:h-[311px] rounded-md  lg:pl-20 pt-20'>
              <div className='text-white px-1'>
                <h2 className='text-2xl'>Subscribe to newsletter</h2>
                <p className='text-gray-100  pb-10'>Sign up to receive new update</p>
                <input type='text' name='Emall address' placeholder='Email address' className='w-400 h-70 bg-black text-gray-100 lg:px-20  px-14 py-3 rounded-md border '>
                </input>
                <button type="button" className="text-yellow-300 bg-black hover:bg-black- focus:ring-4 focus:outline-none focus:ring-black-300 font-medium rounded-lg text-sm px-20 py-3 pb-4 mt-5 text-center dark:hover:bg-black dark:focus:ring-black">Get started</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-black pt-10 lg:pl-40  px-10'>
        <div className='grid  md:grid-cols-2 text-white'>
          <div className='flex lg:flex-row  flex-wrap gap-10'>
            <div className='pt-5 lg:ps-'>
              <a href="#" className='text-yellow-300 text-1xl pb-2'>Learn</a><br /><br />
              <a href="#" className='text-white-300'>Academy</a><br /><br />
              <a href="#" className='text-white-300'>Blog</a><br /><br />
              <a href="#" className='text-white-300'>News</a><br /><br />
              <a href="#" className='text-white-300'>Press</a><br /><br />
            </div>

            <div className='pt-5 lg:ps-20'>
              <a href="#" className='text-yellow-300 pb-2 text-1xl '>Community</a><br /><br />
              <a href="#" className='text-white-300'>Twitter</a><br /><br />
              <a href="#" className='text-white-300'>Instagram</a><br /><br />
              <a href="#" className='text-white-300'>Linkedin</a><br /><br />
            </div>

            <div className='pt-5 lg:ps-20'>
              <a href="#" className='text-yellow-300 pb-2 text-1xl'>Resources</a><br /><br />
              <a href="#" className='text-white-300'>Roadmap</a><br /><br />
              <a href="#" className='text-white-300'>Whitepaper</a><br /><br/>
              <a href="#" className='text-white-300'>Our story</a><br /><br />
            </div>
          </div>
        </div>
      </div>
      <div className='bg-black pt-10 lg:pl-40 px-10'>
        <div className='grid  md:grid-cols-2 lg:flex-row   flex-col'>
          <div className='pt-5 capitalize underline  text-gray-400'>
            privacy & policy
          </div>
          <div className='pt-5 pb-20 capitalize flex'>
            <Image width={40} height={55} src="/asset/vector (1).png" className="lg:h-[30] lg:ps-5" alt="GatewayLogo" />
            <div className='capitalize text-gray-400 lg:ps-2 '>2023 copyright by TuluPay.com. All right reserved.</div>
          </div>
        </div>
      </div>

 </> 
)}