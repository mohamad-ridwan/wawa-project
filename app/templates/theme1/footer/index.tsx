import Container from "@/app/components/container"
import { FooterDataT } from "@/app/types/footer"
import { Option, Select, Typography } from "@material-tailwind/react"
import Link from "next/link"

type MenuFooterT = {
    title: string
    children: {
        name: string
        path: string
    }[]
}

type PropsFooterMenu = {
    menu: MenuFooterT[]
}

type CurrencyT = {
    name: string
    value: string
}

type Props = PropsFooterMenu & FooterDataT & {
    currencys: CurrencyT[]
}

function FooterMenu({
    menu
}: PropsFooterMenu) {
    return (
        <>
            {menu.map((item, i) => (
                <div key={i} className="flex flex-col">
                    <div className="flex flex-col space-y-4">
                        <Typography
                            placeholder=""
                            onPointerEnterCapture=""
                            onPointerLeaveCapture=""
                            variant="h3"
                            className="font-inter font-semibold text-sm mb-0"
                        >
                            {item.title}
                        </Typography>

                        <ul className="flex flex-col space-y-4 ml-0 mb-0 list-none">
                            {item.children.map((child, iChild) => (
                                <li key={iChild} className="font-inter text-[#737373] font-normal text-sm">
                                    <Link href={child.path}>
                                        {child.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </>
    )
}

type PropsCurrency = {
    currencys: CurrencyT[]
}

function SelectCurrency({
    currencys
}: PropsCurrency) {
    return (
        <div className="ml-1">
            <Select
                placeholder="Select currency..."
                onPointerEnterCapture=""
                onPointerLeaveCapture=""
                label="Select Currency"
                className="!border !border-gray-300 bg-white text-gray-900 ring-4 ring-transparent placeholder:text-[#737373] placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10 font-inter font-normal"
                labelProps={{ className: 'hidden' }}
                value="AUD"
            >
                {currencys.map((item, i) => (
                    <Option key={i} className="list-none">{item.name}</Option>
                ))}
            </Select>
        </div>
    )
}

export default function FooterTheme1({
    menu,
    copyRight,
    poweredBy,
    poweredHref,
    currencys
}: Props) {
    const bgFooter = 'bg-[#fafafa]'
    return (
        <footer
            className={`${bgFooter} flex flex-col w-full mt-16`}
        >
            <Container>
                <div className="grid grid-cols-3 gap-8 py-16">
                    <FooterMenu menu={menu} />
                </div>

                <div className="flex items-center mb-4">
                    <Typography
                        placeholder=""
                        onPointerEnterCapture=""
                        onPointerLeaveCapture=""
                        className="font-inter font-normal text-[#737373] text-sm mb-0"
                    >
                        Change currency:
                    </Typography>
                    <SelectCurrency currencys={currencys}/>
                </div>

                <div className="flex justify-between items-center border-t py-10">
                    <Typography
                        placeholder=""
                        onPointerEnterCapture=""
                        onPointerLeaveCapture=""
                        className="font-inter font-normal text-[#737373] text-sm"
                    >
                        {copyRight}
                    </Typography>

                    <Typography
                        placeholder=""
                        onPointerEnterCapture=""
                        onPointerLeaveCapture=""
                        className="flex text-sm font-inter font-normal text-[#737373]"
                    >
                        Powered by
                        <Link
                            href={poweredHref}
                            className="ml-1 text-center"
                        >
                            {poweredBy}
                        </Link>
                    </Typography>
                </div>
            </Container>
        </footer>
    )
}