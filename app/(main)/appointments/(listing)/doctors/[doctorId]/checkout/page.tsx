import { Button } from '@/components/ui/button'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Calendar, Clock, MapPin, Star, ThumbsUp } from 'lucide-react'
import Link from 'next/link'
import CheckoutCard from '@/components/payments/CheckoutCard'

export default function page() {
    return (
        <div className='container mx-auto p-4 space-y-8'>
            <div className='grid gap-6 md:grid-cols-3'>
                <Card className='md:col-span-2'>
                    <CardHeader>
                        <div className='flex items-center space-x-4'>
                            <Avatar className='w-20 h-20'>
                                <AvatarImage
                                    src='/placeholder.svg?height=80&width=80'
                                    alt='Dr. Jane Smith'
                                />
                                <AvatarFallback>JS</AvatarFallback>
                            </Avatar>
                            <div>
                                <CardTitle className='text-2xl'>
                                    Dr. Jane Smith
                                </CardTitle>
                                <CardDescription>
                                    Cardiologist | 15 years experience
                                </CardDescription>
                                <div className='flex items-center mt-2'>
                                    <Star className='w-4 h-4 fill-yellow-400 text-yellow-400 mr-1' />
                                    <span className='font-medium'>4.8</span>
                                    <span className='text-muted-foreground ml-1'>
                                        (256 reviews)
                                    </span>
                                </div>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <p className='text-muted-foreground mb-4'>
                            Dr. Jane Smith is a board-certified cardiologist
                            with over 15 years of experience in treating heart
                            conditions. She is known for her patient-centered
                            approach and expertise in preventive cardiology.
                        </p>
                        <div className='grid gap-2'>
                            <div className='flex items-center'>
                                <MapPin className='w-4 h-4 mr-2 text-muted-foreground' />
                                <span>
                                    123 Medical Center, New York, NY 10001
                                </span>
                            </div>
                            <div className='flex items-center'>
                                <Clock className='w-4 h-4 mr-2 text-muted-foreground' />
                                <span>Mon-Fri: 9:00 AM - 5:00 PM</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                {/* checkout cared
        <CheckoutCard/> */}
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Specialties</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className='flex flex-wrap gap-2'>
                        <Badge>Cardiology</Badge>
                        <Badge>Interventional Cardiology</Badge>
                        <Badge>Echocardiography</Badge>
                        <Badge>Preventive Cardiology</Badge>
                        <Badge>Heart Failure Management</Badge>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Education & Qualifications</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className='list-disc list-inside space-y-2'>
                        <li>MD in Cardiology, Harvard Medical School</li>
                        <li>
                            Residency in Internal Medicine, Massachusetts
                            General Hospital
                        </li>
                        <li>Fellowship in Cardiology, Cleveland Clinic</li>
                        <li>Board Certified in Cardiovascular Disease</li>
                        <li>
                            Fellow of the American College of Cardiology (FACC)
                        </li>
                    </ul>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Patient Reviews</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className='space-y-4'>
                        {[
                            {
                                name: 'John D.',
                                rating: 5,
                                comment:
                                    'Dr. Smith is an excellent cardiologist. She took the time to explain everything thoroughly and made me feel at ease.',
                            },
                            {
                                name: 'Sarah M.',
                                rating: 4,
                                comment:
                                    'Very knowledgeable and professional. The wait time was a bit long, but the care was worth it.',
                            },
                            {
                                name: 'Robert L.',
                                rating: 5,
                                comment:
                                    "Dr. Smith's expertise in preventive cardiology has made a significant difference in my heart health. Highly recommended!",
                            },
                        ].map((review, index) => (
                            <div
                                key={index}
                                className='border-b last:border-b-0 pb-4 last:pb-0'
                            >
                                <div className='flex items-center mb-2'>
                                    <span className='font-medium mr-2'>
                                        {review.name}
                                    </span>
                                    <div className='flex'>
                                        {[...Array(review.rating)].map(
                                            (_, i) => (
                                                <Star
                                                    key={i}
                                                    className='w-4 h-4 fill-yellow-400 text-yellow-400'
                                                />
                                            )
                                        )}
                                    </div>
                                </div>
                                <p className='text-muted-foreground'>
                                    {review.comment}
                                </p>
                            </div>
                        ))}
                    </div>
                </CardContent>
                <CardFooter>
                    <Link href='#' className='text-primary hover:underline'>
                        See all 256 reviews
                    </Link>
                </CardFooter>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Publications & Research</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className='list-disc list-inside space-y-2'>
                        <li>
                            "Advances in Preventive Cardiology" - New England
                            Journal of Medicine, 2022
                        </li>
                        <li>
                            "Long-term Outcomes of Interventional Cardiology
                            Procedures" - Journal of the American Heart
                            Association, 2021
                        </li>
                        <li>
                            "The Role of Echocardiography in Heart Failure
                            Management" - Circulation, 2020
                        </li>
                    </ul>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Awards & Recognition</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className='list-disc list-inside space-y-2'>
                        <li>Top Cardiologist, New York Magazine, 2022</li>
                        <li>Patient's Choice Award, 2021</li>
                        <li>
                            Research Excellence Award, American Heart
                            Association, 2020
                        </li>
                    </ul>
                </CardContent>
            </Card>

            <div className='flex justify-center'>
                <Button size='lg' className='w-full md:w-auto'>
                    <ThumbsUp className='w-4 h-4 mr-2' />
                    Book an Appointment with Dr. Jane Smith
                </Button>
            </div>
        </div>
    )
}
