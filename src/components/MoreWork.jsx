import React from 'react'
// Motion
import {motion} from 'framer-motion';
// Variants
import {fadeIn} from '../variants';
// Icons
import {BsSpotify} from 'react-icons/bs';
// images
import Ramsden from '../assets/benRamsden.jpeg';
import pigCity from '../assets/Tigercats__pigcity.jpg';
import Alice from '../assets/alice.jpeg';
import Homechestra from '../assets/homechestra.jpeg';
import Almeria from '../assets/almeria.jpeg';
import Virkelig from '../assets/virkelig.jpeg';

const MoreWork = () => {
  return (
    <div className='section' id='moreWork'>
        <div className='conatiner mx-auto'>
            <motion.h2
            variants={fadeIn('down', 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.3}}
            className='h2 flex justify-center items-center text-accent pb-10'>More Work</motion.h2>
        <motion.div
          variants={fadeIn('left', 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount: 0.3}}
          className='flex-1 flex flex-col lg:flex-row gap-x-10 gap-y-10 mb-10'>
            {/* Image */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            {/* Overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            {/* Img */}
            <img className='group-hover:scale-125 transition-all duration-500 w-[356px] h-[200px] md:w-[734px] md:h-[412px] lg:w-[561px] lg:h-[315px]' src={Ramsden} alt="Johanna"/>
            {/* Pretitle */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className='text-gradient'>Ben Ramsden</span>
            </div>
            {/* Title */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-3xl text-white'>To Care</span>
            </div>
            <div className='absolute -bottom-full left-12 group-hover:bottom-6 transition-all duration-1000 z-50'>
              <a href='https://open.spotify.com/album/0mRXaXsOuXBoGmZlnoD5J8'><BsSpotify className='text-[#1DB954] h-[26px] w-[26px]'/></a>
            </div>
            </div>

            <div className='flex-1'>
            {/* Image */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            {/* Overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            {/* Img */}
            <img className='group-hover:scale-125 transition-all duration-500 w-[356px] h-[200px] md:w-[734px] md:h-[412px] lg:w-[561px] lg:h-[315px]' src={pigCity} alt="Johanna"/>
            {/* Pretitle */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className='text-gradient'>Tigercats</span>
            </div>
            {/* Title */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-3xl text-white'>Pig City</span>
            </div>
            <div className='absolute -bottom-full left-12 group-hover:bottom-6 transition-all duration-1000 z-50'>
              <a href='https://open.spotify.com/album/49HuHrnIY6v9ecgSe5jZUo?si=TAK9_aFJTIOXmZH06jj-yg&nd=1'><BsSpotify className='text-[#1DB954] h-[26px] w-[26px]'/></a>
            </div>
            </div>
          </div>

          </motion.div>

          <motion.div
          variants={fadeIn('right', 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount: 0.3}}
          className='flex-1 flex flex-col lg:flex-row gap-x-10 gap-y-10 mb-10'>
            {/* Image */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            {/* Overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            {/* Img */}
            <img className='group-hover:scale-125 transition-all duration-500 w-[356px] h-[200px] md:w-[734px] md:h-[412px] lg:w-[561px] lg:h-[315px]' src={Alice} alt="Johanna"/>
            {/* Pretitle */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className='text-gradient'>Alice Hubble</span>
            </div>
            {/* Title */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-3xl text-white'>Hexentanzplatz</span>
            </div>
            <div className='absolute -bottom-full left-12 group-hover:bottom-6 transition-all duration-1000 z-50'>
              <a href='https://open.spotify.com/album/7xaVhmgZ8IqVnWrBcdd971?si=0X00addTQ5OG-uRIwPpcUQ&nd=1'><BsSpotify className='text-[#1DB954] h-[26px] w-[26px]'/></a>
            </div>
            </div>

            <div className='flex-1'>
            {/* Image */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            {/* Overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            {/* Img */}
            <img className='group-hover:scale-125 transition-all duration-500 w-[356px] h-[200px] md:w-[734px] md:h-[412px] lg:w-[561px] lg:h-[315px]' src={Homechestra} alt="Johanna"/>
            {/* Pretitle */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className='text-gradient'>Homechestra</span>
            </div>
            {/* Title */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-3xl text-white'>Dialogues that never happened</span>
            </div>
            <div className='absolute -bottom-full left-12 group-hover:bottom-6 transition-all duration-1000 z-50'>
              <a href='hhttps://open.spotify.com/album/1WBmZNPcF1BXjeAgwNh3Dp?si=SaVvH5blQ5uy_KaUxCNvHg&nd=1'><BsSpotify className='text-[#1DB954] h-[26px] w-[26px]'/></a>
            </div>
            </div>
          </div>

          </motion.div>

          <motion.div
          variants={fadeIn('left', 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount: 0.3}}
          className='flex-1 flex flex-col lg:flex-row gap-x-10 gap-y-10 mb-10'>
            {/* Image */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            {/* Overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            {/* Img */}
            <img className='group-hover:scale-125 transition-all duration-500 w-[356px] h-[200px] md:w-[734px] md:h-[412px] lg:w-[561px] lg:h-[315px]' src={Almeria} alt="Johanna"/>
            {/* Pretitle */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className='text-gradient'>Jessica Lauren</span>
            </div>
            {/* Title */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-3xl text-white'>Almeria</span>
            </div>
            <div className='absolute -bottom-full left-12 group-hover:bottom-6 transition-all duration-1000 z-50'>
              <a href='https://open.spotify.com/album/0eRpTXh6KpWVOQIqi5vKYk?si=ZkVoKzjUQXSXZVHjm0AbFw&nd=1'><BsSpotify className='text-[#1DB954] h-[26px] w-[26px]'/></a>
            </div>
            </div>

            <div className='flex-1'>
            {/* Image */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            {/* Overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            {/* Img */}
            <img className='group-hover:scale-125 transition-all duration-500 w-[356px] h-[200px] md:w-[734px] md:h-[412px] lg:w-[561px] lg:h-[315px]' src={Virkelig} alt="Johanna"/>
            {/* Pretitle */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className='text-gradient'>Virkelig</span>
            </div>
            {/* Title */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-3xl text-white'>Lengsel blir til gjemsel</span>
            </div>
            <div className='absolute -bottom-full left-12 group-hover:bottom-6 transition-all duration-1000 z-50'>
              <a href='https://open.spotify.com/album/3byuP2smkehUGTnlWwHzlz?si=utNAeasiS9itJX1h0lc2dw&nd=1'><BsSpotify className='text-[#1DB954] h-[26px] w-[26px]'/></a>
            </div>
            </div>
          </div>

          </motion.div>
        </div>
    </div>
  )
}

export default MoreWork