import { ProuductT } from "@/app/types/products";
import { Card, Typography } from "@material-tailwind/react";

type Props = ProuductT

export default function ProductTheme1({
    name,
    img,
    price,
    discount
}: Props) {
    const bgImg = 'bg-[#fafafa]'

    return (
        <Card
            placeholder=""
            onPointerEnterCapture=""
            onPointerLeaveCapture=""
            shadow={false}
            color="white"
            className="cursor-pointer"
        >
            <div className={`${bgImg} h-[390px] w-full`}>
                <img
                    src={img}
                    alt=""
                    className="h-full w-full object-contain"
                />
            </div>
            <div className="flex justify-between space-x-2 text-[#171717] my-2">
                <Typography
                    placeholder=""
                    onPointerEnterCapture=""
                    onPointerLeaveCapture=""
                    className="font-inter text-sm font-semibold"
                >
                    {name}
                </Typography>

                <div className="flex justify-center space-x-1">
                    {discount &&
                        <Typography
                            placeholder=""
                            onPointerEnterCapture=""
                            onPointerLeaveCapture=""
                            className="line-through font-inter font-medium text-sm">
                            {discount}
                        </Typography>
                    }
                    <Typography
                        placeholder=""
                        onPointerEnterCapture=""
                        onPointerLeaveCapture=""
                        className="font-inter font-medium text-sm"
                    >
                        {price}
                    </Typography>
                </div>
            </div>
        </Card>
    )
}