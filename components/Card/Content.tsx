import { ReactNode } from "react"

interface ContentProps {
    children: ReactNode,
    name: string
}

export default function ContentComponent({ children, name }: ContentProps) {
    return (<>
        <div className="border-[.1rem] h-full min-h-[350px]
         border-beige grid place-items-center grid-cols-1 place-content-between 
         gap-10 overflow-hidden w-full max-w-[330px]
         rounded-2xl p-1 text-lg font-normal cursor-pointer hover:scale-105 transition-all hover:border-[4px] hover:border-rose">
            <span className="text-xl pl-2 capitalize   text-beige italic
             items-center justify-between w-full col-start-1 col-span-1 row-start-1">
                <p>{name}</p>
            </span>
            {children}
            <div className="w-full text-beige text-lg
            p-2 flex items-center justify-between gap-10">
                <div className="flex items-center gap-1 w-full">
                    <span className="w-full max-w-[80px] text-center rounded-full p-1 border-[1px] h-full">svg</span><span className="w-full  max-w-[80px] text-center rounded-full p-1 border-[1px] border-beige h-full">svg</span>
                </div>
                <div className="w-full p-[6px] text-base uppercase max-w-[80px] text-center rounded-full border-[1px] h-full">pc / 01</div>
            </div>
        </div>
    </>)
}