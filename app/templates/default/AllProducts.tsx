'use client'

import { ProuductT } from "@/app/types/products";
import Section from "../../components/section";
import Link from "next/link";
import Product from "../../components/product";
import { Button, Typography } from "@material-tailwind/react";

type Props = {
    products: ProuductT[]
}

export default function AllProducts({
    products
}:Props) {
    return (
        <Section
            title="All Products"
        >
            <div className="grid grid-cols-4 gap-8">
                {products.map((item, i) => (
                    <Link key={i} href={item.path as string}>
                        <Product
                            name={item.name}
                            img={item.img}
                            discount={item.discount}
                            price={item.price}
                        />
                    </Link>
                ))}
            </div>

            <div className="border-t flex w-full justify-center mb-12 mt-8 py-4">
                <Link href="/products">
                    <Button
                        placeholder=""
                        onPointerEnterCapture=""
                        onPointerLeaveCapture=""
                        variant="outlined"
                        className="rounded-none hover:bg-black hover:text-white text-[#343a40]"
                        size="md"
                    >
                        <Typography
                            placeholder=""
                            onPointerEnterCapture=""
                            onPointerLeaveCapture=""
                            className="font-avant-garde text-[0.85rem] mb-0"
                        >
                            VIEW ALL
                        </Typography>
                    </Button>
                </Link>
            </div>
        </Section>
    )
}