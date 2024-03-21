import AllProducts from "@/app/templates/default/AllProducts";
import Banner from "@/app/templates/default/Banner";
import { ProuductT } from "@/app/types/products";

type ImgT = {
    img: string
    path: string
}

type Props = {
    banners: ImgT[]
    products: ProuductT[]
}

export default function HomeLayout({
    banners,
    products
}: Props) {
    return (
        <>
            <Banner banners={banners} />
            <AllProducts products={products}/>
        </>
    )
}