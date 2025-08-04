"use client";
import React from 'react';
import dynamic from 'next/dynamic';

const AnimatedNumbers = dynamic(() => {
    return import('react-animated-numbers');
    }, { ssr: false }
);

const achievements = [
  {
    metric: "Projects",
    value: "3",
    postfix: "+"
  },
  {
    metric: "Skills",
    value: "10",
    postfix: "+"
  },
  {
    metric: "Articles",
    value: "5",
    postfix: "+"
  },
  {
    metric: "Experience",
    value: "2",
    postfix: "+"
  }
]

const Achievements = () => {
  return (
    <>
      {/* Mobile version - full width with border */}
      <div className='sm:hidden py-8 px-4'>
        <div className='border-blue-300 border rounded-md py-8 px-4 flex flex-col items-center justify-between gap-4'>
          {achievements.map((achievement, index) => (
            <div key={index} 
              className='flex flex-col items-center justify-center mx-4 my-4'>
              <h2 className='text-blue-400 text-3xl font-bold'>
                <AnimatedNumbers 
                    includeComma
                    animateToNumber={parseInt(achievement.value)}
                    locale='en-US'
                    className='text-blue-400'
                    congigs = {(_, index) => {
                        return {
                            mass: 1,
                            friction: 100,
                            tensions: 140 * (index + 1),
                        };
                    }}
                />
                {achievement.postfix}
              </h2>
              <p className='text-white text-base'>{achievement.metric}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop/Tablet version - fixed position bottom right */}
      <div className='hidden sm:block fixed bottom-4 right-4 z-50'>
        <div className='bg-black/80 backdrop-blur-sm rounded-lg p-4 flex flex-col gap-3'>
          {achievements.map((achievement, index) => (
            <div key={index} 
                className='flex flex-col items-center justify-center'>
              <h2 className='text-blue-400 text-3xl font-bold'>
                <AnimatedNumbers 
                    includeComma
                    animateToNumber={parseInt(achievement.value)}
                    locale='en-US'
                    className='text-blue-400'
                    congigs = {(_, index) => {
                        return {
                            mass: 1,
                            friction: 100,
                            tensions: 140 * (index + 1),
                        };
                    }}
                />
                {achievement.postfix}
              </h2>
              <p className='text-white text-xl'>{achievement.metric}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Achievements;