import { Building, Cable, Home, Nut, WholeWord } from 'lucide-react'
import Link from 'next/link'
import React, { ReactNode } from 'react'

interface Link {
    title: string
    path: string
    icon: ReactNode
}

const MenuLinksBar = () => {
    const navLinks: Link[] = [
        {
            title: 'Home',
            path: '/',
            icon: <Home />,
        },
        {
            title: 'About',
            path: '/about-us',
            icon: <Building />,
        },
        {
            title: 'Support',
            path: '/support',
            icon: <Cable />,
        },
    ]
    return (
        <div className=' flex gap-5'>
            {navLinks.map((link: Link) => (
                <Link
                    className=' dark:text-white dark:hover:text-slate-200 hover:scale-110 transition '
                    href={link.path}
                >
                    {link.icon}
                </Link>
            ))}
        </div>
    )
}

export default MenuLinksBar
