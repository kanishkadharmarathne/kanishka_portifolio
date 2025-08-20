"use client"
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

const herosection = () => {
  return (
    <section className='lg-py-16'>
        <div className="grid grid-cols-1 sm:grid-cols-12 ">
            <motion.div initial={{opacity:0, scale:0.5}}
                        animate={{opacity:1, scale:1}}
                        transition={{duration:0.5}}
                        className="col-span-8 place-self-center text-center sm:text-left justify-self-start">
                <h1 className="text-white mb-4 sm:text-xl md:text-3xl text-5xl font-extrabold lg:leading-normal">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r  from-blue-200 to-blue-400">
                        Hello,I'm <br/>{" "}
                    </span>
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'Kanishka Dharmarathne',
                            1500, // wait 1s before replacing "Mice" with "Hamsters"
                            'a Software Engineer',
                            1500,
                            'a Quality Assurance Engineer',
                            1500
                        ]}
                        wrapper="span"
                        speed={50}
                        style={{ fontSize: '2em', display: 'inline-block' }}
                        repeat={Infinity}
                    />
                </h1>
                <p className="text-gray-400 text-base sm:text-lg lg:text-xl mb-6">
                    I excel at developing scalable, high-quality software solutions blending creativity, precision, and strong QA practices.
                </p>
                <div>
                    <a
                        href="/cv.pdf"
                        download
                        className="bg-blue-400 hover:bg-blue-300 hover:text-black text-white py-2.5 px-5 rounded-lg w-40 flex items-center justify-center"
                    >
                        Download CV
                    </a>
                </div>
            </motion.div> 
            <motion.div initial={{opacity:0, scale:0.5}}
                        animate={{opacity:1, scale:1}}
                        transition={{duration:0.5}} 
                        className="col-span-4 place-self-center mt-4 lg:mt-0">
                <div className="relative w-[350px] h-[350px] lg:w-[400px] lg:h-[400px]">
                    {/* Outer animated blur border */}
                    {/* <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 animate-spin blur-sm opacity-75" 
                         style={{animationDuration: '4s'}}></div> */}
                    
                    {/* Middle blur layer */}
                    <div className="absolute inset-1 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-white animate-spin blur-md opacity-60" 
                         style={{animationDuration: '6s', animationDirection: 'reverse'}}></div>
                    
                    {/* Inner pulsing glow */}
                    {/* <div className="absolute inset-2 rounded-full bg-gradient-to-r from-blue-300 via-purple-400 to-blue-500 animate-pulse blur-lg opacity-40"></div> */}

                    {/* Image container with subtle border */}
                    <div className="absolute inset-4 rounded-full bg-black border-2 border-blue-400/30 overflow-hidden backdrop-blur-sm">
                        <Image 
                            src="/images/hero3.png"
                            alt="hero image"
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover rounded-full"
                            width={300}
                            height={400}
                        />
                    </div>
                    
                    {/* Additional floating particles effect */}
                    <div className="absolute inset-0 rounded-full">
                        <div className="absolute top-4 left-8 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-70"></div>
                        <div className="absolute bottom-8 right-6 w-1 h-1 bg-white rounded-full animate-ping opacity-60" 
                             style={{animationDelay: '1s'}}></div>
                        <div className="absolute top-12 right-12 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping opacity-50" 
                             style={{animationDelay: '2s'}}></div>
                    </div>
                </div>
            </motion.div>
        </div>
    </section>
  )
}

export default herosection;