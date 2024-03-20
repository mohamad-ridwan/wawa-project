'use client'

import { ProuductT } from "@/app/types/products";
import { Card, Typography } from "@material-tailwind/react";

type Props = ProuductT

export default function Product({
    img,
    name,
    discount,
    price
}: Props) {
    return (
        <Card
            placeholder=""
            onPointerEnterCapture=""
            onPointerLeaveCapture=""
            color="white"
            shadow={false}
            className="cursor-pointer"
        >
            <img
                src={img}
                alt=""
                className="max-w-full max-h-full"
            />
            <div className="text-center mt-4 hover:text-gray-800 transition-all text-black">
                <Typography
                    placeholder=""
                    onPointerEnterCapture=""
                    onPointerLeaveCapture=""
                    variant="h6"
                    className="font-apple-system"
                >
                    {name}
                </Typography>

                <div className="flex flex-wrap justify-center space-x-2">
                    {discount &&
                        <Typography
                            placeholder=""
                            onPointerEnterCapture=""
                            onPointerLeaveCapture=""
                            className="line-through font-apple-system font-normal">
                            {discount}
                        </Typography>
                    }
                    <Typography
                        placeholder=""
                        onPointerEnterCapture=""
                        onPointerLeaveCapture=""
                        className="font-apple-system font-normal"
                    >
                        {price}
                    </Typography>
                </div>
            </div>
        </Card>
    )
}