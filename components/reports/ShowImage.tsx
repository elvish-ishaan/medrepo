'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Loader2 } from 'lucide-react'
import Link from 'next/link'

// Assume this function is imported from elsewhere in your project
import { getFileByKey } from '@/lib/uploadFile'

export default function ShowImage({ ImgLinkUrl }: { ImgLinkUrl: string }) {
    const [imageUrl, setImageUrl] = useState<string | null>(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchImage = async () => {
            setIsLoading(true)
            setError(null)
            try {
                const fetchedUrl = await getFileByKey(ImgLinkUrl)
                setImageUrl(fetchedUrl)
            } catch (err) {
                setError('Failed to load image')
                console.error('Error fetching image:', err)
            } finally {
                setIsLoading(false)
            }
        }

        fetchImage()
    }, [ImgLinkUrl])

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant='outline'>View Image</Button>
            </DialogTrigger>
            <DialogContent className='sm:max-w-[800px] h-[600px] p-6 overflow-hidden'>
                {isLoading ? (
                    <div className='flex justify-center items-center h-full'>
                        <Loader2 className='h-8 w-8 animate-spin text-white' />
                    </div>
                ) : error ? (
                    <div className='text-center text-red-500'>{error}</div>
                ) : imageUrl ? (
                    <div className='relative h-full w-full p-4 overflow-hidden'>
                        <h1 className='mb-4'>
                            Image Valid For 30 mins and it may take some seconds
                            to load.
                        </h1>
                        <Link
                            href={imageUrl}
                            target='_blank'
                            className='underline text-blue-500 mb-4'
                        >
                            Go to Image
                        </Link>
                        <div className='flex justify-center items-center h-full'>
                            <Image
                                src={imageUrl}
                                height={600}
                                width={600}
                                alt='Retrieved image'
                                className='object-contain'
                                onLoadingComplete={() => setIsLoading(false)}
                            />
                        </div>
                    </div>
                ) : null}
            </DialogContent>
        </Dialog>
    )
}
