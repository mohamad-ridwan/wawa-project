import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

export default function Container({
    children
}: Props) {
    return (
        <div className="wrap-container">
            <div className="container">
                {children}
            </div>
        </div>
    )
}