'use client'
import { ReactNode, useEffect, useState } from "react"
import BurguerComponent from "./Burguer"

interface ListProps {
    children: ReactNode
}

export default function ListComponent({ children }: ListProps) {
    const [open, setOpen] = useState(false)
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 786);
            if (!isMobile) setOpen(false)
        };

        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);



    const openClosed = () => {
        setOpen(prev => !prev)
        return open
    }
    return (<>
        {open && (
            <ul className="flex w-full h-auto overflow-hidden
                    max-lg:absolute 
                    max-lg:top-0
                    items-center justify-end
                    max-lg:bg-white max-lg:max-w-[400px]
                     max-lg:grid max-lg:h-screen max-lg:right-0 
                     max-lg:place-content-center gap-5">
                {children}
            </ul>
        )}
        {
            !open && (
                <ul className="flex w-full 
            h-auto 
            items-center justify-center gap-1
            overflow-hidden
             max-lg:hidden
             max-w-[700px]
             ">
                    {children}
                </ul>
            )
        }
        <BurguerComponent openClosed={openClosed} open={open} />
    </>)
}