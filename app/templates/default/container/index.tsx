import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

export default function Container({
    children
}: Props) {
    return (
        <div className="flex justify-center w-screen">
            <div className="w-[960px] max-w-[960px]">
                {children}
            </div>
        </div>
    )
}