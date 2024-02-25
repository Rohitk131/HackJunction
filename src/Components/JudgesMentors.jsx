import React from 'react'
import Navbar from './Navbar'
import data from "../static_utils/judges.json"
import { FiMessageSquare } from "react-icons/fi";


const JudgesMentors = () => {
  return (
    <div className='bg-[#25292A] text-white'>
      <Navbar current="judges" />
      <h1 className='w-fit mx-auto text-5xl my-10 font-bold tracking-tighter'>Top Judges / Mentors</h1>
      <div className='flex justify-evenly flex-wrap gap-5 mt-5'>
        {
          data.map((ele) => {
            return (
              <div className=' group h-auto flex flex-col p-3 mb-10 justify-center w-1/5 rounded-md cursor-pointer bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-violet-700 hover:-skew-x-2 hover:skew-y-2 hover:scale-x-105'>
                <div className='h-[70%] w-full flex justify-center align-top mt-3 mb-5'>
                  <img className='w-[60%] rounded-full shadow-lg transition-all ease-linear group-hover:shadow-blue-500' src={ele.img}></img>
                </div>
                <div className='flex flex-col h-full justify-between'>
                  <p className='text-wrap text-gray-900 overflow-hidden'>{ele.desc}</p>
                  <div className='flex flex-row justify-between'>
                    <h1 className='text-black text-wrap text-2xl font-bold'>{ele.name}</h1>
                    <button className='text-white h-fit bg-blue-600 p-2 px-3 rounded-3xl flex gap-2' onClick={
                      ()=>{
                        window.open(ele.linkedin,"_blank");
                      }
                    }>Connect <FiMessageSquare /></button>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default JudgesMentors
