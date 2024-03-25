'use client'

import { Carousel } from "@material-tailwind/react"
import Iconify from "../../components/Iconify"
import Link from "next/link"

type ImgT = {
    img: string
    path: string
}

type Props = {
    banners: ImgT[]
}

export default function Banner({
    banners
}: Props) {
    return (
        <section>
            <Carousel
                className="mt-4"
                loop
                autoplay
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
                            className="!absolute top-2/4 left-0 -translate-y-2/4 rounded-full select-none transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-20 sm:w-28 h-full text-white grid place-items-center"
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
                            className="!absolute top-2/4 right-0 -translate-y-2/4 rounded-full select-none transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-20 sm:w-28 h-full text-white grid place-items-center"
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
                navigation={({ setActiveIndex, activeIndex, length }) => (
                    <div className="absolute bottom-4 right-4 z-50 flex -translate-x-2/4 gap-2">
                        {new Array(length).fill("").map((_, i) => (
                            <span
                                key={i}
                                className={`block h-[0.65rem] w-[0.65rem] cursor-pointer rounded-full transition-colors content-[''] ${activeIndex === i ? "bg-black" : "bg-gray-400"
                                    }`}
                                onClick={() => setActiveIndex(i)}
                            />
                        ))}
                    </div>
                )}
            >
                {banners.map((item, i) => (
                    <Link key={i} href={item.path}>
                        <img
                            src={item.img}
                            className="max-h-[400px]"
                            alt="banner-wawacosmetics"
                            height={630}
                            width={1200}
                        />
                    </Link>
                ))}
            </Carousel>
        </section>
    )
}