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
                            'a Web Developer',
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
                    <button type="submit"
                            className="bg-blue-400 hover:bg-blue-300 hover:text-black text-white py-2.5 px-5 rounded-lg w-40">
                                Download CV
                    </button>
                </div>
            </motion.div> 
            <motion.div initial={{opacity:0, scale:0.5}}
                        animate={{opacity:1, scale:1}}
                        transition={{duration:0.5}} 
                        className="col-span-4 place-self-center mt-4 lg:mt-0">
                <div className="rounded-full bg-gray-700 w-[350px] h-[350px] lg:w-[400px] lg:h-[400px] relative">
                    <Image 
                        src="/images/hero.png"
                        alt="hero image"
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        width={300}
                        height={500}
                    />
                </div>
            </motion.div>
        </div>
    </section>
  )
}

export default herosection;