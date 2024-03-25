import { ProuductT } from "@/app/types/products"
import { Button, Typography } from "@material-tailwind/react"

type VariationsT = {
    name: string
}

type PropsDesc = {
    desc: string
}

type PropsProductContent = {
    variants: VariationsT[]
    desc: string
} & ProuductT


type Props = PropsProductContent & PropsDesc & ProuductT

function Description({ desc }: PropsDesc) {
    return <p dangerouslySetInnerHTML={{ __html: desc }} className="text-[#737373] font-inter">

    </p>
}

function ProductContent({
    variants,
    desc,
    name,
    price,
    discount,
    img
}: PropsProductContent) {
    return (
        <div className="flex flex-col pt-16">
            <Typography
                variant="h1"
                placeholder=""
                onPointerEnterCapture=""
                onPointerLeaveCapture=""
                className="font-inter text-[#171717] font-medium text-3xl mb-4"
            >
                {name}
            </Typography>

            <div className="items-center flex space-x-2">
                <Typography
                    placeholder=""
                    onPointerEnterCapture=""
                    onPointerLeaveCapture=""
                    className="line-through font-normal font-inter text-sm"
                >
                    {discount}
                </Typography>
                <Typography
                    placeholder=""
                    onPointerEnterCapture=""
                    onPointerLeaveCapture=""
                    className="font-normal font-inter text-sm"
                >
                    {price}
                </Typography>
            </div>

            <ul className="ml-0 mb-0 list-none flex flex-wrap gap-3">
                {variants.map((item, i) => (
                    <li key={i}>
                        <Button
                            placeholder=""
                            onPointerEnterCapture=""
                            onPointerLeaveCapture=""
                            variant="outlined"
                            size="sm"
                            className="uppercase font-semibold font-inter text-sm text-[#171717] rounded-md p-3 border-gray-300"
                        >
                            {item.name}
                        </Button>
                    </li>
                ))}
            </ul>

            <Button
                placeholder=""
                onPointerEnterCapture=""
                onPointerLeaveCapture=""
                className="rounded-md shadow-none w-fit mt-8 normal-case font-inter font-medium text-[16px] hover:opacity-[0.95] py-3 px-6"
                size="lg"
            >
                Add to cart
            </Button>

            <div className="mt-8 text-left text-sm font-apple-system tracking-wide">
                <Description desc={desc} />
            </div>
        </div>
    )
}

export default function ProductDetailTheme1({
    variants,
    desc,
    name,
    price,
    discount,
    img
}: Props) {
    return (
        <div className="grid grid-cols-2 gap-8 pb-8">
            <img
                src={img}
                alt="product detail wawacosmetics"
                height={500}
                width={500}
            />

            <ProductContent
                variants={variants}
                desc={desc}
                name={name}
                discount={discount}
                price={price}
                img={img}
            />
        </div>
    )
}