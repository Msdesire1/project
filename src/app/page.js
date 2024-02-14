"use client"
import Image from "next/image";
import Props from "@/components/props";
import Propstwo from "@/components/propstwo";
import Propsthree from "@/components/propsthree";
import Propsfour from "@/components/propsfour";
import Yours  from"@/components/yours";
import Footer from"@/components/footer";
import { useState } from "react";
export default function Home() {
  const [dropdown1,setDropdown1]= useState(false)
  const [dropdown2,setDropdown2]= useState(false)
  const handleopen1=()=>{
    setDropdown1(!dropdown1)


  }
  const handleopen2=()=>{
    setDropdown2(!dropdown2)

    
  }
  return (
    <>
      <nav className="relative mx-auto p-5 bg-black lg:px-20">
        <div className="flex items-center  justify-between">
          <div className="pt-3"><img src="/asset/Frame 2544.png"className="w-[150px] h-[30px]"></img></div>
          <div className="md:flex space-x-6 hidden ">
            <div a href=""className="text-white cursor-pointer">
              <div class="relative text-right">
                <div onClick={handleopen2}>
                  <div a href="#" className="flex w-full justify-center gap-x-1.5 bg-black  px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset  hover:bg-black" id="menu-a" aria-expanded="true" aria-haspopup="true">
                    Channels
                    <svg class="-mr-1 h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                    </svg>
                  </div>
                </div>
                {dropdown2 && (
                  <div class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-a" tabindex="-1">
                  <div class="py-1" role="none">
                    <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">KU</a>
                    <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">KU</a>
                    <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">KU</a>
                    <form method="POST" action="#" role="none">
                      <button type="submit" className="text-gray-700 block w-full px-4 py-2 text-left text-sm" role="menuitem" tabindex="-1" id="menu-item-3">KU</button>
                    </form>
                  </div>
                </div>
                )}
              </div>

            </div>
            <div a href=""className="hover:text-blue-300 text-white cursor-pointer">
              <div class="relative  text-right">
                <div onClick={handleopen1}>
                  <div a href=""className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-black" id="menu-P" aria-expanded="true" aria-haspopup="true">
                    Solutions
                    <svg class="-mr-1 h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                    </svg>
                  </div>
                </div>
                {dropdown1 && (
                  <div class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-p" tabindex="-1">
                  <div class="py-1" role="none">
                    <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Account settings</a>
                    <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Support</a>
                    <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">License</a>
                    <form method="POST" action="#" role="none">
                      <button type="submit" className="text-gray-700 block w-full px-4 py-2 text-left text-sm" role="menuitem" tabindex="-1" id="menu-item-3">Sign out</button>
                    </form>
                  </div>
                </div>
                )}
                
              </div>
            </div>
            <a href="" className="hover:bg-black text-white cursor-pointer">Who we serve</a>
            <a href="" className="hover:bg-black text-white cursor-pointer">pricing</a>
          </div>
          <div className="md:flex gap-16 hidden">
            <a href="" className="hover:text-black text-white cursor-pointer"><img src="/asset/tablerbrightness(1).png"></img></a>
            <a href="" className="hover:text-black text-white  cursor-pointer">Login</a>
            <button className="btn text-black bg-yellow-300 rounded-lg px-5 h-10">Create account</button>
          </div>
        </div>
      </nav>
      <div>
        <Props
          title={"One platform, all currencies"}
          para={"Reaching more customers globally, getting paid instantly, and simplifying checkout with multiple fiat currencies."}
          image={"/asset/Group 1403.png"}
          btn={"Get started"}
        />
      </div>
       <div>
        <Propstwo
        head={"Empowering global payments"}
        para={"Fueling business growth and expansion for reach with multiple for currenies"}
        />
       </div>

       <div>
           <Propsthree
           head={"Global currency acceptance"}
           para={"Cater to diverse clients with instant acceptance of major currencies. Remove currency barriers and watch your global sales soar with frictionless transactions while managing your payments with ease from a single, intuitive platform."}
           image={"/asset/Group 1404.png"}
           img={"/asset/Vector(3).png"}
           heading={"Build your payment oasis"}
           parag={"Tailor specific currencies to individual products or regions, offering a personalized payment experience and perfect payment landscape for your global audience. Add or remove currencies as your business evolves, keeping up with market trends and customer needs."}
           heading2={"Unlock worldwide markets"}
           parag2={"Tap into diverse markets and unlock endless revenue streams with Tulu Gateway's fiat channel. Offer local payment preferences, foster loyalty, and watch your global customer base flourish."}
           img2={"/asset/Vector(4).png"}
           />
       </div>
       <div>
       <Propsfour
        image={"/asset/Frame3196.png"}
        head={"Swift and secure instant payments"}
        para3={"Enjoy instant settlements and minimize fraud risks with advanced fraud prevention, data encryption, and compliance ensuring every transaction is protected. Focus on your business, knowing your finances are in secure hands. "}
        btn={"Get started"}
       />
       </div>
       <div>
       <Propsfour
        image={"/asset/Frame3198.png"}
        head={"Simplify multi currency transactions"}
        para3={"Manage all your multi-currency transactions from one intuitive dashboard, with real-time insights and transparent reports, creating a unified payment ecosystem for smooth global operations. "}
        btn={"Create account"}
       />
       </div>
       <div>
       <Propsfour
        image={"/asset/Frame3197.png"}
        head={"Choose how you pay, anytime, anywhere"}
        para3={"Open doors to new markets and demographics with multiple payment methods like bank transfers, cards, USSD and beyond, ensuring convenience and flexibility."}
        btn={"Start receiving payments"}
       />
       </div>
       <div>
       <Propsfour
        image={"/asset/Frame3199.png"}
        head={"Multiple channel conversion:"}
        para3={"Our gateway allows users to manage all conversions and swap from one payment channel to another from a single platform, ensuring you are ahead with transparent, updated exchange rates, ensuring fair conversions for every transaction."}
        btn={"Convert now"}
       />
       </div>
  <Yours/>
  <Footer/>
   </>
  )
}
