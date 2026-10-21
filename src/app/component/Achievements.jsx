"use client";
import React from 'react';
import dynamic from 'next/dynamic';
import Reveal from './Reveal';

const AnimatedNumbers = dynamic(() => {
    return import('react-animated-numbers');
    }, { ssr: false }
);

const achievements = [
  {
    metric: "Projects",
    value: "7",
    postfix: "+"
  },
  {
    metric: "Skills",
    value: "20",
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
    <Reveal>
      <section aria-label="Highlights" className='mb-24 md:mb-32'>
        <div className='glass overflow-hidden rounded-2xl'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-px bg-line'>
            {achievements.map((achievement, index) => (
              <div key={index} className='bg-night/85 px-6 py-8 text-center md:text-left'>
                <p className='font-mono text-[11px] text-muted'>
                  {String(index + 1).padStart(2, "0")}
                </p>
                <div className='mt-2 flex items-baseline justify-center md:justify-start gap-1 text-4xl md:text-5xl font-bold text-ink'>
                  <AnimatedNumbers
                    includeComma
                    animateToNumber={parseInt(achievement.value)}
                    locale='en-US'
                  />
                  <span className='text-gradient'>{achievement.postfix}</span>
                </div>
                <p className='mt-2 text-sm uppercase tracking-[0.2em] text-muted'>{achievement.metric}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  )
}

export default Achievements;
