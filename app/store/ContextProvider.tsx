'use client'

import { ReactNode } from "react";

import TemplateContextProvider from "./template";
type Props = {
    children: ReactNode
}

export default function ContextProvider({ children }: Props) {
    return (
        <TemplateContextProvider>
            {children}
        </TemplateContextProvider>
    )
}