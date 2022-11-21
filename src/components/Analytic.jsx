import React from 'react'
import lapton from '../assets/laptop.jpg'

const Analytic = () => {
  return (
    <div className='w-full bg-white py-16 px-4 '>
        <div className='max-w-[1240] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4 ' src={lapton} alt="/" />
            <div className='flex flex-col justify-center '>
                <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytic Centrally</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ipsum sequi facere ducimus enim quas aliquid mollitia itaque quod aut quasi ut in quam, cum saepe quaerat amet nostrum possimus?
                </p>
                <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 '>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Analytic