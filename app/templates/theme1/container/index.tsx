import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

export default function ContainerTheme1({children}: Props){
    return (
        <div className="flex justify-center w-screen">
            <div className="w-[80rem] max-w-7xl px-8">
                {children}
            </div>
        </div>
    )
}