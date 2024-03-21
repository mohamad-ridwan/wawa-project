import Iconify from "@/app/components/Iconify"
import { Accordion, AccordionBody, Typography } from "@material-tailwind/react"
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
    const [fixedNavbar, setFixedNavbar] = useState<boolean>(true)

    function scrollNavbar(e: Event): void {
        const currentScrollY = Math.floor(window.scrollY)
        if (currentScrollY > 100) {
            setFixedNavbar(true)
        } else {
            setFixedNavbar(false)
        }
    }

    // useEffect(() => {
    //     window.addEventListener('scroll', scrollNavbar)

    //     return () => {
    //         removeEventListener('scroll', scrollNavbar, false)
    //     }
    // }, [])

    useEffect(() => {
        if (open) {
            document.body.style.overflowY = 'hidden'
        } else {
            document.body.style.overflowY = 'scroll'
        }
    }, [open])

    return (
        <>
            <div className={`${fixedNavbar ? 'fixed transition-all top-0 left-0 right-0 z-[99999]' : ''} flex justify-center w-screen bg-[hsla(0,0%,96%,.5)] backdrop-blur-md px-4 md:px-8`}>
                <div className="w-[80rem] max-w-7xl px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center">
                            <Logo />
                            <ul className="w-full gap-8 sm:flex hidden h-full">
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