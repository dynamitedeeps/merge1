
import React from 'react'
import Header from '../Header'
import Sidepanal from '../Sidepanal'
import { Outlet } from "react-router-dom";


const Layout = () => {
  return (
    <div>
        <Header />
        <div className='flex mt-[143px] mob:mt-[108px] min-h-vh-143'>
            <Sidepanal />
            <div className='w-[80%] mob:w-full ml-auto relative'>
                {/* {children} */}
                <Outlet />
            </div>
        </div>
    </div>
  )
}

export default Layout