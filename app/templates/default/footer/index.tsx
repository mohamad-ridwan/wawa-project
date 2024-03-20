'use client'

import { Typography } from "@material-tailwind/react";
import Link from "next/link";
import Container from "../container";
import Iconify from "../Iconify";

export default function Footer() {
    return (
        <Container>
            <div className="flex flex-col justify-center w-full">
                <div className="flex mx-auto w-[50px] h-[2px] bg-black mb-4">

                </div>
                <Link
                    href="https://www.facebook.com/Wawa-Cosmetics-by-Wawa-Zainal-107461044721431"
                    className="mx-auto py-3"
                >
                    <Iconify
                        icon="basil:facebook-outline"
                        height={20}
                        width={20}
                    />
                </Link>
                <div className="flex flex-wrap mx-auto mb-4">
                    <Typography
                        className="text-[0.8rem] font-apple-system font-normal text-center"
                    >
                        © 2024 Wawa Cosmetics Store. All rights reserved.
                    </Typography>
                    <Typography className="flex text-[0.8rem] font-apple-system font-normal">
                        Powered by
                        <Link
                            href="https://shoppegram.com"
                            className="transition-all hover:text-gray-800 ml-1 text-center"
                        >
                            Shoppegram
                        </Link>
                    </Typography>
                </div>
            </div>
        </Container>
    )
}