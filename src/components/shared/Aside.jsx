import React, { useState } from 'react'
// import { ChevronForwardOutline } from 'react-ionicons'
import { links } from '../../data/layout'
export const Aside = () => {
  let [isMinimized , setIsMinimized] = useState(false)

  return (
    <div className={`bg-gray-200 v-aside  h-[100vh]   left-0 top-0 shadow-xl z-309 ${isMinimized ? 'w-[50px]' : 'w-[200px]'}`} >
           <div className="h-[55px] bg-black flex items-center justify-between">
               {!isMinimized &&<h1 className='text-2xl text-white font-semibold'>APP NAME</h1>}
               <div className='flex items-center' onClick={() => setIsMinimized(isMinimized => (!isMinimized))}>
                 {/* <ChevronForwardOutline color={'#fff'}/> */}
               </div>
           </div>
           <div className="p-2 overflow-x-hidden">
            { (links && links.length > 0) && (
                 links.map(link => (
                    <div className='flex items-center justify-between  py-3 hover:text-white'>
                       <div className='flex'>
                          {link.icon&&(<link.icon cssClasses='text-white'/>)} 
                          {!isMinimized && <span className='ml-3'>{link.label}</span>}
                       </div>
                       <div>
                        {/* {!isMinimized && <ChevronForwardOutline width={'20px'}/> } */}
                       </div>
                    </div>
                 ))
            )}
           </div>
    </div>
  )
}
