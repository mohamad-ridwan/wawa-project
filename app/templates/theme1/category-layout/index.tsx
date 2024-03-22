import Product from "@/app/components/product"
import { ProuductT } from "@/app/types/products"
import { Typography } from "@material-tailwind/react"
import Link from "next/link"

type Props = {
    products: ProuductT[]
    title: string
}

export default function CategoryTheme1({
    products,
    title
}: Props) {
    return (
        <>
            <Typography
                placeholder=""
                onPointerEnterCapture=""
                onPointerLeaveCapture=""
                className="font-inter font-semibold mb-8 text-xl"
            >
                {title}
            </Typography>
            <div className="grid grid-cols-3 gap-8">
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
        </>
    )
}