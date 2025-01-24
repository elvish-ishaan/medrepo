import * as React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function page() {
    return (
        <div className='container mx-auto px-4 py-8'>
            <header className='text-center mb-12'>
                <h1 className='text-4xl font-bold mb-4'>About Medrepo</h1>
                <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
                    Empowering individuals to take control of their health
                    journey through innovative technology.
                </p>
            </header>

            <section className='mb-12'>
                <h2 className='text-3xl font-semibold mb-4'>Our Team</h2>
                <p className='text-lg mb-6'>
                    HealthTrack was founded in 2024 by a group of tech
                    enthusiasts who saw the need for a more integrated approach
                    to personal health management. Our diverse team brings
                    together expertise in medicine, data science, and user
                    experience design.
                </p>
                <div className='grid gap-6 md:grid-cols-3'>
                    <Card>
                        <CardHeader>
                            <CardTitle>Ishaan</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>Founder & CTO</p>
                            <p className='text-sm text-muted-foreground mt-2'>
                                With incridble passion about making humankind
                                prosperous with technology.
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Waqas</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>Co-founder</p>
                            <p className='text-sm text-muted-foreground mt-2'>
                                An enthusiast in healthcare, Waqas leads our
                                tech team in building secure and user-friendly
                                solutions.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </section>

            <section className='mb-12'>
                <h2 className='text-3xl font-semibold mb-4'>
                    What We're Doing
                </h2>
                <p className='text-lg mb-6'>
                    Currently, we're focused on refining and expanding our core
                    platform features:
                </p>
                <ul className='list-disc list-inside text-lg space-y-2 mb-6'>
                    <li>
                        Enhancing our AI-driven health insights to provide more
                        personalized recommendations
                    </li>
                    <li>
                        Expanding integrations with major healthcare providers
                        to streamline medical record imports
                    </li>
                    <li>
                        Developing a mobile app to complement our web platform,
                        ensuring health data is always at your fingertips
                    </li>
                    <li>
                        Collaborating with research institutions to contribute
                        to large-scale health studies while maintaining user
                        privacy
                    </li>
                </ul>
            </section>

            <section className='mb-12'>
                <h2 className='text-3xl font-semibold mb-4'>
                    Our Future Plans
                </h2>
                <p className='text-lg mb-6'>
                    As we look to the future, HealthTrack is committed to
                    pushing the boundaries of personal health management:
                </p>
                <div className='space-y-4'>
                    <Card>
                        <CardHeader>
                            <CardTitle>Global Expansion</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>
                                We're working on localizing our platform for
                                international markets, starting with Europe and
                                Asia in the coming year.
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Wearable Integration</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>
                                Our R&D team is developing seamless integrations
                                with popular wearable devices to provide
                                real-time health monitoring and alerts.
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Telemedicine Services</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>
                                We're exploring partnerships with telemedicine
                                providers to offer virtual consultations
                                directly through our platform.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </section>

            <section className='text-center'>
                <h2 className='text-3xl font-semibold mb-4'>
                    Join Us on Our Mission
                </h2>
                <p className='text-lg text-muted-foreground max-w-2xl mx-auto mb-8'>
                    We're always looking for passionate individuals to join our
                    team and help shape the future of personal health
                    management.
                </p>
                <Button className='bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-lg text-lg font-semibold'>
                    View Career Opportunities
                </Button>
            </section>
        </div>
    )
}
