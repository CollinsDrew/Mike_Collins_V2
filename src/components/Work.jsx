import React from 'react'
// Motion
import {motion} from 'framer-motion';
// Variants
import {fadeIn} from '../variants';
// Icons
import {BsSpotify} from 'react-icons/bs';
// Images
import johanna from '../assets/johanna.jpeg';
import seazoo from '../assets/seazoo.jpeg';
import lunch from '../assets/lunchmoneylife.jpeg';
import { Link } from 'react-scroll';

const Work = () => {
  return (
    <div className='section' id='work'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-x-10'>
          <motion.div 
          variants={fadeIn('right', 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount: 0.3}}
          className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
            {/* Text */}
            <div>
              <h2 className='h2 leading-tight text-accent'>
                Recent <br/> Work
              </h2>
              <p className='max-w-sm mb-16'>
              Demonstrating exceptional talent and expertise in the field, this recent work showcases Mikey's ability to create top-notch music productions.
              </p>
              <Link to='moreWork'><button className='btn btn-sm'>View All Work</button></Link>
            </div>
            {/* Image */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            {/* Overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            {/* Img */}
            <img className='group-hover:scale-125 transition-all duration-500 h-[205px] lg:h-[315.56px]' src={johanna} alt="Johanna"/>
            {/* Pretitle */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className='text-gradient'>Johanna Warren</span>
            </div>
            {/* Title */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-3xl text-white'>Lessons For Mutants</span>
            </div>
            <div className='absolute -bottom-full left-12 group-hover:bottom-6 transition-all duration-1000 z-50'>
              <a href='https://open.spotify.com/album/7f82oLZDQvL6K3pIj54n7k'><BsSpotify className='text-[#1DB954] h-[26px] w-[26px]'/></a>
            </div>
            </div>
            
          </motion.div>
          <motion.div
          variants={fadeIn('left', 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount: 0.3}}
          className='flex-1 flex flex-col gap-y-10'>
            {/* Image */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            {/* Overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            {/* Img */}
            <img className='group-hover:scale-125 transition-all duration-500' src={lunch} alt="Johanna"/>
            {/* Pretitle */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className='text-gradient'>Lunch Money Life</span>
            </div>
            {/* Title */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-3xl text-white'>Sacrifice</span>
            </div>
            <div className='absolute -bottom-full left-12 group-hover:bottom-6 transition-all duration-1000 z-50'>
              <a href='https://open.spotify.com/album/4fbykSaOFsqxeDxr536naf?si=hz0IE4NiSfK5rzxQrkwCwA&nd=1'><BsSpotify className='text-[#1DB954] h-[26px] w-[26px]'/></a>
            </div>
            </div>

            <div className='flex-1'>
            {/* Image */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            {/* Overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            {/* Img */}
            <img className='group-hover:scale-125 transition-all duration-500' src={seazoo} alt="Johanna"/>
            {/* Pretitle */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className='text-gradient'>Seazoo</span>
            </div>
            {/* Title */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-3xl text-white'>Beaten By The Rain</span>
            </div>
            <div className='absolute -bottom-full left-12 group-hover:bottom-6 transition-all duration-1000 z-50'>
              <a href='https://open.spotify.com/album/2O7urdkQCW0kGgiuzsAeCC'><BsSpotify className='text-[#1DB954] h-[26px] w-[26px]'/></a>
            </div>
            </div>
          </div>

          </motion.div>

         

        </div>
      </div>
    </div>
  )
}

export default Work