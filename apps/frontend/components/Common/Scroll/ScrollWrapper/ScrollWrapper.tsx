import React from 'react'
import ScrollCard from '../ScrollCard'

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {
    children?: React.ReactNode
}

function ScrollWrapper(props: Props) {
  return (
    <main className='h-[15000px]]'>
        <div className='h-full mt-[3vh] flex flex-col '>
            <section className='overflow-hidden mr-[-24px] md:mr-[-30px] lg:mr-[0]'>
                <div className='mb-[33vh] py-6 pl-10 bg-slate-300 rounded-3xl md:ml-24 md:pr-[30px] md:py-10 md:mb-[23vh] lg:px-[60px] lg:mb-[20vh] xl:px-[80px] 2xl:mx-24 2xl:px-[100px] 2xl:py-16'>
                    <p className='text-xs leading-4 mb-3 pl-3 xl:text-[11px] md:mb-4 md:pl-0 xl:leading-[14px] 2xl:mb-6'><span>/WHAT WE DO</span></p>
                    <p className='text-[38px] font-semibold flex flex-col mb-6 md:mb-8 2xl:mb-6 2xl:text-5xl'>
                        <span>Our cool</span>
                        <span className='2xl:-translate-y-3'>playgrounds</span>
                    </p>
                    <p className='text-base mb-3 md:mb-5 2xl:mb-8 2xl:text-lg'>The world has new playgrounds of innovation. Web3 and Metaverse are new frontiers to explore. It gives new ambitions and it sparks imagination. We believe it needs craft, storytelling and culturally-relevant ideas. We help brands explore these spaces with a consistent story.</p>
                    <button className='text-white  text-xl rounded-3xl w-[140px] h-[50px] bg-black 2xl:text-2xl 2xl:w-[160px]'>Shop Now</button>
                </div>
            </section>

            {/* Scroll card start*/}
            <ScrollCard />
            {/* Scroll end start*/}

            {props?.children}
        </div>
    </main>
  )
}

export default ScrollWrapper