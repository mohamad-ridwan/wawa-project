import { CartsT } from "@/app/types/cart";
import { Button, Typography } from "@material-tailwind/react";
import Link from "next/link";

type PropsCartLists = {
    carts: CartsT[]
}

type Props = PropsCartLists

function CartLists({
    carts
}: PropsCartLists) {
    return (
        <ul>
            {carts.map((item, i) => (
                <li key={i} className="flex w-full justify-between py-4 border-b">
                    <div className="flex gap-4">
                        <div className="bg-[#fafafa] h-[126px] w-[126px] rounded-md border overflow-hidden">
                            <img
                                src={item.img}
                                alt=""
                                height={126}
                                width={126}
                                className="object-cover"
                            />
                        </div>

                        <div className="flex flex-col mt-2">
                            <div className="flex flex-col justify-between space-y-2">
                                <Link href={item.path as string}>
                                    <Typography
                                        placeholder=""
                                        onPointerEnterCapture=""
                                        onPointerLeaveCapture=""
                                        variant="h2"
                                        className="text-[#404040] font-inter font-medium text-[1rem]"
                                    >
                                        {item.name}
                                    </Typography>
                                </Link>
                                <Typography
                                    placeholder=""
                                    onPointerEnterCapture=""
                                    onPointerLeaveCapture=""
                                    className="text-[#737373] font-inter font-normal text-sm"
                                >
                                    {item.category}
                                </Typography>
                                <Typography
                                    placeholder=""
                                    onPointerEnterCapture=""
                                    onPointerLeaveCapture=""
                                    className="text-[#737373] font-inter font-normal text-sm"
                                >
                                    Variant: {item.variant}
                                </Typography>
                            </div>
                            <Typography
                                placeholder=""
                                onPointerEnterCapture=""
                                onPointerLeaveCapture=""
                                className="font-inter font-bold text-sm mt-5"
                            >
                                Qty: {item.quantity}
                            </Typography>
                        </div>
                    </div>

                    <div className="flex flex-col justify-between">
                        <Typography
                            placeholder=""
                            onPointerEnterCapture=""
                            onPointerLeaveCapture=""
                            className="text-[#171717] font-inter font-semibold"
                        >
                            {item.total}
                        </Typography>
                        <Link
                            href="#"
                            className="text-[#737373] font-normal font-inter text-sm hover:text-gray-900 transition-all"
                        >
                            Remove
                        </Link>
                    </div>
                </li>
            ))}
        </ul>
    )
}

function ContentCheckout() {
    return (
        <div className="flex flex-col mt-12">
            <div className="border rounded-md px-4 py-3.5 bg-[#FAFAFA] flex justify-between items-center">
                <div className="flex flex-col space-y-1">
                    <Typography
                        placeholder=""
                        onPointerEnterCapture=""
                        onPointerLeaveCapture=""
                        className="text-[#171717] font-semibold font-inter"
                    >
                        Your Total
                    </Typography>
                    <Typography
                        placeholder=""
                        onPointerEnterCapture=""
                        onPointerLeaveCapture=""
                        className="text-[#737373] font-inter text-sm font-normal"
                    >
                        Shipping will be calculated in the next step
                    </Typography>
                </div>

                <Typography
                    placeholder=""
                    onPointerEnterCapture=""
                    onPointerLeaveCapture=""
                    className="text-[#171717] font-inter font-medium"
                >
                    MYR69.00
                </Typography>
            </div>

            <Button
                placeholder=""
                onPointerEnterCapture=""
                onPointerLeaveCapture=""
                size="lg"
                className="mx-auto rounded-md shadow-none normal-case font-inter font-semibold tracking-wide w-[33%] mt-10 hover:opacity-[0.96] transition-all"
            >
                Checkout
            </Button>
        </div>
    )
}

export default function CartTheme1({
    carts
}: Props) {
    return (
        <div className="flex flex-col">
            <Typography
                placeholder=""
                onPointerEnterCapture=""
                onPointerLeaveCapture=""
                variant="h1"
                className="text-[#171717] font-inter font-bold text-3xl border-b pb-12 mt-8"
            >
                Your Shopping Cart
            </Typography>

            <CartLists carts={carts} />

            <ContentCheckout />
        </div>
    )
}