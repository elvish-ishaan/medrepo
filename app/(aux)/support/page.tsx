import * as React from 'react'
import { Mail } from 'lucide-react'

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
    CardFooter,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'

export default function page() {
    return (
        <div className='container mx-auto px-4 py-8'>
            <h1 className='text-4xl font-bold text-center mb-2'>
                Support Center
            </h1>
            <p className='text-center text-muted-foreground mb-8'>
                We're here to help. Check out our FAQ or contact us directly.
            </p>

            <div className='grid gap-8 md:grid-cols-2'>
                <Card>
                    <CardHeader>
                        <CardTitle>Contact Us</CardTitle>
                        <CardDescription>
                            Fill out the form below and we'll get back to you as
                            soon as possible.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form>
                            <div className='grid w-full items-center gap-4'>
                                <div className='flex flex-col space-y-1.5'>
                                    <Label htmlFor='name'>Name</Label>
                                    <Input
                                        id='name'
                                        placeholder='Enter your name'
                                    />
                                </div>
                                <div className='flex flex-col space-y-1.5'>
                                    <Label htmlFor='email'>Email</Label>
                                    <Input
                                        id='email'
                                        placeholder='Enter your email'
                                        type='email'
                                    />
                                </div>
                                <div className='flex flex-col space-y-1.5'>
                                    <Label htmlFor='issue'>Issue</Label>
                                    <Select>
                                        <SelectTrigger id='issue'>
                                            <SelectValue placeholder='Select an issue' />
                                        </SelectTrigger>
                                        <SelectContent position='popper'>
                                            <SelectItem value='technical'>
                                                Technical Support
                                            </SelectItem>
                                            <SelectItem value='billing'>
                                                Billing Inquiry
                                            </SelectItem>
                                            <SelectItem value='general'>
                                                General Question
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className='flex flex-col space-y-1.5'>
                                    <Label htmlFor='message'>Message</Label>
                                    <Textarea
                                        id='message'
                                        placeholder='Describe your issue or question'
                                    />
                                </div>
                            </div>
                        </form>
                    </CardContent>
                    <CardFooter className='flex justify-between'>
                        <Button variant='outline'>Cancel</Button>
                        <Button>Submit</Button>
                    </CardFooter>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Frequently Asked Questions</CardTitle>
                        <CardDescription>
                            Find quick answers to common questions
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Accordion type='single' collapsible className='w-full'>
                            <AccordionItem value='item-1'>
                                <AccordionTrigger>
                                    How do I reset my password?
                                </AccordionTrigger>
                                <AccordionContent>
                                    To reset your password, click on the "Forgot
                                    Password" link on the login page and follow
                                    the instructions sent to your email.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value='item-2'>
                                <AccordionTrigger>
                                    What payment methods do you accept?
                                </AccordionTrigger>
                                <AccordionContent>
                                    We accept all major credit cards, PayPal,
                                    and bank transfers for business accounts.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value='item-3'>
                                <AccordionTrigger>
                                    How can I track my booking?
                                </AccordionTrigger>
                                <AccordionContent>
                                    Once your appointment is approved, you'll
                                    receive a booking number via email or phone.
                                    You can use this number on our website to
                                    track your booking.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </CardContent>
                </Card>
            </div>

            <div className='mt-12 text-center'>
                <h2 className='text-2xl font-semibold mb-4'>
                    Additional Support Options
                </h2>
                <div className='flex justify-center'>
                    <div className='flex items-center'>
                        <Mail className='mr-2 h-4 w-4' />
                        <span>Email: support@example.com</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
