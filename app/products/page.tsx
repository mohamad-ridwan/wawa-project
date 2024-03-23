'use client'

import Container from "../components/container";
import { ProuductT } from "../types/products";
import { useContext, useEffect, useMemo, useState } from "react";
import { TemplateContext } from "../store/template";
import DefaultProductsLayout from "../templates/default/products-layout";
import ProductsLayoutTheme1 from "../templates/theme1/products-layout";
import { Button } from "@material-tailwind/react";

export default function Products() {
    const templateContext = useContext(TemplateContext)

    // state theme1
    const [page, setPage] = useState<number>(0)

    const products: ProuductT[] = [
        {
            name: 'COMBO SKINCARE PACK (PERFECT SKIN SET)',
            img: 'https://img.shoppegram.com/skincare_2_a7ysm4m1jaejayfc6moe_540x.png',
            discount: 'MYR127.00',
            price: 'MYR119.00',
            path: '/products/combo-skincare-set'
        },
        {
            name: 'WAWA BEAUTY ESSENCE REJUVENATING',
            img: 'https://img.shoppegram.com/61027e18_3169_4663_9_mbbnf2xthkiygplyfdsb_540x.webp',
            discount: 'MYR29.00',
            price: 'MYR25.00',
            path: '/products/combo-skincare-set'
        },
        {
            name: 'WAWA LOOSE POWDER',
            img: 'https://img.shoppegram.com/580f189f_6eb4_41be_a_f4aqgwy7sdzooapdjjel_540x.jpg',
            discount: 'MYR45.00',
            price: 'MYR35.00',
            path: '/products/combo-skincare-set'
        },
        {
            name: 'WAWA x ROZYANA Lagenda Cinta (EDP)',
            img: 'https://img.shoppegram.com/photo_2023_11_11_14_dpevpnm6zcdton0ffiph_540x.jpeg',
            discount: 'MYR19.90',
            price: 'MYR15.00',
            path: '/products/combo-skincare-set'
        },
        {
            name: 'WAWA SCARVES ASTANA EDITION',
            img: 'https://img.shoppegram.com/photo_2024_01_31_12_5dljhhors3r9miup4to3_540x.jpeg',
            discount: 'MYR30.00',
            price: 'MYR28.00',
            path: '/products/combo-skincare-set'
        },
        {
            name: 'WAWA TINTED SUNSCREEN',
            img: 'https://img.shoppegram.com/dahlia_qtrstrmwhln68dzlntz3_540x.jpeg',
            discount: 'MYR40.00',
            price: 'MYR37.00',
            path: '/products/combo-skincare-set'
        },
        {
            name: 'WAWA ICONIC LIPSTICK',
            img: 'https://img.shoppegram.com/photo_2023_11_27_11_huafdxoojcwviz3zflbg_540x.jpeg',
            discount: 'MYR30.00',
            price: 'MYR27.00',
            path: '/products/combo-skincare-set'
        },
        {
            name: 'WAWA EDP FOR WOMAN',
            img: 'https://img.shoppegram.com/photo_2024_01_02_10_91tryv17i6pfom6tpiim_540x.jpeg',
            discount: 'MYR19.90',
            price: 'MYR15.00',
            path: '/products/combo-skincare-set'
        },
        {
            name: 'WAWA PORE PRIMER',
            img: 'https://img.shoppegram.com/photo_2024_01_16_10_zdjudr1e4cvtnzcq0xpt_540x.jpeg',
            discount: 'MYR40.00',
            price: 'MYR35.00',
            path: '/products/combo-skincare-set'
        },
        {
            name: 'WAWA SETTING SPRAY',
            img: 'https://img.shoppegram.com/photo_2024_01_26_09_ocqanya8czeguau9aqvl_540x.jpeg',
            discount: 'MYR40.00',
            price: 'MYR37.00',
            path: '/products/combo-skincare-set'
        },
        {
            name: 'WAWA x DAHLIA GLOW SKIN SET',
            img: 'https://img.shoppegram.com/photo_2024_02_02_10_f69oabuxchmgbkcrpzmj_540x.jpeg',
            price: 'MYR27.00',
            path: '/products/combo-skincare-set'
        },
        {
            name: 'WAWA BUTTER LIP TINT',
            img: 'https://img.shoppegram.com/photo_2024_03_15_12_6kafhfruzscxxz8vcmk4_540x.jpeg',
            discount: 'MYR30.00',
            price: 'MYR19.90',
            path: '/products/combo-skincare-set'
        },
    ]

    // theme1 logic
    const totalLoad: number = 6
    const currentProductsLimit = useMemo((): ProuductT[]=>{
        return products.slice(page, totalLoad)
    }, [
        page
    ])

    const isNextPage = useMemo(():boolean=>{
        if((page + 1) < Math.floor(products.length / totalLoad)){
            return true
        }
        return false
    }, [page])

    function nextPage():void{
        if(isNextPage){
            setPage(page + 1)
        }
    }

    useEffect(()=>{
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    }, [])

    return (
        <Container>
            {templateContext.templateName === 'default' &&
                <DefaultProductsLayout products={products} />
            }
            {templateContext.templateName === 'theme1' &&
                <>
                    <ProductsLayoutTheme1 products={currentProductsLimit} />
                    <div className="flex justify-center pt-12 px-4">
                        <Button
                            placeholder=""
                            onPointerEnterCapture=""
                            onPointerLeaveCapture=""
                            variant={isNextPage ? 'filled' : 'outlined'}
                            onClick={nextPage}
                            className="rounded-md shadow-none normal-case font-inter hover:opacity-[0.95] text-sm py-2 px-4 font-medium"
                            disabled={!isNextPage}
                        >
                            Next page
                        </Button>
                    </div>
                </>
            }
        </Container>
    )
}