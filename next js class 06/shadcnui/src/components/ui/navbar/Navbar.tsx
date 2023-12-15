import Image from 'next/image'
import React from 'react'
import { Menu } from 'lucide-react'
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"


const Navbar = () => {
    return (
        <header className='bg-[#000812] text-slate-200 p-4'>
            <nav className='flex justify-between items-center'>
                <ul >
                    <li>
                        <Image src={'https://wsa1.pakwheels.com/assets/new-pw-logo-white-b8b4c00b25fde9cc8f514dc4947c266a.svg'} width={200} height={200} alt='Pakwheels for used and new Cars' />
                    </li>
                </ul>
                <ul className='md:flex gap-2 hidden'>
                    <li>Used Cars</li>
                    <li>New Cars</li>
                    <li>Bikes</li>
                    <li>Auto Store</li>
                    <li>Videos</li>
                    <li>Forum</li>
                    <li>Blog</li>
                </ul>
                <ul className='md:hidden'>
                    <Sheet>
                        <SheetTrigger><Menu /></SheetTrigger>
                        <SheetContent>
                            <ul >
                                <li>Used Cars</li>
                                <li>New Cars</li>
                                <li>Bikes</li>
                                <li>Auto Store</li>
                                <li>Videos</li>
                                <li>Forum</li>
                                <li>Blog</li>
                            </ul>
                        </SheetContent>
                    </Sheet>

                </ul>
            </nav>
        </header>
    )
}

export default Navbar
