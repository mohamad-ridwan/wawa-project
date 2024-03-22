'use client'

import Container from "@/app/components/container";
import { TemplateContext } from "@/app/store/template";
import DefaultProductDetail from "@/app/templates/default/product-detail-layout";
import ProductDetailTheme1 from "@/app/templates/theme1/product-detail-layout";
import { ProuductT } from "@/app/types/products";
import { useContext, useEffect, useState } from "react";

type ImgPreview = {
    img: string
    name: string
}

type VariationsT = {
    name: string
}

export default function ProductDetail() {
    const templateContext = useContext(TemplateContext)
    const [detailProduct, setDetailProduct] = useState({} as ProuductT)
    const [imgPreviewData, setImgPreviewData] = useState<ImgPreview[]>([
        {
            img: 'https://img.shoppegram.com/photo_2023_11_14_11_dwjeudspgxqaoqc3pe1q_1080x.jpeg',
            name: 'product1',
        },
        {
            img: 'https://img.shoppegram.com/photo_2023_11_11_14_xzclpezugq467tfgoafn_180x.jpeg',
            name: 'product2',
        },
        {
            img: 'https://img.shoppegram.com/photo_2023_11_14_11_dwjeudspgxqaoqc3pe1q_180x.jpeg',
            name: 'product3',
        },
        {
            img: 'https://img.shoppegram.com/photo_2023_11_18_09_hdsahjsqrownfo6nqgp2_180x.jpeg',
            name: 'product4',
        },
        {
            img: 'https://img.shoppegram.com/photo_2023_11_18_09_hdsahjsqrownfo6nqgp2_180x.jpeg',
            name: 'product4',
        },
        {
            img: 'https://img.shoppegram.com/photo_2023_11_18_09_hdsahjsqrownfo6nqgp2_180x.jpeg',
            name: 'product4',
        },
    ])

    const [variations, setVariations] = useState<VariationsT[]>([
        {
            name: 'Lagenda Cinta (Mini)'
        },
        {
            name: 'Mahkota Edition (Mini)'
        },
        {
            name: 'Seri Pagi (10ML)'
        },
        {
            name: 'Mengundang Cinta (10ML)'
        },
        {
            name: 'Syurga Malam (10ML)'
        },
        {
            name: 'Aura Pesona (10ML)',
        },
        {
            name: 'Buluh Perindu (10ML)',
        },
        {
            name: 'Mandi Bunga (10ML)',
        },
    ])

    const description = `
    <p>ROZYANA x WAWA EAU DE PARFUM kembali lagi.!!!<br>20k unit trial terjual dalam masa seminggu.!<br>JOMMM GRAB CEPAT!!<br>.<br>LIMITED UNIT!</p>
<p>Wawa keluarkan cuma 30k sahaja.! Will be sold out FOREVER!<br>.</p>
<p><strong><u>WAWA X ROZEYANA Eau De Parfume</u></strong></p>
<p><strong>SCENT:</strong></p>
<ul><li><strong>Aura Pesona</strong> (Amber Floral) - This fragrance is in the family of floral woody musk. It plays with the thin line between fresh and seductive, invoking the feel of women liberation and empowerment.</li><li><strong>Mandi Bunga</strong> (Floral Oriental) - This fragrance is aromatic and sensual. The unique scent of Jasmine expresses the wearer’s inner joy and the emancipation of one’s happiness. Suitable for a sophisticated and classy look.</li><li><strong>Buluh Perindu</strong> (Floral Woody) - This Amber Floral fragrance is as sweet as it is creamy. Aura Pesona is packed with decadent cherry flavour and exotic sweet scent – for the playful and free-spirited.</li><li><strong>Syurga Malam</strong> - Violet, Litchi, Plum, Tuberose, Patchouli, Vanilla, Citrus Limon (Lemon), Peel Oil Citrusnobilis (Mandarin Orange), Peel Oil Canariumiuzonicumgumnonvolatiles.</li><li><strong>Mengundang Cinta </strong>- Orange Blossom, Bergamot, Tuberose, Indian Jasmine, Vanilla, White Musk, Citrus Limon (Lemon), Peel Oil Citrusnobilis (Mandarin Orange), Peel Oil Canariumiuzonicumgumnonvolatiles.</li><li><strong>Seri Pagi</strong> -  Pink Pepper, Saffron, Rose, Cedarwood, Vanilla, Citrus Limon (Lemon), Peel Oil Citrusnobilis (Mandarin Orange), Peel Oil Canariumiuzonicumgumnonvolatiles.</li><li><strong>Permaisuri </strong>- Prunus Avium (Cherry) Oil, Rosa Damescena (Rose) Flower Oil, Vanilla Planifolia (Vanilla) Fruit Oil.</li><li><strong>Tiara&nbsp;</strong>- Citrus Nobilis (Mandarin Orange ) Peel Oil, Gardenia Tahitensis (Gardenia) Flower Oil, Jasminum Officinale (Jasmine) Flower Oil, Santalum Album (Sandalwood) Oil.</li><li><strong>Ratu </strong>- Citrus Nobilis (Mandarin Orange) Peel Oil, Gardenia Tahitensis (Gardenia) Flower Oil, Jasminum Officinale (Jasmine) Flower Oil. </li></ul>
<p><strong>HOW TO USE :</strong></p>
<ul><li>Shake well before use</li><li>Spritz generously onto your wrists, neck and pulse points</li></ul>
<p><strong>NOTES :</strong><br></p>
<p>Avoid direct contact with eyes. If contact occurs, rinse immediately with water. If any irritation develops, discontinue use and consult a doctor if necessary.</p>
<p><br></p>
    `

    useEffect(()=>{
        if(templateContext.templateName === 'default'){
            setDetailProduct({
                name: 'WAWA x ROZYANA Lagenda Cinta (EDP)',
                price: 'MYR15.00',
                discount: 'MYR19.90',
                img: ''
            })
        }else if(templateContext.templateName === 'theme1'){
            setDetailProduct({
                name: 'WAWA TINTED SUNSCREEN',
                price: 'MYR37.00',
                discount: 'MYR40.00',
                img: 'https://img.shoppegram.com/dahlia_qtrstrmwhln68dzlntz3_1080x.jpeg'
            })
        }
    }, [templateContext])

    return (
        <Container>
            {templateContext.templateName === 'default' &&
                <DefaultProductDetail
                    imgPreviews={imgPreviewData}
                    varations={variations}
                    desc={description}
                    img={detailProduct?.img}
                    name={detailProduct?.name}
                    price={detailProduct?.price}
                    discount={detailProduct?.discount}
                />
            }
            {templateContext.templateName === 'theme1' &&
                <ProductDetailTheme1
                    variants={variations}
                    desc={description}
                    img={detailProduct?.img}
                    name={detailProduct?.name}
                    price={detailProduct?.price}
                    discount={detailProduct?.discount}
                />
            }
        </Container>
    )
}