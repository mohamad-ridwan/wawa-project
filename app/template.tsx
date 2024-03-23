'use client'

import { ReactNode, useContext, useEffect } from "react"
import { TemplateContext } from "./store/template"
import useGetTemplate from "./api/template/useGetTemplate"

type Props = {
    children: ReactNode
}

export default function Template({children}: Props){
    const templateContext = useContext(TemplateContext)

    const {
        data,
        error,
        getTemplate
    } = useGetTemplate()

    function setBody(templateName: string){
        if(templateName == 'theme1'){
            document.body.style.marginTop = '6rem'
        }else{
            document.body.style.marginTop = '0'
        }
    }

    useEffect(()=>{
        getTemplate()
    }, [])

    useEffect(()=>{
        if(data.result){
            templateContext.setTemplateName(data.data[0].templateDir)
    
            setBody(data.data[0].templateDir)
        }else{
            templateContext.setTemplateName('default')
    
            setBody('default')
        }
    }, [data])

    return(
        <>
            {children}
        </>
    )
}