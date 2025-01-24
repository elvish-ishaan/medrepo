import { ReactNode } from 'react'
import Sidebar from '@/components/Sidebar'
import NavBar from '@/components/nav/NavBar'

interface SidebarLayoutProps {
    children: ReactNode
}

export default function Layout({ children }: SidebarLayoutProps) {
    return (
        <div className=''>
            <NavBar />
            {children}
        </div>
    )
}
