'use client'

import Container from "../container";
import Link from "next/link";
import { Accordion, AccordionBody, Typography } from "@material-tailwind/react";
import { useState } from "react";
import Iconify from "../Iconify";

type ListMenu = {
    path: string
    name: string
}

type PropsPageMenu = {
    open: boolean
    listMenu: ListMenu[]
}

type MenuBtnT = {
    handleOpen: () => void
}

function PageMenu({
    open,
    listMenu
}: PropsPageMenu) {
    return (
        <Accordion
            open={open}
        >
            <AccordionBody>
                <ul className="w-full py-2 flex flex-col justify-center border">
                    {listMenu.map((item, i) => {
                        return <li key={i} className="flex justify-center">
                            <Link href={item.path} className="text-center uppercase tracking-widest text-black text-[16px] py-2 font-apple-system font-semibold hover:text-gray-800 transition-all w-full">
                                {item.name}
                            </Link>
                        </li>
                    })}
                </ul>
            </AccordionBody>
        </Accordion>
    )
}

function Logo() {
    return (
        <Link href={"/"}>
            <img
                src="https://img.shoppegram.com/themes/US4GeDJ8K1hDvXqepFQ2QVAHum8kNc5RgIDgFYJ6.jpg"
                className="max-w-[200px]"
            />
        </Link>
    )
}

function MenuBtn({
    handleOpen
}: MenuBtnT) {
    return (
        <Iconify
            icon="heroicons-outline:menu"
            click={handleOpen}
        />
    )
}

function Cart() {
    return (
        <div className="relative">
            <Iconify
                icon="uil:cart"
            />

            <div className="rounded-full flex justify-center items-center h-[1.25rem] w-[1.25rem] bg-black absolute right-[-7px] top-0">
                <Typography className="text-white text-[0.6rem]">1</Typography>
            </div>
        </div>
    )
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

    return (
        <Container>
            <div className="flex justify-between items-center py-[1.5rem]">
                <MenuBtn handleOpen={handleOpen} />

                <Logo />

                <Cart />
            </div>

            <PageMenu
                open={open}
                listMenu={menu}
            />
        </Container>
    )
}