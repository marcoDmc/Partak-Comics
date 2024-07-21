
interface BurguerProps {
    open: boolean,
    openClosed: () => boolean
}

export default function BurguerComponent({ openClosed, open }: BurguerProps) {
    return (
        <>
            <div onClick={openClosed} className="z-10 hover:animate-pulse max-lg:w-auto grid cursor-pointer  place-content-center gap-3 h-auto relative lg:hidden  text-white border-beige">
                {open ?
                    (
                        <>
                            <span className="w-full min-w-[50px] scale-110 transition-all rotate-[50deg] translate-y-[20px] bg-grafit h-2 rounded-full"></span>
                            <span className="w-full transition-all rotate-[-50deg] scale-110 min-w-[50px] bg-rose h-2 rounded-full"></span>
                        </>
                    )
                    : (
                        <>
                            <span className="w-full min-w-[50px] transition-all bg-white h-2 rounded-full"></span>
                            <span className="w-full min-w-[50px] transition-all bg-rose h-2 rounded-full"></span>
                            <span className="w-full bg-white h-2 rounded-full transition-all"></span>
                        </>
                    )
                }
            </div>
        </>
    )
}