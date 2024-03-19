import { Card, Typography } from "@material-tailwind/react";

type Props = {
    img: string
    name: string
    discount: string
    price: string
}

export default function Product({
    img,
    name,
    discount,
    price
}: Props) {
    return (
        <Card
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
                    variant="h6"
                    className="font-apple-system"
                >
                    {name}
                </Typography>

                <div className="flex flex-wrap justify-center space-x-2">
                    <Typography
                        className="line-through font-apple-system font-normal">
                        {discount}
                    </Typography>
                    <Typography
                        className="font-apple-system font-normal"
                    >
                        {price}
                    </Typography>
                </div>
            </div>
        </Card>
    )
}