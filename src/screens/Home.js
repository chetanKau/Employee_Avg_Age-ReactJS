import React from 'react'
import Employees from '../components/Employees'
import Teams from '../components/Teams'

const Home = () => {

  return (
    <div>
      <div className='flex flex-col '>

        <div className='flex justify-center bg-slate-500 h-20 items-center '>
          Home
        </div>

        <div className='flex flex-row w-full h-screen  bg-red-100'>
          <div className='flex flex-row w-full justify-around'>
            <Employees />
            <Teams />
          </div>
        </div>

      </div>




    </div>
  )
}

export default Home
