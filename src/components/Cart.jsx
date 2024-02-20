import React from 'react'

export const Cart = (props) => {
  
  return (
    <div className=' bg-gray-200 rounded-md border border-none p-2 mb-5'>
        <div>
            <h1 className=' mb-2'>{props.title}</h1>
            <p className=' mb-2'> {props.desk}</p>
            <div className=' flex justify-center'>
               <button className="btn btn-outline  h-10 w-20">{props.level}</button>
            </div>
        </div>
   </div>
  )
}
