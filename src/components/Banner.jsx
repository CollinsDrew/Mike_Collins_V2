import React from 'react'
// Images

import Mike from '../assets/mike_collins.jpeg';
// Icons
import {FaTwitter, FaFacebook, FaInstagram} from 'react-icons/fa';
// Type Animation
import {TypeAnimation} from 'react-type-animation';
// Motion
import {motion} from 'framer-motion';
// Variants
import {fadeIn} from '../variants';
import { Link } from 'react-scroll';

const Banner = () => {
  return (
    <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
          {/* Text */}
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1
              variants={fadeIn('up',0.3)}
              initial="hidden"
              whileInView={'show'}
              viewport={{once: false, amount: 0.7}}
              className='text-[55px] font-bold leading-[0.8] lg:text-[110px]' >
                MIKEY <span>COLLINS</span>
            </motion.h1>  
              
             
            <motion.div
              variants={fadeIn('up',0.4)}
              initial="hidden"
              whileInView={'show'}
              viewport={{once: false, amount: 0.7}}
              className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
              {/* <span className='text-white mr-2'>I am a</span> */}
              <TypeAnimation sequence={[
                'Musician ',
                2000,
                'Producer ',
                2000,
                'Mix Engineer ',
                2000
              ]}
              speed={50}
              className='text-accent'
              wrapper='span'
              repeat={Infinity} /> 
              
            </motion.div>

            <motion.p
            variants={fadeIn('up',0.5)}
            initial="hidden"
            whileInView={'show'}
            viewport={{once: false, amount: 0.7}}
            className='mb-8 max-w-lg mx-auto lg:mx-0'>Welcome! Thanks for stopping by.</motion.p>
            
            <motion.div 
            variants={fadeIn('up',0.6)}
            initial="hidden"
            whileInView={'show'}
            viewport={{once: false, amount: 0.7}}
            className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
            <Link to='contact'><button className='btn btn-lg'>Contact Me</button></Link>
            <Link to='work'><a href='work' className='text-gradient btn-link'>Recent Work</a></Link>
            </motion.div>

            {/* Socials */}
            < motion.div
            variants={fadeIn('up',0.7)}
            initial="hidden"
            whileInView={'show'}
            viewport={{once: false, amount: 0.7}}
            className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
              <a href='https://www.facebook.com/mikeycollinsmusic/'>
                <FaFacebook/>
              </a>
              <a href='https://twitter.com/MikeyColsmusic'>
                <FaTwitter/>
              </a>
              <a href='https://www.instagram.com/mikeycolsmusic/'>
                <FaInstagram/>
              </a>
            </motion.div>

          </div>
          {/* Image */}
          <motion.div
          variants={fadeIn('down',0.5)}
          initial="hidden"
          whileInView={'show'}
          // viewport={{once: false, amount: 0.7}}
          className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'>
            <img className='rounded-full w-[370px] h-[370px] sm:w-[500px] sm:h-[500px]' src={Mike} alt='/'/>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Banner