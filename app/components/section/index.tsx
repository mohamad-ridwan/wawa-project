import { ReactNode } from "react"

type Props = {
    title: string
    children: ReactNode
}

export default function Section({
    title,
    children
}: Props) {
    return (
        <section className="flex flex-col mt-4">
            <div className="flex justify-center flex-col w-full items-center">
                <h2 className="py-6 font-avant-garde font-medium text-2xl">
                    {title}
                </h2>

                <div className="w-[50px] h-[2px] bg-black flex mb-4"></div>
            </div>
            {children}
        </section>
    )
}