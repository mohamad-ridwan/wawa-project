'use client'

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
            placeholder=""
            onPointerEnterCapture=""
            onPointerLeaveCapture=""
            open={open}
        >
            <AccordionBody>
                <ul className="wrap-nav-menu">
                    {listMenu.map((item, i) => {
                        return <li key={i} className="nav-list">
                            <Link href={item.path} className="nav-menu">
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
                src="/logo.jpg"
                className="logo"
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
                <Typography
                    className="text-white text-[0.6rem]"
                    placeholder=""
                    onPointerEnterCapture=""
                    onPointerLeaveCapture=""
                >1</Typography>
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
        <div className="wrap-navbar">
            <div className="navbar-center">
                {/* <div className="navbar">
                    <MenuBtn handleOpen={handleOpen} />

                    <Logo />

                    <Cart />
                </div>

                <PageMenu
                    open={open}
                    listMenu={menu}
                /> */}

                <div className="navbar">
                    <div className="flex items-center">
                        <Logo />
                        <ul className="wrap-nav-menu">
                            {menu.map((item, i) => {
                                return <li key={i} className="nav-list">
                                    <Link href={item.path} className="nav-menu">
                                        {item.name}
                                    </Link>
                                </li>
                            })}
                        </ul>
                    </div>

                    <Cart />
                </div>
            </div>
        </div>
    )
}