import { HeroChart } from '@/components/charts/HeroChart'
import Footer from '@/components/Footer'
import Highlighted from '@/components/Highlighted'
import NavBar from '@/components/nav/NavBar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { Features, mainFeatures } from '@/constants/mainFeatures'
import { Mail, Map, MapPin, TrainTrackIcon } from 'lucide-react'
import Image from 'next/image'
import { features } from 'process'

export default function Home() {
    return (
        <main>
            <NavBar />
            <section className=' px-5 flex pt-16 justify-around h-[80vh] mt-10'>
                <div className=' flex flex-col items-center'>
                    <p className=' dark:text-zinc-400 dark'>
                        Make Move For Better life.
                    </p>
                    <h1 className=' text-8xl font-semibold tracking-wide'>
                        All In One Solution
                    </h1>
                    <h2 className=' text-7xl font-semibold tracking-wide'>
                        For Your <Highlighted text='HEALTH' size='text-6xl' />
                    </h2>
                    <p className=' dark:text-slate-300 text-center mt-5 w-1/2'>
                        MedRepo is your one-stop solution for managing your
                        health journey with ease and efficiency.
                    </p>
                    <div className=' flex gap-8 mt-12 items-center'>
                        <div className=' flex justify-center items-center'>
                            <div className=' h-10 w-10 bg-rose-600 blur-2xl relative left-16 -z-10'></div>
                            <Button className=' hover:scale-105 transition'>
                                Get Started
                            </Button>
                        </div>
                        <Button variant={'outline'}>Learn More</Button>
                    </div>
                </div>
                <div className=' w-1/3'>
                    <HeroChart />
                </div>
            </section>

            <section className=' px-6  flex flex-col mx-5'>
                <div className=' flex justify-center'>
                    <h1 className=' text-center text-4xl font-bold mt-5'>
                        What We Promise
                    </h1>
                </div>
                {mainFeatures.map((feat: Features) => {
                    return (
                        <div
                            className=' border-green-600 border-r-4 my-10 flex justify-between items-center 
                hover:scale-105 transition-all hover:shadow-sm hover:shadow-slate-700'
                        >
                            <div className=' px-20'>
                                <h1 className=' text-3xl font-bold border-l-4 border-green-600 px-2 flex items-center'>
                                    {feat.heading}
                                </h1>
                                <p className=' p-3 text-center dark:text-zinc-400'>
                                    {feat.explain}
                                </p>
                            </div>
                            <div className=' px-5'>
                                <Image
                                    src={feat?.image}
                                    height={500}
                                    width={500}
                                    alt='feat'
                                />
                            </div>
                        </div>
                    )
                })}
            </section>
            <Separator />
            <Footer />
        </main>
    )
}
