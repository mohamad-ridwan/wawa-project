import { ProuductT } from "@/app/types/products";
import AllProductsTheme1 from "../AllProductsTheme1";

type Props = {
    products: ProuductT[]
}

export default function HomeLayoutTheme1({
    products
}: Props) {
    return (
        <AllProductsTheme1
            products={products}
        />
    )
}