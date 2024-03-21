import Iconify from "@/app/components/Iconify";
import { FooterDataT } from "@/app/types/footer";
import { Typography } from "@material-tailwind/react";
import Link from "next/link";

type Props = FooterDataT

export default function DefaultFooter({
    copyRight,
    poweredBy,
    facebookHref,
    poweredHref
}: Props) {
    return (
        <footer className="flex flex-col justify-center w-full">
            <div className="flex mx-auto w-[50px] h-[2px] bg-black mb-4">

            </div>
            <Link
                href={facebookHref as string}
                className="mx-auto py-3"
            >
                <Iconify
                    icon="basil:facebook-outline"
                    height={20}
                    width={20}
                />
            </Link>
            <div className="flex flex-wrap mx-auto mb-4">
                <Typography
                    placeholder=""
                    onPointerEnterCapture=""
                    onPointerLeaveCapture=""
                    className="text-[0.8rem] font-apple-system font-normal text-center"
                >
                    {copyRight}
                </Typography>
                <Typography
                    placeholder=""
                    onPointerEnterCapture=""
                    onPointerLeaveCapture=""
                    className="flex text-[0.8rem] font-apple-system font-normal"
                >
                    Powered by
                    <Link
                        href={poweredHref}
                        className="transition-all hover:text-gray-800 ml-1 text-center"
                    >
                        {poweredBy}
                    </Link>
                </Typography>
            </div>
        </footer>
    )
}