'use client'

import { useState } from "react";
import NavbarDefault from "@/app/templates/default/navbar";
import NavbarTheme1 from "@/app/templates/theme1/navbar";

type ListMenu = {
    path: string
    name: string
}

export default function Navbar() {
    const [open, setOpen] = useState<boolean>(false)

    function handleOpen(): void {
        setOpen(!open)
    }

    const menu: ListMenu[] = [
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
    ]

    const GET_CURRENT_TEMPLATE = (): '/templates/default' | '/templates/theme1' => {
        return '/templates/theme1'
    }

    return (
        <>
            {GET_CURRENT_TEMPLATE() == '/templates/default' &&
                <NavbarDefault
                    handleOpen={handleOpen}
                    listMenu={menu}
                    open={open}
                />
            }
            {GET_CURRENT_TEMPLATE() == '/templates/theme1' &&
                <NavbarTheme1
                    handleOpen={handleOpen}
                    listMenu={menu}
                    open={open}
                />
            }
        </>
    )
}