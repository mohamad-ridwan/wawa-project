'use client'

import { useContext, useEffect, useState } from "react";
import NavbarDefault from "@/app/templates/default/navbar";
import NavbarTheme1 from "@/app/templates/theme1/navbar";
import { TemplateContext } from "@/app/store/template";

type ListMenu = {
    path: string
    name: string
}

export default function Navbar() {
    const [open, setOpen] = useState<boolean>(false)
    const templateContext = useContext(TemplateContext)

    const [menu, setMenu] = useState<ListMenu[]>([])

    function handleOpen(): void {
        setOpen(!open)
    }

    useEffect(()=>{
        if(templateContext.templateName === 'default'){
            setMenu([
                {
                    path: '/',
                    name: 'Home'
                },
                {
                    path: '/categories/cosmetics',
                    name: 'Cosmetics'
                },
                {
                    path: '/categories/skincare',
                    name: 'Skincare'
                },
                {
                    path: '/categories/soulmet',
                    name: 'Soulmet'
                },
            ])
        }else if(templateContext.templateName === 'theme1'){
            setMenu([
                {
                    path: '/products',
                    name: 'All'
                },
                {
                    path: '/categories/cosmetics',
                    name: 'Cosmetics'
                },
                {
                    path: '/categories/skincare',
                    name: 'Skincare'
                },
                {
                    path: '/categories/soulmet',
                    name: 'Soulmet'
                },
            ])
        }
    }, [templateContext])
    
    return (
        <>
            {templateContext.templateName == 'default' &&
                <NavbarDefault
                    handleOpen={handleOpen}
                    listMenu={menu}
                    open={open}
                />
            }
            {templateContext.templateName == 'theme1' &&
                <NavbarTheme1
                    handleOpen={handleOpen}
                    listMenu={menu}
                    open={open}
                />
            }
        </>
    )
}