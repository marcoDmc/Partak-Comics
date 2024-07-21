import Image from "next/image"

interface IconProps {
    Icon: any,
    alt: string
}

export default function IconComponent({ Icon, alt }: IconProps) {
    return (<>
        <Image src={Icon} width={0} height={120} alt={alt}  />
    </>)
}