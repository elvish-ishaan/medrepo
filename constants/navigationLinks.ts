import { HomeIcon , Building, LucideProps} from 'lucide-react'
import { ReactNode } from 'react'


interface link {
    title: string,
    path: string,
    icon: ReactNode,
}
export const sidebarLinks: link[] = [
    {
        title: 'Dashboard',
        path: '/dashboard',
        icon: null
    }
]