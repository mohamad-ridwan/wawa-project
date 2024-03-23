'use client'

import { useContext, useEffect, useState } from "react"
import { TemplateContext } from "../store/template"
import DefaultCart from "../templates/default/cart-layout"
import Container from "../components/container"
import { CartsT } from "../types/cart"
import CartTheme1 from "../templates/theme1/cart-layout"

export default function Cart() {
    const templateContext = useContext(TemplateContext)
    const [carts, setCarts] = useState<CartsT[]>([
        {
            name: 'WAWA SCARVES ASTANA EDITION / MANIKAM',
            img: 'https://img.shoppegram.com/photo_2024_01_31_12_5dljhhors3r9miup4to3_180x.jpeg',
            quantity: 1,
            total: 'MYR28.00',
            path: '/products/combo-skincare-set',
            category: 'Cosmetic',
            variant: 'LIGHT'
        },
        {
            name: 'WAWA BEAUTY ESSENCE REJUVENATING / BIG 50ml',
            img: 'https://img.shoppegram.com/61027e18_3169_4663_9_mbbnf2xthkiygplyfdsb_180x.webp',
            quantity: 1,
            total: 'MYR69.00',
            path: '/products/combo-skincare-set',
            category: 'Skincare',
            variant: 'NATURAL'
        },
    ])

    useEffect(()=>{
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    }, [])

    return (
        <>
            {templateContext.templateName === 'default' &&
                <DefaultCart carts={carts} />
            }
            {templateContext.templateName === 'theme1' &&
                <Container>
                    <CartTheme1 carts={carts}/>
                </Container>
            }
        </>
    )
}