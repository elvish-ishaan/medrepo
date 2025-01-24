'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useToast } from '@/hooks/use-toast'

export default function ComingSoon() {
    const { toast } = useToast()
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        toast({
            title: 'Thanks for feedback',
        })
    }

    return (
        <div className='flex min-h-screen flex-col items-center justify-center bg-gradient-to-br px-4 text-center text-white'>
            <div className='mb-8'>
                <svg
                    className='h-48 w-48'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='1'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                >
                    <circle cx='12' cy='12' r='10' />
                    <line x1='12' y1='16' x2='12' y2='12' />
                    <line x1='12' y1='8' x2='12.01' y2='8' />
                </svg>
            </div>
            <h1 className='mb-4 text-4xl font-bold'>Coming Soon</h1>
            <p className='mb-8 max-w-md text-xl'>
                We're working hard to bring you something amazing. Stay tuned
                for our big reveal!
            </p>
            <form
                onSubmit={handleSubmit}
                className='mb-8 flex w-full max-w-md flex-col gap-4 sm:flex-row'
            >
                <Input
                    type='email'
                    placeholder='Enter your email'
                    required
                    className='flex-grow bg-white bg-opacity-20 text-white placeholder-gray-300'
                />
                <Button type='submit' className='bg-white hover:bg-gray-100'>
                    Notify Me
                </Button>
            </form>
            <div className='mt-8 text-sm opacity-75'>
                &copy; {new Date().getFullYear()} Medrepo. All rights reserved.
            </div>
        </div>
    )
}
