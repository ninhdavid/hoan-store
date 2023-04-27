import React from 'react'
import { motion } from 'framer-motion'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import Link from 'next/link'
import Button from '../Common/Button'
import { VscChevronDown } from 'react-icons/vsc'
import { NavHoverStyled } from '@/styles/LandingPage/Footer/FooterStyled'


// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {}


const Footer = (props: Props) => {
  return (
    <main className='flex justify-center'>
      <div className='bg-white pt-20 pb-10 px-[30px] w-[1800px] lg:px-[48px] xl:px-[60px] 2xl:px-[120px] xl:pb-20'>
        <div className='flex justify-center flex-col'>
          <div className='lg:flex lg:flex-row'>
            <section className='lg:w-[50%]'>
              <div className='text-lg font-medium mb-6 lg:w-[75%] xl:text-xl'><p>Sign up for THgiay&apos;s new, launches and special offers - straight to your inbox</p>
              </div>
              <input type='email' placeholder='Email Address' className='mb-8'></input>
              <div className='flex flex-row md:ml-2'>
                <a
                  href="#"
                  title="facebook/hoanShop"
                  className="mr-[20px] p-[6px] text-[30px] transition duration-200 hover:drop-shadow-lg hover:-translate-y-1"
                >
                  <FaFacebook />
                </a>
                <a
                  href="#"
                  title="instagram/hoanShop"
                  className=" p-[6px] text-[30px] transition duration-200 hover:drop-shadow-lg hover:-translate-y-1"
                >
                  <FaInstagram />
                </a>
              </div>
            </section>
            <section className='pt-10 lg:pt-0 lg:flex-1'>
              <div className='flex flex-col'>
                <NavHoverStyled
                as={motion.div}
                className='text-xl font-medium md:flex md:flex-row xl:text-3xl'>
                  <div className='w-[50%] divHover'>
                    <div 
                    className='mb-4 linkHover'><Link href='/'>About Us</Link></div>
                    <div 
                    className='mb-4 linkHover'><Link href='/'>Help</Link></div>
                    <div 
                    className='mb-4 linkHover'><Link href='/'>Shipping</Link></div>
                    <div 
                    className='mb-4 linkHover'><Link href='/'>Returns</Link></div>
                    <div 
                    className='mb-4 linkHover'><Link href='/'>Wholesale</Link></div>
                  </div>
    
                  <div className='divHover'>
                    <div className='mb-4 linkHover'><Link href='/'>Personalize</Link></div>
                    <div className='mb-4 linkHover'><Link href='/'>Refreshed</Link></div>
                    <div className='mb-4 linkHover'><Link href='/'>Modern Slavery Statement</Link></div>
                    <div className='mb-4 linkHover'><Link href='/'>Discounts</Link></div>
                    <div className='mb-4 linkHover'><Link href='/'>Press</Link></div>
                  </div>
                </NavHoverStyled>
              </div>
            </section>
          </div>
  
          <section className='mt-10 md:mt-5 xl:mt-20'>
            <div className='uppercase text-xs font-medium flex flex-row justify-around items-center md:w-[45%] xl:w-[30%] xl:justify-between xl:text-sm 2xl:w-[25%] '>
              <Button dark rounded small motionless className='flex flex-row justify-between'>Viet Nam 
                <VscChevronDown className='ml-2'/>
              </Button>
              <motion.div 
              whileHover={{opacity:1}}
              initial={{opacity:0.8}}
              ><Link href='/' >Privacy</Link></motion.div> 
              <motion.div 
              whileHover={{opacity:1}}
              initial={{opacity:0.8}}
              ><Link href='/' >Terms</Link></motion.div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}

export default Footer