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
                <div>
                    <Typography
                        placeholder=""
                        onPointerEnterCapture=""
                        onPointerLeaveCapture=""
                        className="font-inter text-sm font-semibold mb-0"
                    >
                        {name}
                    </Typography>
                    <Typography
                        placeholder=""
                        onPointerEnterCapture=""
                        onPointerLeaveCapture=""
                        className="font-inter text-sm text-[#737373] font-normal mt-1"
                    >
                        Cosmetic
                    </Typography>
                </div>

                <div className="flex justify-center space-x-1">
                    {discount &&
                        <Typography
                            placeholder=""
                            onPointerEnterCapture=""
                            onPointerLeaveCapture=""
                            className="line-through font-inter font-medium text-sm mb-0">
                            {discount}
                        </Typography>
                    }
                    <Typography
                        placeholder=""
                        onPointerEnterCapture=""
                        onPointerLeaveCapture=""
                        className="font-inter font-medium text-sm mb-0"
                    >
                        {price}
                    </Typography>
                </div>
            </div>
        </Card>
    )
}