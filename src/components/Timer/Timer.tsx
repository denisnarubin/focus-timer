import { useState } from 'react'
import BrainIcon from '../../assets/icons/brain.svg?react';
import TimerIcon from '../../assets/icons/timer.svg?react';



function Timer() {


  return (
    <>
      <section className='flex flex-col justify-center items-center mt-20 gap-5 mx-10 w-55 h-55 rounded-full border-2 border-slate-700 mx-auto'>
        <div className='flex flex-col items-center gap-2'>
          <time className='text-3xl font-bold' dateTime="PT01H20M00S">01:20:00</time>
        </div>
        <div className='flex items-center gap-4'>
          <button>
            <BrainIcon className="h-10 w-10 text-slate-100 fill-current stroke-current stroke-[2.5]" />
          </button>
          <button>
            <TimerIcon className="h-10 w-10 text-slate-100 fill-current stroke-current stroke-[2.5]" />
          </button>
          
        </div>
      </section>
      
    </>
  )
}

export default Timer
