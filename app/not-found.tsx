import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function NotFound() {
    return (
        <div className='flex min-h-screen flex-col items-center justify-center bg-gradient-to-b px-4 text-center'>
            <div className='mb-8 animate-float'>
                <svg
                    className='h-48 w-48 text-white'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    aria-hidden='true'
                >
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={0.5}
                        d='M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                    />
                </svg>
            </div>
            <h1 className='mb-4 text-4xl font-bold text-white'>
                Oops! Page Not Found
            </h1>
            <p className='mb-8 text-lg text-gray-600'>
                We couldn't find the page you're looking for. It might have been
                moved or doesn't exist.
            </p>
            <Button asChild>
                <Link href='/'>Go back home</Link>
            </Button>
        </div>
    )
}
