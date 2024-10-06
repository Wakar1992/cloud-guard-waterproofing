import React from 'react'
import { motion } from 'framer-motion'
import { slideUpVariants, zoomInVariants } from './animation'

function Contact() {
  return (
    <div className='bg-white w-full'>

      <div className=' lg:w-[80%] w-[90%] m-auto py-[60px] flex lg:flex-row flex-col
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
            CONTACT US
          </motion.h1>
          <motion.h1
            variants={slideUpVariants}
            className='text-black uppercase text-[40px] font-bold'
          >
            reach us for any query
          </motion.h1>
          <div className='w-[120px] h-[6px] bg-yellow-500'></div>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact
