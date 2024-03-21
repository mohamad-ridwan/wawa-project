'use client'

import { TemplateContext } from "@/app/store/template"
import DefaultTopBar from "@/app/templates/default/navbar/DefaultTopBar"
import { useContext } from "react"

export default function TopBar(){
    const templateContext = useContext(TemplateContext)

    return(
        <>
            {templateContext.templateName == 'default' &&
                <DefaultTopBar/>
            }
        </>
    )
}