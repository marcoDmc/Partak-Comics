import { ReactNode } from "react"

interface ContentProps {
    children: ReactNode
}
export default function ContentComponent({ children }: ContentProps) {
    return (
        <><div className="
         flex items-center justify-start gap-5 transition-all
          h-auto w-full
          max-md:grid max-md:transition-all 
          max-md:grid-cols-2 max-md:grid-rows-2
          max-sm:grid-cols-3 max-sm:grid-rows-4 max-sm:place-content-center">{children}</div></>
    )
}