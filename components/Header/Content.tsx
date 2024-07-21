import { ReactNode } from "react"

interface ContentProps {
    children: ReactNode
}

export default function ContentComponent({ children }: ContentProps) {
    return (<>
        <header className="appearance-none h-auto w-full border-beige flex items-center justify-between">{children}</header>
    </>)
}