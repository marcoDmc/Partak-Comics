interface ButtonComponent {
    bg: string,
    name: string,
    color: string,
    border: string,
    hoverText: string,
    hoverBg: string, hoverBorder: string
}
export default function ButtonComponent({ bg, name, color, border, hoverBg, hoverBorder, hoverText }: ButtonComponent) {
    const style = bg + " " + color + " " + border + " " + hoverBg + " " + hoverBorder + " " + hoverText + " "
    return (
        <><button className={style +
            "border-4 max-sm:col-start-1 max-sm:max-w-full max-sm:col-span-3 flex gap-2 uppercase w-full max-w-[200px] p-1 rounded-3xl items-center justify-center font-semibold tracking-widest max-lg:hover:bg-white  hover:animate-pulse transition-all cursor-pointer text-lg"}>{name}</button></>
    )
}