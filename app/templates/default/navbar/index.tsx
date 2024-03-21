import Iconify from "@/app/components/Iconify"
import { Accordion, AccordionBody, Typography } from "@material-tailwind/react"
import Link from "next/link"

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

export default function NavbarDefault({
    handleOpen,
    open,
    listMenu
}: PropsPageMenu & MenuBtnT) {
    return (
        <div className={`wrap-navbar`}>
            <div className="navbar-center">
                <div className="navbar">
                    <MenuBtn handleOpen={handleOpen} />

                    <Logo />

                    <Cart />
                </div>

                <PageMenu
                    open={open}
                    listMenu={listMenu}
                />
            </div>
        </div>
    )
}