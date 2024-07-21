import { ElementType } from "react"

interface ItemProps {
    name: string,
    Icon?: ElementType,
    IconSize?: number,
    IconColor?: string
}

export default function ItemComponent({ name, Icon, IconColor, IconSize }: ItemProps) {
    return (<>
        {
            Icon && (


                <li className="border-4
                border-grafit flex gap-2
                w-full max-w-[200px] p-3 rounded-3xl items-center justify-center font-semibold uppercase
                tracking-widest text-grafit  bg-white max-lg:hover:bg-white hover:bg-rose hover:animate-pulse transition-all cursor-pointer
                hover:border-rose hover:text-grafit text-lg">{name}{Icon && <Icon size={IconSize} color={IconColor} />}
                </li>
            )
        }
        {!Icon && (

            <li className="border-4
            border-white max-lg:border-grafit flex gap-2
            w-full max-w-[200px] p-3 rounded-3xl items-center justify-center font-semibold uppercase
            tracking-widest max-lg:text-grafit text-white hover:animate-pulse transition-all cursor-pointer
            hover:border-rose hover:text-rose max-lg:hover:text-grafit text-lg">{name}
            </li>
        )
        }
    </>)
}