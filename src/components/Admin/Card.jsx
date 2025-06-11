import React from 'react'

export default function Card({title,value}) {
  return (
    <div className='rounded-2xl bg-gray-100 p-4 m-2 shadow'>
      <h3 className='border-b border-gray-300' >{title}</h3>
      <h5>{value}</h5>
    </div>
  )
}
