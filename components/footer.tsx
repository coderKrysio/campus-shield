import { ShieldCheck } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
    return (
        <footer className="w-full bg-[#003A6B] text-white p-10 mt-8 flex flex-col gap-10 items-center">
            <div className="w-full flex gap-10 justify-between items-center max-[750px]:flex-col">
                <Link
                    href={"/"}
                    className="flex items-center text-white max-[500px]:flex-col"
                >
                    <p className="text-3xl font-semibold flex">
                        <ShieldCheck width={36} height={36} /> Campus Shield
                    </p>
                    <p className="ml-2 text-lg leading-tight">
                        Anti-Ragging
                        <br />
                        Awareness
                    </p>
                </Link>

                <div className="flex flex-col gap-2">
                    <Link href={"/"}>Contact Us</Link>
                    <Link href={"/"}>Get Help Now</Link>

                    <Link href={"/"}>Know Your Rights</Link>

                    <Link href={"/"}>Report Ragging</Link>
                </div>
            </div>
            <div className="flex flex-col items-center gap-2 mt-4">
                <span>made with 💛 by coderKrysio</span>
                <span>© All rights reversed {new Date().getFullYear()}</span>
            </div>
        </footer>
    );
};
