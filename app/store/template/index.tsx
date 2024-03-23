'use client'

import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";
import { TemplateNameT } from "@/app/types/template";

type ContextT = {
    templateName: string
    setTemplateName: Dispatch<SetStateAction<TemplateNameT>>
}

export const TemplateContext = createContext<ContextT>({} as ContextT)

type Props = {
    children: ReactNode
}

export default function TemplateContextProvider({children}: Props){
    const [templateName, setTemplateName] = useState('' as TemplateNameT)

    return (
        <TemplateContext.Provider value={{
            templateName: templateName,
            setTemplateName
        }}>
            {children}
        </TemplateContext.Provider>
    )
}