import Iconify from "@/app/components/Iconify"
import { Accordion, AccordionBody, Typography } from "@material-tailwind/react"
import Link from "next/link"

type ListMenu = {
    path: string
    name: string
}

type MenuBtnT = {
    handleOpen: () => void
}

type PropsPageMenu = {
    open: boolean
    listMenu: ListMenu[]
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
                className="max-w-[200px]"
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

function PageMenu({
    open,
    listMenu,
    handleOpen
}: PropsPageMenu) {
    return (
        <Accordion
            placeholder=""
            onPointerEnterCapture=""
            onPointerLeaveCapture=""
            open={open}
        >
            <AccordionBody>
                <ul className="w-full py-2 flex flex-col justify-center border">
                    {listMenu.map((item, i) => {
                        return <li key={i} className="flex justify-center" onClick={handleOpen}>
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

export default function NavbarDefault({
    handleOpen,
    open,
    listMenu
}: PropsPageMenu & MenuBtnT) {
    return (
        <div className="flex justify-center w-screen">
            <div className="w-[960px] max-w-[960px]">
                <div className="flex justify-between items-center py-[1.5rem]">
                    <MenuBtn handleOpen={handleOpen} />

                    <Logo />

                    <Cart />
                </div>

                <PageMenu
                    open={open}
                    listMenu={listMenu}
                    handleOpen={handleOpen}
                />
            </div>
        </div>
    )
}