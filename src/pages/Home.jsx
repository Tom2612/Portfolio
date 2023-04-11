import React from 'react';
import About from '../components/About';
import Skills from '../components/Skills';
import Tools from '../components/Tools';

export default function Home() {
  return (
    <>
        <div className='home'>
            <h1>Tom Powell</h1>
            <h2>Full-Stack Developer</h2>
        </div>

        <div className='about'>
            <About />

        </div>

        <div className='skills'>
            <Skills />

        </div>

        <div className='tools'>
            <Tools />
            
        </div>
    </>
  )
}
