import { PencilRuler } from "lucide-react";
import Link from "next/link";

export const Support = () => {
    return (
        <div className="w-full min-h-screen bg-white text-[#003A6B] px-10 py-8 flex flex-col gap-10 items-center">
            <PencilRuler width={72} height={72} color="#003a6b" />
            <p className="text-5xl font-bold text-center">
                Support and Resources
            </p>
            <p className="text-2xl text-center font-medium w-1/2 max-[500px]:w-full">
                Some valuable external resources where you can learn more about
                anti-ragging measures, support, and legal frameworks.
            </p>
            <Link
                href="https://www.antiragging.in/"
                className="border-2 border-[#003A6B] outline-2 outline outline-offset-4 outline-[#003A6B] w-full py-2 px-3 rounded-xl text-2xl font-semibold hover:bg-[#003a6b] hover:text-white transition-colors"
            >
                1. National Anti-Ragging Helpline
            </Link>
            <Link
                href="https://www.ugc.gov.in/pdfnews/8408691_Step-by-step-guide-on-How-to-fill-Online-Anti-Ragging-Undertaking.pdf"
                className="border-2 border-[#003A6B] outline-2 outline outline-offset-4 outline-[#003A6B] w-full py-2 px-3 rounded-xl text-2xl font-semibold hover:bg-[#003a6b] hover:text-white transition-colors"
            >
                2. University Grants Commission (UGC) Anti-Ragging Portal
            </Link>
            <Link
                href="https://www.legalserviceindia.com/"
                className="border-2 border-[#003A6B] outline-2 outline outline-offset-4 outline-[#003A6B] w-full py-2 px-3 rounded-xl text-2xl font-semibold hover:bg-[#003a6b] hover:text-white transition-colors"
            >
                3. Legal Service India
            </Link>
            <Link
                href="https://www.education.gov.in/major-initiatives"
                className="border-2 border-[#003A6B] outline-2 outline outline-offset-4 outline-[#003A6B] w-full py-2 px-3 rounded-xl text-2xl font-semibold hover:bg-[#003a6b] hover:text-white transition-colors"
            >
                4. Ministry of Education, Government of India
            </Link>
            <Link
                href="https://nhrc.nic.in/"
                className="border-2 border-[#003A6B] outline-2 outline outline-offset-4 outline-[#003A6B] w-full py-2 px-3 rounded-xl text-2xl font-semibold hover:bg-[#003a6b] hover:text-white transition-colors"
            >
                5. National Human Rights Commission (NHRC) of India
            </Link>
            <Link
                href="https://no2ragging.org/"
                className="border-2 border-[#003A6B] outline-2 outline outline-offset-4 outline-[#003A6B] w-full py-2 px-3 rounded-xl text-2xl font-semibold hover:bg-[#003a6b] hover:text-white transition-colors"
            >
                6. Save Education, Save Society (SESS) Anti-Ragging Campaign
            </Link>
        </div>
    );
};
