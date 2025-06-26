import React from 'react';
import { stepsData } from '../assets/assets';
import { motion } from "motion/react"; // Or from 'framer-motion' if you're using that

const Steps = () => {
  return (
    <motion.div
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className='flex flex-col items-center justify-center my-32 px-4'
    >
      <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>How it works</h1>
      <p className='text-lg text-gray-600 mb-8'>Transform Words Into Stunning Images</p>

      <motion.div
        className='space-y-4 w-full max-w-3xl text-sm'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2
            }
          }
        }}
      >
        {stepsData.map((item, index) => (
          <motion.div
            key={index}
            className='flex items-start gap-4 p-5 bg-white/60 shadow-md border border-gray-300 rounded-lg cursor-pointer hover:scale-[1.02] transition-all duration-300'
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.5 }}
          >
            <img src={item.icon} alt={item.title} className='w-10 h-10 mt-1' />
            <div>
              <h2 className='text-base sm:text-lg font-semibold text-gray-800'>{item.title}</h2>
              <p className='text-gray-600 text-sm sm:text-base mt-1'>{item.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Steps;
