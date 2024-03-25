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

    // function setHead():void{
    //     let linkGoogleAPI = document.createElement('link')
    //     linkGoogleAPI.href = 'https://fonts.googleapis.com'
    //     linkGoogleAPI.rel = 'preconnect'

    //     let linkGSStatic = document.createElement('link')
    //     linkGSStatic.href = 'https://fonts.gstatic.com'
    //     linkGSStatic.rel = 'preconnect'

    //     let linkFont = document.createElement('link')
    //     linkFont.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap'
    //     linkFont.rel = 'stylesheet'

    //     document.head.appendChild(linkGoogleAPI)
    //     document.head.appendChild(linkGSStatic)
    //     document.head.appendChild(linkFont)
    // }

    useEffect(()=>{
        if(data.result){
            // templateContext.setTemplateName(data.data[0].templateDir)
            templateContext.setTemplateName('theme1')
    
            // setBody(data.data[0].templateDir)
            setBody('theme1')
        }
        // else{
        //     templateContext.setTemplateName('default')
    
        //     setBody('default')
        // }
    }, [data])

    return(
        <>
            {children}
        </>
    )
}