
import Navbar from '@/components/nav-bar'
import { auth } from '@clerk/nextjs'
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

    const { userId } = auth();

    return (
        <div className=" h-full bg-[#111827] relative ">
            <Navbar userId={userId} />
            {children}
        </div>
    )
}
export default DashboardLayout;