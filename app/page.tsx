'use client'

import Container from "./components/container";
import React, { useContext } from "react"
import { TemplateContext } from "./store/template";
import HomeLayout from "./templates/default/home-layout";
import { ProuductT } from "./types/products";
import HomeLayoutTheme1 from "./templates/theme1/home-layout";

type ImgT = {
  img: string
  path: string
}

export default function Home() {
  const templateContext = useContext(TemplateContext)

  const banners: ImgT[] = [
    {
      img: 'https://img.shoppegram.com/themes/Mk69actaKfIACTADlz9OcdBN5xEwJOBocZMjerSU.png',
      path: '/categories/skincare'
    },
    {
      img: 'https://img.shoppegram.com/themes/zBMjXpYJmRG6XADW8m47u4u4ZyjSFQCGYfCcZuR8.png',
      path: '/categories/cosmetics'
    }
  ]

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

  return (
    <Container>
      {templateContext.templateName == 'default' &&
        <HomeLayout
          banners={banners}
          products={products}
        />
      }
      {templateContext.templateName == 'theme1' &&
        <HomeLayoutTheme1
          products={products}
        />
      }
    </Container>
  );
}
