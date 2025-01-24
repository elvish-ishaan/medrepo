import AppointSide from '@/components/auxComps/AppointSide'
import Sidebar from '@/components/Sidebar'
import ComingSoon from '@/components/reveals/CommingSoon'

import React, { ReactNode, useEffect } from 'react'

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <section className='flex flex-col w-full'>
            <ComingSoon />
            {/* <AppointSide/>
      {children} */}
        </section>
    )
}

export default Layout
