import React from 'react'
import UserNav from './userNav'
import UserTripData from './UserTripData'

export default function UserDashboard() {
  return (
    <div className='flex'>
      <UserNav/>
      <UserTripData/>
    </div>
  )
}
