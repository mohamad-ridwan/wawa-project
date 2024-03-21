import Link from "next/link";

export default function DefaultTopBar() {
    return (
        <div className="sm:flex hidden w-screen justify-center p-2 bg-[#bf0300]">
            <Link
                href={'/caregories/cosmetics'}
                className="text-[0.7rem] text-white font-apple-system font-[400] text-center"
            >
                FREE SHIPPING FOR ORDER OVER RM130!
            </Link>
        </div>
    )
}