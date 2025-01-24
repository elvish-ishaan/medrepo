'use client'
import { usePathname } from 'next/navigation'
import React from 'react'

const Pather = () => {
    const pathname = usePathname()
  return (
    <div className=' py-5 px-3 text-xl ml-5 mt-5'>
        {pathname}
    </div>
  )
}

export default Pather