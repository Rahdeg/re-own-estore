
import Navbar from '@/components/nav-bar'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Rahdeg | Dashboard',
    description: 'AI Dashboard',
}

const DashboardLayout = async ({
    children
}: {
    children: React.ReactNode
}) => {


    return (
        <div className=" h-full bg-[#111827]">
            <Navbar />
            {children}
        </div>
    )
}
export default DashboardLayout;