'use client'

import Iconify from "@/app/components/Iconify";
import Container from "@/app/components/container";
import { CartsT } from "@/app/types/cart";
import { Button, Input, Textarea, Typography } from "@material-tailwind/react";
import Link from "next/link";

function TableHead() {
    const tHead = [
        {
            name: 'Product'
        },
        {
            name: 'Quantity'
        },
        {
            name: 'Total'
        },
    ]

    return (
        <tr className="border-t border-b">
            {tHead.map((item, i) => (
                <th key={i} className="p-3">
                    <Typography
                        placeholder=""
                        onPointerEnterCapture=""
                        onPointerLeaveCapture=""
                        className="font-apple-system font-bold"
                    >
                        {item.name}
                    </Typography>
                </th>
            ))}
        </tr>
    )
}

type PropsTableRows = {
    carts: CartsT[]
}

type Props = PropsTableRows

function TableRows({
    carts
}: PropsTableRows) {
    return (
        <tbody>
            {carts.map((item, i) => (
                <tr key={i} className="border-b">
                    <td className="p-3">
                        <div className="flex items-center space-x-8">
                            <Link href={item.path as string}>
                                <img
                                    src={item.img}
                                    alt=""
                                    width={100}
                                    height={100}
                                    className="object-cover max-w-[100px]"
                                />
                            </Link>
                            <div className="flex flex-col">
                                <Link href={item.path as string}>
                                    <Typography
                                        placeholder=""
                                        onPointerEnterCapture=""
                                        onPointerLeaveCapture=""
                                        className="font-apple-system font-normal text-start hover:opacity-[0.96] transition-all"
                                    >
                                        {item.name}
                                    </Typography>
                                </Link>
                                <Link href="#" className="underline text-sm font-apple-system italic text-start hover:no-underline transition-all hover:opacity-[0.96]">
                                    Remove
                                </Link>
                            </div>
                        </div>
                    </td>
                    <td className="p-3">
                        <div className="w-[6rem]">
                            <Input
                                onPointerEnterCapture=""
                                crossOrigin=""
                                onPointerLeaveCapture=""
                                type="number"
                                className="!border !border-gray-300 bg-white text-gray-900 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10 rounded-sm"
                                labelProps={{
                                    className: "hidden",
                                }}
                                value={item.quantity}
                                containerProps={{ className: "min-w-[20px]" }}
                            />
                        </div>
                    </td>
                    <td className="p-3">
                        <Typography
                            placeholder=""
                            onPointerEnterCapture=""
                            onPointerLeaveCapture=""
                            className="font-apple-system font-normal"
                        >
                            {item.total}
                        </Typography>
                    </td>
                </tr>
            ))}
        </tbody>
    )
}

export default function DefaultCart({
    carts
}: Props) {
    return (
        <div className="mb-20">
            <section className="flex mt-4">
                <div className="w-[960px] max-w-[960px] flex-col mx-auto overflow-x-auto overflow-y-hidden">
                    <div className="flex justify-center flex-col w-full items-center">
                        <h2 className="py-6 font-avant-garde font-medium text-2xl">
                            Cart
                        </h2>

                        <div className="w-[50px] h-[2px] bg-black flex mb-4"></div>
                    </div>
                    <div className="w-full overflow-x-auto">
                        <table className="w-full min-w-max table-auto text-left">
                            <thead>
                                <TableHead />
                            </thead>
                            <TableRows carts={carts} />
                            <tfoot>
                                <tr>
                                    <th colSpan={2} className="p-3">
                                        Total
                                    </th>
                                    <th className="p-3">
                                        MYR97.00
                                    </th>
                                    <th className="table-cell p-3"></th>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </section>

            <Container>
                <div className="flex justify-between w-full mt-4 gap-4">
                    <div className="flex flex-col">
                        <Textarea
                            onPointerEnterCapture=""
                            onPointerLeaveCapture=""
                            rows={2}
                            labelProps={{
                                className: "hidden",
                            }}
                            className="!border !border-gray-300 bg-white text-gray-900 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10 rounded-sm h-[120px] w-[22rem]"
                        />

                        <Typography
                            placeholder=""
                            onPointerEnterCapture=""
                            onPointerLeaveCapture=""
                            className="text-[0.8rem] font-apple-system font-normal mt-2"
                        >
                            Order notes
                        </Typography>
                    </div>

                    <div className="flex flex-wrap space-x-1">
                        <Button
                            variant="outlined"
                            placeholder=""
                            onPointerEnterCapture=""
                            onPointerLeaveCapture=""
                            className="h-fit w-fit font-apple-system rounded-sm font-normal text-[0.7rem] bg-[#E3E3E3] tracking-widest"
                        >
                            Continue Shopping
                        </Button>
                        <Button
                            variant="outlined"
                            placeholder=""
                            onPointerEnterCapture=""
                            onPointerLeaveCapture=""
                            className="h-fit w-fit font-apple-system rounded-sm font-normal text-[0.7rem] bg-[#E3E3E3] tracking-widest"
                        >
                            Update
                        </Button>
                        <Button
                            placeholder=""
                            onPointerEnterCapture=""
                            onPointerLeaveCapture=""
                            className="h-fit w-fit font-apple-system rounded-sm font-normal text-[0.7rem] tracking-widest flex items-center"
                        >
                            Checkout

                            <Iconify
                                icon="ph:arrow-right-light"
                                width={13}
                                height={13}
                                className="text-white ml-1 mt-0.3"
                            />
                        </Button>
                    </div>
                </div>
            </Container>
        </div>
    )
}