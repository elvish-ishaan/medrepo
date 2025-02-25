import { notFound } from 'next/navigation'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { CalendarIcon, FileTextIcon, MailIcon } from 'lucide-react'
import { format } from 'date-fns'
import { getRepById } from '@/app/actions/allReports'
import Markdownner from '@/components/auxComps/Markdownner'

export default async function Page({ params }: { params: { diaId: string } }) {
    const diagnosis = await getRepById(params.diaId)

    if (!diagnosis || 'success' in diagnosis) {
        return <div className='container mx-auto p-4'>No report found</div>
    }

    return (
        <div className='container mx-auto p-4 flex items-center w-full'>
            <Card className='w-full mx-auto'>
                <CardHeader>
                    <div className='flex items-center justify-between'>
                        <CardTitle className='text-2xl font-bold'>
                            Prescription Analysis
                        </CardTitle>
                        <Avatar>
                            <AvatarImage
                                src={diagnosis.imageUrl}
                                alt='Patient'
                            />
                            <AvatarFallback>RP</AvatarFallback>
                        </Avatar>
                    </div>
                    <CardDescription>
                        Prescription ID: {diagnosis.id}
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className='grid gap-4'>
                        <div className='flex items-center'>
                            <CalendarIcon className='mr-2 h-4 w-4 opacity-70' />
                            <span className='text-sm text-muted-foreground'>
                                {format(new Date(diagnosis.date), 'PPP')}
                            </span>
                        </div>
                        <div className='flex items-center'>
                            <FileTextIcon className='mr-2 h-4 w-4 opacity-70' />
                            <span className='text-sm text-muted-foreground'>
                                {diagnosis.mType}
                            </span>
                        </div>
                        <div className='flex items-center'>
                            <MailIcon className='mr-2 h-4 w-4 opacity-70' />
                            <span className='text-sm text-muted-foreground'>
                                {diagnosis.userEmail}
                            </span>
                        </div>
                    </div>
                    <div className='mt-6 prose prose-sm max-w-none text-sm'>
                        <h1 className='text-3xl font-semibold text-green-600'>
                            Recommended Insights
                        </h1>
                        <Markdownner markdownText={diagnosis.insights} />
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
