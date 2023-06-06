import React from 'react'
import  Tilt  from 'react-parallax-tilt'
import {motion} from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import {fadeIn,textVariant} from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({index,title,icon}) =>{
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      {/* <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      > */}
        <img
          src={icon}
          alt='web-development'
          className='rounded-[20px] object-contain'
        />
      {/* </div> */}
    </motion.div>
    </Tilt>
  )
}
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p 
      variants={fadeIn("","",0.1,1)}
      className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        In today's fast-paced and interconnected world, taking care of our mental health has become more crucial than ever. However, finding the time and resources to seek help can be challenging. Imagine having a dedicated companion to assist you anytime, anywhere, and on your own terms. Introducing a Conversational AI Chatbot designed to address your mental health concerns, providing a safe and confidential space for self-reflection, guidance, and support.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service,index)=>(
            <ServiceCard key={index} index={index} {...service}/>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About,'about')