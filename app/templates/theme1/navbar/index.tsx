import Iconify from "@/app/components/Iconify"
import { Accordion, AccordionBody, Input, Typography } from "@material-tailwind/react"
import Link from "next/link"
import { useEffect, useState } from "react"

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

function Logo() {
    return (
        <Link href={"/"}>
            <img
                src="/logo.jpg"
                className="max-w-[100px] mr-4"
            />
        </Link>
    )
}

function Cart() {
    return (
        <div className="relative">
            <Link href="/cart">
                <Iconify
                    icon="uil:cart"
                />
            </Link>

            <div className="rounded-full flex justify-center items-center h-[1.25rem] w-[1.25rem] bg-black absolute right-[-7px] top-0">
                <Typography
                    className="text-white text-[0.6rem] mb-0"
                    placeholder=""
                    onPointerEnterCapture=""
                    onPointerLeaveCapture=""
                >1</Typography>
            </div>
        </div>
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

export default function NavbarTheme1({
    listMenu,
    handleOpen,
    open,
}: PropsPageMenu &
    MenuBtnT
) {
    useEffect(() => {
        if (open) {
            document.body.style.overflowY = 'hidden'
        } else {
            document.body.style.overflowY = 'scroll'
        }
    }, [open])

    return (
        <>
            <div className={`fixed top-0 left-0 right-0 z-[99999] flex justify-center w-screen bg-[hsla(0,0%,96%,.5)] backdrop-blur-md px-4 md:px-8`}>
                <div className="w-[80rem] max-w-7xl px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center">
                            <Logo />
                            <ul className="w-full gap-8 sm:flex hidden h-full ml-0 mb-0">
                                {listMenu.map((item, i) => {
                                    return <li key={i} className="flex h-full">
                                        <Link href={item.path} className="text-center text-[#737373] h-full text-sm font-inter font-medium hover:text-gray-900 transition-all w-full">
                                            {item.name}
                                        </Link>
                                    </li>
                                })}
                            </ul>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="lg:w-80 hidden lg:flex">
                                <Input
                                    onPointerEnterCapture=""
                                    onPointerLeaveCapture=""
                                    crossOrigin=""
                                    type="text"
                                    placeholder="Search for products..."
                                    className="!border !border-gray-300 bg-white text-gray-900 ring-4 ring-transparent placeholder:text-[#737373] placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10 font-inter font-normal"
                                    labelProps={{ className: 'hidden' }}
                                    icon={
                                        <Iconify
                                            icon="iconamoon:search"
                                            height={20}
                                            width={20}
                                            className="text-[#737373]"
                                        />
                                    }
                                />
                            </div>
                            <Cart />
                            <div className="sm:hidden flex">
                                <MenuBtn handleOpen={handleOpen} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {open &&
                <div className="fixed top-16 h-screen left-0 right-0 flex bg-white z-[9999999]">
                    <Accordion
                        placeholder=""
                        onPointerEnterCapture=""
                        onPointerLeaveCapture=""
                        open={open}
                    >
                        <AccordionBody>
                            <ul className="w-full flex flex-col px-4">
                                {listMenu.map((item, i) => {
                                    return <li key={i} className="flex py-4 border-t">
                                        <Link href={item.path} className="w-full flex font-inter font-medium">
                                            {item.name}
                                        </Link>
                                    </li>
                                })}
                            </ul>
                        </AccordionBody>
                    </Accordion>
                </div>
            }
        </>
    )
}