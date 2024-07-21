interface InputProps {

}
export default function InputComponent() {
    return (
        <>
            <input type="text" placeholder="search" className="
            p-1 pl-6 w-full max-w-[400px] rounded-full bg-grafit mr-10 text-white text-lg font-semibold
            border-4 border-white outline-none uppercase
            max-md:col-start-1 col-span-4
            max-md:mx-auto max-md:row-start-1 max-md:row-span-1 max-sm:col-start-1 max-sm:col-span-3 max-sm:mx-0 max-sm:max-w-full"/>
        </>
    )
}