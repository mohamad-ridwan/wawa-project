'use client'

import { TemplateContext } from "@/app/store/template";
import DefaultProduct from "@/app/templates/default/product";
import ProductTheme1 from "@/app/templates/theme1/product";
import { ProuductT } from "@/app/types/products";
import { useContext } from "react";

type Props = ProuductT

export default function Product({
    img,
    name,
    discount,
    price
}: Props) {
    const templateContext = useContext(TemplateContext)

    return (
        <>
            {templateContext.templateName === 'default' &&
                <DefaultProduct
                    img={img}
                    name={name}
                    price={price}
                    discount={discount}
                />
            }
            {templateContext.templateName === 'theme1' &&
                <ProductTheme1
                    img={img}
                    name={name}
                    price={price}
                    discount={discount}
                />
            }
        </>
    )
}