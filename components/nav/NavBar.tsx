import React from 'react'
import AuthNav from './AuthNav'
import MenuLinksBar from './MenuLinksBar'

const NavBar = () => {
  return (
    <nav className=' py-6 px-3 flex justify-between items-center'>
        <div className=' font-bold text-xl'>MEDREPO</div>
        <MenuLinksBar/>
        <AuthNav/>
    </nav>
  )
}

export default NavBar