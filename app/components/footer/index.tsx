'use client'

import { useContext } from "react";
import Container from "../container";
import { FooterDataT } from "@/app/types/footer";
import { TemplateContext } from "@/app/store/template";
import DefaultFooter from "@/app/templates/default/footer";
import FooterTheme1 from "@/app/templates/theme1/footer";

type MenuFooterT = {
    title: string
    children: {
        name: string
        path: string
    }[]
}

type CurrencyT = {
    name: string
    value: string
}

export default function Footer() {
    const templateContext = useContext(TemplateContext)

    const footerData: FooterDataT = {
        copyRight: '© 2024 Wawa Cosmetics Store. All rights reserved.',
        poweredBy: 'Shoppegram',
        poweredHref: 'https://shoppegram.com',
        facebookHref: 'https://www.facebook.com/Wawa-Cosmetics-by-Wawa-Zainal-107461044721431'
    }

    // footer theme1 demo
    const menuFooter: MenuFooterT[] = [
        {
            title: 'Saleor',
            children: [
                {
                    name: 'About',
                    path: '/'
                },
                {
                    name: 'Documentation',
                    path: '/'
                }
            ]
        },
        {
            title: 'Collections',
            children: [
                {
                    name: 'Featured Products',
                    path: '/'
                },
                {
                    name: 'Summer Picks',
                    path: '/'
                }
            ]
        },
    ]
    const currency: CurrencyT[] = [
        {
            name: 'AUD',
            value: 'aud'
        },
        {
            name: 'BRL',
            value: 'brl'
        },
        {
            name: 'CAD',
            value: 'cad'
        },
        {
            name: 'USD',
            value: 'usd'
        },
        {
            name: 'EUR',
            value: 'eur'
        },
        {
            name: 'GBP',
            value: 'gbp'
        },
        {
            name: 'INR',
            value: 'inr'
        },
        {
            name: 'JPY',
            value: 'jpy'
        },
        {
            name: 'PLN',
            value: 'pln'
        },
        {
            name: 'SAR',
            value: 'sar'
        },
    ]

    return (
        <>
            {templateContext.templateName === 'default' &&
                <Container>
                    <DefaultFooter
                        copyRight={footerData.copyRight}
                        facebookHref={footerData.facebookHref}
                        poweredBy={footerData.poweredBy}
                        poweredHref={footerData.poweredHref}
                    />
                </Container>
            }
            {templateContext.templateName === 'theme1' &&
                <FooterTheme1 
                    menu={menuFooter}
                    copyRight={footerData.copyRight}
                    poweredBy={footerData.poweredBy}
                    poweredHref={footerData.poweredHref}
                    currencys={currency}
                />
            }
        </>
    )
}