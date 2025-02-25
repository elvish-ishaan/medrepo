'use client'
import { signIn } from 'next-auth/react'
import { useSearchParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import googlelogo from '@/app/assets/googleLogo.png'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Eclipse, LoaderCircle, PersonStanding } from 'lucide-react'
import Image from 'next/image'

export default function LoginPage() {
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [formValues, setFormValues] = useState({
        email: '',
        password: '',
    })
    const [error, setError] = useState<string | null>(null)

    const [callbackUrl, setCallbackUrl] = useState('/')

    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search)
        setCallbackUrl(searchParams.get('callbackUrl') || '/')
    }, [])

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            setLoading(true)
            setError(null)

            const res = await signIn('credentials', {
                redirect: false,
                email: formValues.email,
                password: formValues.password,
            })

            setLoading(false)

            if (res?.ok) {
                router.push('/dashboard') // Redirect user to dashboard
            } else {
                setError(res?.error || 'Invalid credentials')
            }
        } catch (error: any) {
            setLoading(false)
            setError(error.message || 'An error occurred during sign-in')
        }
    }

    useEffect(() => {
        if (!loading) {
            router.prefetch(callbackUrl)
        }
    }, [loading, router, callbackUrl])

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setFormValues({ ...formValues, [name]: value })
    }

    const handleGoogleSignIn = () => {
        signIn('google', { callbackUrl })
    }

    return (
        <div className='flex items-center justify-center min-h-screen'>
            <Card className='w-[350px]'>
                <CardHeader className='space-y-1'>
                    <CardTitle className='text-2xl font-bold text-center'>
                        Sign in
                    </CardTitle>
                    <CardDescription className='text-center'>
                        Enter your email and password to sign in
                    </CardDescription>
                </CardHeader>
                <CardContent className='grid gap-4'>
                    <form onSubmit={onSubmit}>
                        <div className='grid gap-2'>
                            <Label htmlFor='email'>Email</Label>
                            <Input
                                id='email'
                                name='email'
                                placeholder='name@example.com'
                                type='email'
                                autoCapitalize='none'
                                autoComplete='email'
                                autoCorrect='off'
                                disabled={loading}
                                value={formValues.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className='grid gap-2 mt-4'>
                            <Label htmlFor='password'>Password</Label>
                            <Input
                                id='password'
                                name='password'
                                placeholder='password123'
                                type='password'
                                autoCapitalize='none'
                                autoComplete='current-password'
                                disabled={loading}
                                value={formValues.password}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        {error && (
                            <Alert variant='destructive' className='mt-4'>
                                <AlertTitle>Error</AlertTitle>
                                <AlertDescription>{error}</AlertDescription>
                            </Alert>
                        )}
                        <Button
                            className='w-full mt-6'
                            type='submit'
                            disabled={loading}
                        >
                            {loading && (
                                <LoaderCircle className='mr-2 h-4 w-4 animate-spin' />
                            )}
                            Sign In with Email
                        </Button>
                    </form>
                    <div className='relative'>
                        <div className='absolute inset-0 flex items-center'>
                            <span className='w-full border-t' />
                        </div>
                        <div className='relative flex justify-center text-xs uppercase'>
                            <span className='bg-background px-2 text-muted-foreground'>
                                Or continue with
                            </span>
                        </div>
                    </div>
                    <Button
                        className=' bg-muted'
                        variant='outline'
                        type='button'
                        disabled={loading}
                        onClick={handleGoogleSignIn}
                    >
                        {loading ? (
                            <LoaderCircle className='mr-2 h-4 w-4 animate-spin' />
                        ) : (
                            <Image
                                src={googlelogo}
                                alt='google logo'
                                height={14}
                                width={14}
                                className='mr-2'
                            />
                        )}{' '}
                        Google
                    </Button>
                </CardContent>
                <CardFooter>
                    <p className='px-8 text-center text-sm text-muted-foreground'>
                        By clicking continue, you agree to our{' '}
                        <a
                            href='/terms'
                            className='underline underline-offset-4 hover:text-primary'
                        >
                            Terms of Service
                        </a>{' '}
                        and{' '}
                        <a
                            href='/privacy'
                            className='underline underline-offset-4 hover:text-primary'
                        >
                            Privacy Policy
                        </a>
                        .
                    </p>
                </CardFooter>
            </Card>
        </div>
    )
}
