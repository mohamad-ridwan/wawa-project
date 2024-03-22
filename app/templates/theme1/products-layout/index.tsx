import Product from "@/app/components/product"
import { ProuductT } from "@/app/types/products"
import Link from "next/link"

type Props = {
    products: ProuductT[]
}

export default function ProductsLayoutTheme1({
    products
}: Props) {
    return (
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
    )
}