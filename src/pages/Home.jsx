import React from 'react'
import { useNavigate} from 'react-router-dom'

export default function Home() {
    const navigate = useNavigate();
    const handleUser = () =>{
        navigate("/user/login")
    }
    const handleDriver = () =>{}
    const handleAdmin = () =>{}
  return (
    <div className='container m-0 p-2 bg-purple-300'>
        <div className="container m-2 bg-purple-400">
            <h1 className='mt-2 fs-2 '>Travel Management System</h1>

            <h2>Continue As</h2>
            <div>
                <button
                onClick={handleUser}>
                    User
                </button>
                <button onClick={handleDriver}>
                    Driver
                </button>
                <button onClick={handleAdmin}>
                    Admin
                </button>
            </div>

        </div>
      
    </div>
  )
}
