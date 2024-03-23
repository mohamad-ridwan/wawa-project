'use client'

import { ReactNode, useContext, useEffect } from "react"
import { TemplateContext } from "./store/template"

type Props = {
    children: ReactNode
}

export default function Template({children}: Props){
    const templateContext = useContext(TemplateContext)

    function setBody(templateName: string){
        if(templateName == 'theme1'){
            document.body.style.marginTop = '6rem'
        }else{
            document.body.style.marginTop = '0'
        }
    }

    useEffect(()=>{
        templateContext.setTemplateName('theme1')

        setBody('theme1')
    }, [])

    return(
        <>
            {children}
        </>
    )
}