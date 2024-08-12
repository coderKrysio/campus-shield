import Link from "next/link";
import { HelpingHand, ShieldCheck } from "lucide-react";

export const Header = () => {
    return (
        <nav className="bg-[#003A6B] fixed top-0 left-0 w-full h-16 flex items-center justify-between px-4 z-[10]">
            <Link href={"/"} className="flex items-center text-white">
                <ShieldCheck width={36} height={36} />
                <p className="text-2xl font-semibold">Campus Shield</p>
                <p className="ml-2 text-md leading-tight max-[580px]:hidden">
                    Anti-Ragging
                    <br />
                    Awareness
                </p>
            </Link>

            <button className="flex gap-2 py-2 px-5 font-medium bg-white border-2 border-[#003A6B] rounded-lg hover:bg-[#003A6B] hover:border-white hover:font-semibold hover:text-white transition-colors max-[580px]:hidden">
                <HelpingHand width={24} height={24} strokeWidth={1.5} /> Get
                Help Now
            </button>

            <button className="hidden max-[580px]:flex gap-2 py-2 px-5 font-medium bg-white rounded-lg hover:bg-[#89cff1] hover:font-semibold transition-colors">
                <HelpingHand width={24} height={24} strokeWidth={1.5} />
            </button>
        </nav>
    );
};
