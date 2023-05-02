import React from 'react'
// Icon
import {BsArrowUpRight} from 'react-icons/bs';
// Motion
import {motion} from 'framer-motion';
// Variants
import {fadeIn} from '../variants';

// Services Data
const services = [
  {
    name: 'Mix Engineer',
    description: 'Using a combination of "in the box" and high end analog outboard, Mikeys mixes have the best of both worlds',
    link: 'Learn More',
  },
  {
    name: 'Producer',
    description: 'Working with artists to achieve their vision is Mikeys favourite thing to do.',
    link: 'Learn More',
  },
  {
    name: 'Musician & Song Writer',
    description: 'Get in touch if you would like to book a writing session or come and see Mikey play in the upcoming Allo Darlin shows.',
    link: 'Learn More',
  }
]

const Services = () => {
  return (
    <section className='section' id='services'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row '>
          {/* Text & Image */}

          {/* Need to adjust background image to bottom right */}
          <motion.div 
          variants={fadeIn('right', 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount: 0.3}}
          className='flex-1 lg:bg-services bg-no-repeat lg:bg-center mix-blend-lighten mb-12 lg:mb-0'>
            <h2 className='h2 text-accent mb-6'>
              Services Mikey Provides
            </h2>
            {/* <h3 className='h3 max-w-[455px] mb-16'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3> */}
            <button className='btn btn-sm'>Recent Work</button>
          </motion.div>
          {/* Services */}
          <motion.div 
          variants={fadeIn('left', 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount: 0.3}}
          className='flex-1'>
            {/* Services List */}
            <div>
              {services.map((service, index)=>{
                // Destructure Services
                const{name, description, link} = service;

                return (
                  <div className='border-b border-white/20 h-[146px] mb-[38px] flex' key={index}>
                    <div className='max-w-[476px]'>
                      <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>{name}</h4>
                      <p className='font-secondary leading-tight '>{description}</p>
                    </div>
                    {/* <div className='flex flex-col flex-1 items-end'>
                      <a href='#' className='btn w-9 h-9 mb-[42px] flex justify-center items-center'>
                        <BsArrowUpRight/>
                      </a>
                      <a href='#' className='text-gradient text-sm '>
                        {link}
                      </a>
                    </div> */}
                  </div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Services