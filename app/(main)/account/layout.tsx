import SettingNav from '@/components/nav/SettingNav'
import React, { ReactNode } from 'react'

const Layout = ({children}:{children: ReactNode}) => {
  return (
    <section>
        <SettingNav/>
        {children}
    </section>
  )
}

export default Layout