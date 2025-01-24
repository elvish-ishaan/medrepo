import medfile from '@/public/assets/medfile.png'
import track from '@/public/assets/Designer-removebg-preview.png'
import appointmets from '@/public/assets/appointment.png'
import robdoc from '@/public/assets/robotdoc.png'

export interface Features {
    heading: string,
    explain: string,
    image: any,
    icon: any
}
export const mainFeatures: Features[] = [
    {
        heading: 'Centralized Medical Records',
        explain: 'Easily store and access all your medical reports, including lab results, imaging scans, prescriptions, and more. No more searching through piles of paperwork or digital files—everything you need is organized and readily available.',
        image: medfile,
        icon: null
    },
    {
        heading: 'Track Diagnoses and Treatments',
        explain: 'View detailed records of past diagnoses and treatments, helping you stay informed about your health journey. Understand your medical history better and be prepared for future consultations with your healthcare providers.',
        image: track,
        icon: null

    },
    {
        heading: 'Monitor Appointments and Follow-Ups',
        explain: 'Keep track of all your doctor appointments and follow-ups with automated reminders and scheduling. Never miss an important date, and stay on top of your healthcare routine effortlessly.',
        image: appointmets,
        icon: null

    },
    {
        heading: 'Health Trends and Insights',
        explain: 'Gain valuable insights into your health with a comprehensive overview of your medical data. Track trends over time, such as improvements or changes in your health conditions, and use this information to make proactive decisions about your care.',
        image: robdoc,
        icon: null

    }
];
