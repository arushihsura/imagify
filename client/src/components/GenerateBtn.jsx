import React , {useContext} from 'react'
import { assets } from '../assets/assets'
import { motion } from "motion/react"; // Use 'framer-motion' unless you're sure about 'motion/react'
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';


const GenerateBtn = () => {
  const {user, setShowLogin} = useContext(AppContext);
  const navigate = useNavigate();
  const onClickHandler = () => {
    if(user){
      navigate('/result');

    }else{
      setShowLogin(true);
    }
    
  }

  return (
    <motion.div 
    initial={{ opacity: 0.2, y: 100 }}
    transition={{ duration: 1 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    
    className='pb-16 text-center'>
        <h1 className='text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold text-neutral-800 py-6'>See the magic. Try now!</h1>

        <button onClick={onClickHandler} className='inline-flex items-center gap-2 bg-black text-white px-12 py-3 rounded-full hover:scale-105 transition-all duration-500'>
            Generate Images
                <img src={assets.star_group} alt="" className='h-6' />
        </button>
    </motion.div>
  )
}

export default GenerateBtn