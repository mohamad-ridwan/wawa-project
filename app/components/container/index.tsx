'use client'

import { ReactNode, useContext } from "react"
import { TemplateContext } from "@/app/store/template"
import DefaultContainer from "@/app/templates/default/container"
import ContainerTheme1 from "@/app/templates/theme1/container"

type Props = {
    children: ReactNode
}

export default function Container({
    children
}: Props) {
    const templateContext = useContext(TemplateContext)

    return (
        <>
            {templateContext.templateName === 'default' &&
                <DefaultContainer>
                    {children}
                </DefaultContainer>
            }
            {templateContext.templateName === 'theme1' &&
                <ContainerTheme1>
                    {children}
                </ContainerTheme1>
            }
        </>
    )
}