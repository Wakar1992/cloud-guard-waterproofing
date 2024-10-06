import React from 'react'
import { motion } from 'framer-motion'
import { slideUpVariants, zoomInVariants } from './animation'

function About() {
  return (
    <div className='lg:w-[80%] w-[90%] m-auto py-[60px] flex lg:flex-row flex-col
    jusify-between items-start gap-[50px]' id='about'>
      <motion.div
      initial='hidden'
      whileInView='visible'
      variants={slideUpVariants}
      className='lg:w-[60%] w-full flex flex-col justify-center items-start gap-6'
      >
        <motion.h1
        variants={slideUpVariants}
        className='text-yellow-500 text-3xl'
        >
          welcome to
        </motion.h1>
        <motion.h1
        variants={slideUpVariants}
        className='text-white uppercase text-[40px] font-bold'
        >
          cloud guard waterproofing
        </motion.h1>
        <div className='w-[120px] h-[6px] bg-yellow-500'></div>
        <p className='text-3xl italic text-gray-50 mt-[60px]'>
We are the leader with 10 years of experiance in the waterproofing market.        </p>
        
      </motion.div>
      <motion.div
      initial='hidden'
      whileInView='visible'
      className='lg:w-[40%] w-full flex flex-col justify-center items-start gap-6'
      >
        <p className='text-white text-lg text-justify'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo quasi rerum odio cum nisi dolore magnam dolor animi a atque aspernatur mollitia modi, assumenda nobis quisquam recusandae in ullam voluptatum?
          Officiis, eveniet! Veniam voluptatem laborum aspernatur quos voluptate laboriosam quis perspiciatis molestiae excepturi sunt amet deserunt dolores, suscipit ex impedit quam neque consequuntur asperiores fugiat voluptatibus dicta? Iure, dolores vero.
        </p>

      <motion.button 
        variants={zoomInVariants}
        className='bg-yellow-500 hover:bg-white hover:text-black px-10 py-3 rounded-lg font-bold text-black'
        >
        READ MORE
      </motion.button>
      </motion.div>
    </div>
  )
}

export default About
