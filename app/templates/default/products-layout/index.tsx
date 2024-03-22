import Product from "@/app/components/product";
import Section from "@/app/components/section";
import { ProuductT } from "@/app/types/products";
import Link from "next/link";

type Props = {
    products: ProuductT[]
}

export default function DefaultProductsLayout({
    products
}: Props) {
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
        </Section>
    )
}