import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog'
import Image from 'next/image'
import { getFileByKey } from '@/app/actions/fileOps'

const ActUplaod = async ({ imgKey }: { imgKey: string }) => {
    if (!imgKey) {
        console.log('key not found')
    }
    let imageUrl
    try {
        imageUrl = await getFileByKey(imgKey)
    } catch (error) {
        console.log(error, 'image not found')
    }
    return (
        <Dialog>
            <DialogTrigger>Open</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Actual Uploaded Document</DialogTitle>
                    <DialogDescription>
                        <Image
                            src={imageUrl || ''}
                            width={600}
                            height={600}
                            alt='patient Uploaded Image'
                        />
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}

export default ActUplaod
