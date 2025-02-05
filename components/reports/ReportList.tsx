import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
} from '@/components/ui/card'
import {
    Table,
    TableHeader,
    TableRow,
    TableHead,
    TableBody,
    TableCell,
} from '@/components/ui/table'
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { ArrowBigRight, Download, GitGraph, Share } from 'lucide-react'
import { getAllReports } from '@/app/actions/allReports'
import { DateFormatter } from '@/lib/dateFormatter'
import Link from 'next/link'
import { docType } from '@prisma/client'
import Sharecom from '../shares/Sharecom'

export default async function ReportList() {
    const domain = process.env.PUBLIC_NEXT_BASE_DOMAIN
    let reports
    try {
        reports = await getAllReports(docType.Report)
    } catch (error) {
        console.log(error)
    }

    return (
        <main className='flex-1 p-4 sm:px-6 sm:py-0 md:gap-8 w-full mt-10'>
            <div className='grid gap-4 w-full'>
                <Card className=' w-full'>
                    <CardHeader>
                        <CardTitle>Medical Reports</CardTitle>
                        <CardDescription>
                            View your medical reports
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Date</TableHead>
                                    <TableHead>Report Id</TableHead>
                                    <TableHead>Summary</TableHead>
                                    <TableHead>
                                        <span className='sr-only'>Actions</span>
                                    </TableHead>
                                </TableRow>
                            </TableHeader>
                            {reports?.allReports &&
                            reports?.allReports?.length > 0 ? (
                                <TableBody>
                                    {reports?.allReports.map((report) => {
                                        return (
                                            <TableRow key={report.id}>
                                                <TableCell>
                                                    {DateFormatter(report.date)}
                                                </TableCell>
                                                <TableCell>
                                                    {report.id}
                                                </TableCell>
                                                <TableCell>
                                                    {report.insights.slice(
                                                        0,
                                                        30
                                                    )}
                                                    ...
                                                </TableCell>
                                                <TableCell>
                                                    <DropdownMenu>
                                                        <DropdownMenuTrigger
                                                            asChild
                                                        >
                                                            <Button
                                                                aria-haspopup='true'
                                                                size='icon'
                                                                className=' bg-transparent hover:bg-slate-900'
                                                            >
                                                                <span className=' dark:text-white text-black tracking-wider'>
                                                                    ...
                                                                </span>
                                                            </Button>
                                                        </DropdownMenuTrigger>
                                                        <DropdownMenuContent align='end'>
                                                            <DropdownMenuItem>
                                                                <Button>
                                                                    Download
                                                                    <Download className=' size-4 ml-2' />
                                                                </Button>
                                                            </DropdownMenuItem>
                                                            <DropdownMenuItem>
                                                                <Sharecom
                                                                    urlLink={`${domain}/reports/${report.id}`}
                                                                />
                                                            </DropdownMenuItem>
                                                            <DropdownMenuItem>
                                                                <Link
                                                                    className=' bg-green-500 text-black rounded-sm flex px-2 py-2 '
                                                                    href={`${domain}/reports/${report.id}`}
                                                                >
                                                                    View Details
                                                                    <GitGraph className=' size-4 ml-2' />
                                                                </Link>
                                                            </DropdownMenuItem>
                                                        </DropdownMenuContent>
                                                    </DropdownMenu>
                                                </TableCell>
                                            </TableRow>
                                        )
                                    })}
                                </TableBody>
                            ) : null}
                        </Table>
                    </CardContent>
                </Card>
            </div>
        </main>
    )
}
