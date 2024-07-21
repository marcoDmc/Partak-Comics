import Image from "next/image"

interface LogoProps {
    icon: any
}

export default function LogoComponent({ icon }: LogoProps) {
    return (<>
        <Image src={icon} alt="logo" width={0} height={0} className="w-[100px]" />
    </>)
}