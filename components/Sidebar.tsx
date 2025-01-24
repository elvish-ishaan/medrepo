'use client'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Dna, GitGraph, Plug } from 'lucide-react'
import { Separator } from './ui/separator'
import { signOut } from 'next-auth/react'
import SignOutBtn from './nav/SignOutBtn'
import { ModeToggle } from './themes/ToggleMode'

export default function Sidebar() {
    return (
        <div className='flex h-screen bg-background'>
            <div className='flex flex-col items-start justify-between border-r bg-background p-4'>
                <div className='flex flex-col items-start gap-4'>
                    <Link
                        href='#'
                        className='flex items-center gap-2'
                        prefetch={false}
                    >
                        <HeartPulseIcon className='h-6 w-6 text-primary' />
                        <span className='text-lg font-semibold'>MEDREPO</span>
                    </Link>
                    <Separator />
                    <nav className='flex flex-col items-start gap-2'>
                        <Link
                            href='/dashboard'
                            className='flex items-center gap-2 rounded-md px-3 py-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground'
                            prefetch={false}
                        >
                            <HomeIcon className='h-5 w-5' />
                            <span>Dashboard</span>
                        </Link>
                        <Link
                            href='/reports'
                            className='flex items-center gap-2 rounded-md px-3 py-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground'
                            prefetch={false}
                        >
                            <FileBarChartIcon className='h-5 w-5' />
                            <span>Reports</span>
                        </Link>
                        <Link
                            href='/appointments/doctors'
                            className='flex items-center gap-2 rounded-md px-3 py-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground'
                            prefetch={false}
                        >
                            <CalendarIcon className='h-5 w-5' />
                            <span>Appointments</span>
                        </Link>
                        <Link
                            href='/medicines'
                            className='flex items-center gap-2 rounded-md px-3 py-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground'
                            prefetch={false}
                        >
                            <PillIcon className='h-5 w-5' />
                            <span>Medicines</span>
                        </Link>
                        <Link
                            href='/diagnosis'
                            className='flex items-center gap-2 rounded-md px-3 py-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground'
                            prefetch={false}
                        >
                            <Dna className='h-5 w-5' />
                            <span>Diagnosis</span>
                        </Link>
                        <Link
                            href='/connect'
                            className='flex items-center gap-2 rounded-md px-3 py-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground'
                            prefetch={false}
                        >
                            <Plug className='h-5 w-5' />
                            <span>Connect</span>
                        </Link>
                    </nav>
                </div>
                <div className='flex flex-col items-center justify-center gap-2'>
                    <ModeToggle />
                    <Link
                        href='/account'
                        className='flex items-center gap-2 rounded-md px-3 py-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground'
                        prefetch={false}
                    >
                        <SettingsIcon className='h-5 w-5' />
                        <span>Settings</span>
                    </Link>
                    <SignOutBtn />
                </div>
            </div>
        </div>
    )
}

function CalendarIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
        >
            <path d='M8 2v4' />
            <path d='M16 2v4' />
            <rect width='18' height='18' x='3' y='4' rx='2' />
            <path d='M3 10h18' />
        </svg>
    )
}

function ClipboardIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
        >
            <rect width='8' height='4' x='8' y='2' rx='1' ry='1' />
            <path d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2' />
        </svg>
    )
}

function FileBarChartIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
        >
            <path d='M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z' />
            <path d='M14 2v4a2 2 0 0 0 2 2h4' />
            <path d='M8 18v-2' />
            <path d='M12 18v-4' />
            <path d='M16 18v-6' />
        </svg>
    )
}

function HeartPulseIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
        >
            <path d='M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z' />
            <path d='M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27' />
        </svg>
    )
}

function HomeIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
        >
            <path d='m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z' />
            <polyline points='9 22 9 12 15 12 15 22' />
        </svg>
    )
}

function LogOutIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
        >
            <path d='M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4' />
            <polyline points='16 17 21 12 16 7' />
            <line x1='21' x2='9' y1='12' y2='12' />
        </svg>
    )
}

function PillIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
        >
            <path d='m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z' />
            <path d='m8.5 8.5 7 7' />
        </svg>
    )
}

function SettingsIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
        >
            <path d='M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z' />
            <circle cx='12' cy='12' r='3' />
        </svg>
    )
}
