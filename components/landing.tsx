import { Scale, ShieldCheck, TriangleAlert } from "lucide-react";

export const Landing = () => {
    return (
        <div className="w-full min-h-screen bg-[#003A6B] text-white px-10 flex gap-10 justify-between items-center max-[850px]:flex-wrap max-[850px]:py-10">
            <div className="w-full flex flex-col gap-4">
                <div className="flex items-center">
                    <ShieldCheck width={56} height={56} />
                    <p className="text-5xl font-bold">Campus Shield</p>
                </div>
                <p className="font-medium text-2xl">Anti-Ragging Awareness</p>
                <p>
                    Ragging endangers student safety and well-being. This
                    website raises awareness, educates on anti-ragging laws, and
                    promotes a respectful, safe campus. Our goal is a secure and
                    inclusive environment for all students.
                </p>
                <div className="flex gap-5 mt-3 max-[850px]:flex-wrap">
                    <button className="bg-white text-black rounded-lg py-2 px-5 flex gap-2 items-center text-lg font-medium w-fit hover:bg-transparent hover:text-white hover:font-semibold border-4 border-transparent hover:border-white transition-colors">
                        <Scale width={26} height={26} />
                        Know Your Rights
                    </button>
                    <button className="bg-red-600 rounded-lg py-2 px-5 flex gap-2 items-center text-lg font-medium w-fit hover:bg-white hover:text-red-600 hover:font-semibold transition-colors">
                        <TriangleAlert width={26} height={26} />
                        Report Ragging
                    </button>
                </div>
            </div>
            <div className="w-full flex items-center justify-center">
                <iframe
                    className="w-[550px] h-[550px]"
                    src="https://lottie.host/embed/14f8cd67-14d0-4171-be2c-3aa34a530e05/h8u9S4KIFp.json"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
            </div>
        </div>
    );
};
