import { ReactNode } from "react"

interface ContentProps {
    children: ReactNode
}

export default function ContentComponent({ children }: ContentProps) {
    return (<>
        <header className="h-auto w-full flex items-center justify-between">{children}</header>
    </>)
}