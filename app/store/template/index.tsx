'use client'

import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";

type ContextT = {
    templateName: string
    setTemplateName: Dispatch<SetStateAction<string>>
}

export const TemplateContext = createContext<ContextT>({} as ContextT)

type Props = {
    children: ReactNode
}

export default function TemplateContextProvider({children}: Props){
    const [templateName, setTemplateName] = useState<string>('')

    return (
        <TemplateContext.Provider value={{
            templateName: templateName,
            setTemplateName
        }}>
            {children}
        </TemplateContext.Provider>
    )
}