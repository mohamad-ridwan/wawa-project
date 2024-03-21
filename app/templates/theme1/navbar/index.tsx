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
                className="logo"
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
    const [fixedNavbar, setFixedNavbar] = useState<boolean>(false)

    function scrollNavbar(e: Event): void {
        const currentScrollY = Math.floor(window.scrollY)
        if (currentScrollY > 100) {
            setFixedNavbar(true)
        } else {
            setFixedNavbar(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollNavbar)

        return () => {
            removeEventListener('scroll', scrollNavbar, false)
        }
    }, [])

    useEffect(() => {
        if (open) {
            document.body.style.overflowY = 'hidden'
        } else {
            document.body.style.overflowY = 'scroll'
        }
    }, [open])

    return (
        <>
            <div className={`${fixedNavbar ? 'fixed-navbar' : ''} wrap-navbar`}>
                <div className="navbar-center">
                    <div className="navbar">
                        <div className="flex items-center">
                            <Logo />
                            <ul className="wrap-nav-menu">
                                {listMenu.map((item, i) => {
                                    return <li key={i} className="nav-list">
                                        <Link href={item.path} className="nav-menu">
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
                            <ul className="wrap-nav-mobile px-4">
                                {listMenu.map((item, i) => {
                                    return <li key={i} className="flex py-4 border-t">
                                        <Link href={item.path} className="w-full flex">
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