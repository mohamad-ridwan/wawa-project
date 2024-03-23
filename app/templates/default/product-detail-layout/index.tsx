import Iconify from "@/app/components/Iconify"
import { Button, Carousel, Typography } from "@material-tailwind/react"
import './description.css'
import { ProuductT } from "@/app/types/products"

type ImgPreview = {
    img: string
    name: string
}

type PropsProductPreview = {
    imgPreviews: ImgPreview[]
}

type VariationsT = {
    name: string
}

type PropsDesc = {
    desc: string
}


type PropsProductContent = {
    varations: VariationsT[]
    desc: string
} & ProuductT

type Props = PropsProductPreview & PropsProductContent & ProuductT

function ProductPreview({
    imgPreviews
}: PropsProductPreview) {
    return (
        <div className="flex flex-col space-y-4">
            <div>
                <Carousel
                    className="mt-4"
                    loop
                    transition={
                        { type: "tween", duration: 0.5 }
                    }
                    placeholder={""}
                    onPointerEnterCapture=""
                    onPointerLeaveCapture=""
                    prevArrow={({ loop, handlePrev, firstIndex }) => {
                        return (
                            <button
                                onClick={handlePrev}
                                disabled={!loop && firstIndex}
                                className="!absolute top-2/4 left-0 -translate-y-2/4 rounded-full select-none transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-16 sm:w-28 h-full text-white grid place-items-center"
                            >
                                <Iconify
                                    icon="ooui:previous-ltr"
                                    height={20}
                                    width={20}
                                    color="white"
                                />
                            </button>
                        )
                    }}
                    nextArrow={({ loop, handleNext, lastIndex }) => {
                        return (
                            <button
                                onClick={handleNext}
                                disabled={!loop && lastIndex}
                                className="!absolute top-2/4 right-0 -translate-y-2/4 rounded-full select-none transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-16 sm:w-28 h-full text-white grid place-items-center"
                            >
                                <Iconify
                                    icon="ooui:previous-rtl"
                                    height={20}
                                    width={20}
                                    color="white"
                                />
                            </button>
                        )
                    }}
                    navigation={() => { }}
                >
                    {imgPreviews.map((item, i) => (
                        <img
                            key={i}
                            src={item.img}
                            width={450}
                            className="align-middle w-full object-contain"
                        />
                    ))}
                </Carousel>
            </div>
            <div className="grid grid-cols-5 gap-4">
                {imgPreviews.map((item, i) => (
                    <button key={i}>
                        <img
                            src={item.img}
                            alt=""
                            className="align-middle max-w-full max-h-full"
                        />
                    </button>
                ))}
            </div>
        </div>
    )
}

function Description({ desc }: PropsDesc) {
    return <p dangerouslySetInnerHTML={{ __html: desc }}>

    </p>
}

function ProductContent({
    varations,
    desc,
    name,
    price,
    discount,
    img
}: PropsProductContent) {
    return (
        <div>
            <Typography
                placeholder=""
                onPointerEnterCapture=""
                onPointerLeaveCapture=""
                variant="h2"
                className="text-center font-light font-avant-garde text-xs mt-12"
            >
                WAWA COSMETICS STORE
            </Typography>
            <Typography
                placeholder=""
                onPointerEnterCapture=""
                onPointerLeaveCapture=""
                variant="h2"
                className="text-center font-light font-avant-garde mt-4 px-6"
            >
                {name}
            </Typography>

            <div className="flex justify-center items-center">
                <Typography
                    placeholder=""
                    onPointerEnterCapture=""
                    onPointerLeaveCapture=""
                    className="text-center font-light font-inter mt-4 line-through mr-2 tracking-widest text-lg mb-0"
                >
                    {discount}
                </Typography>
                <Typography
                    placeholder=""
                    onPointerEnterCapture=""
                    onPointerLeaveCapture=""
                    className="text-center font-light font-inter mt-4 text-[#FF0000] tracking-widest text-lg mb-0"
                >
                    {price}
                </Typography>
            </div>
            <div className="h-[1.5px] w-[50px] bg-black mx-auto my-[20px]">

            </div>
            <Typography
                placeholder=""
                onPointerEnterCapture=""
                onPointerLeaveCapture=""
                className="text-center font-light font-inter tracking-widest text-[0.8rem]"
            >
                VARIATIONS
            </Typography>

            <ul className="flex flex-wrap mt-4 gap-2 justify-center mb-6 list-none ml-0">
                {varations.map((item, i) => (
                    <li key={i}>
                        <button className="border py-1.5 px-3 uppercase font-light font-inter text-[0.8rem] tracking-wider">
                            {item.name}
                        </button>
                    </li>
                ))}
            </ul>

            <Button
                variant="outlined"
                placeholder=""
                onPointerEnterCapture=""
                onPointerLeaveCapture=""
                className="uppercase rounded-none font-inter text-[0.8rem] w-full hover:opacity-1 font-normal tracking-wider"
            >
                Add To Cart
            </Button>
            <Button
                placeholder=""
                onPointerEnterCapture=""
                onPointerLeaveCapture=""
                className="uppercase bg-black rounded-none font-inter text-[0.8rem] w-full font-normal tracking-wider mt-2"
            >
                Buy Now
            </Button>

            <div className="mt-6 text-left text-sm font-apple-system tracking-wide">
                <Description desc={desc} />
            </div>
        </div>
    )
}

export default function DefaultProductDetail({
    imgPreviews,
    varations,
    desc,
    name,
    price,
    discount,
    img
}: Props) {
    return (
        <div className="grid grid-cols-2 gap-8 pb-32">
            <ProductPreview imgPreviews={imgPreviews} />
            <ProductContent
                varations={varations}
                desc={desc}
                name={name}
                price={price}
                discount={discount}
                img={img}
            />
        </div>
    )
}