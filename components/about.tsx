import {
    HandHeart,
    HeartPulse,
    Library,
    Scale,
    School,
    ShieldPlus,
    Tablets,
} from "lucide-react";
import { Fade, Slide } from "react-awesome-reveal";

export const About = () => {
    return (
        <div className="w-full min-h-screen bg-white py-8 flex flex-col gap-10 items-center">
            <Fade className="text-5xl font-bold text-center text-[#003A6B]">
                Why stop Ragging?
            </Fade>
            <Slide direction="up" triggerOnce>
                <div className="relative px-10 md:px-4">
                    <div className="bg-[#1B5886] text-white p-12 rounded-t-xl md:p-5">
                        <p className="text-2xl text-center font-medium">
                            Ragging is a form of harassment where senior
                            students{" "}
                            <span className="text-3xl text-yellow-400">
                                intimidate, bully, or physically or mentally
                                abuse
                            </span>{" "}
                            new students, often under the guise of an initiation
                            ritual. It can range from mild teasing to severe
                            abuse, creating a{" "}
                            <span className="text-3xl text-yellow-400">
                                hostile and unsafe environment for those
                                targeted.
                            </span>
                        </p>
                    </div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1440 320"
                    >
                        <path
                            fill="#1B5886"
                            fill-opacity="1"
                            d="M0,288L12.6,250.7C25.3,213,51,139,76,90.7C101.1,43,126,21,152,53.3C176.8,85,202,171,227,186.7C252.6,203,278,149,303,154.7C328.4,160,354,224,379,218.7C404.2,213,429,139,455,144C480,149,505,235,531,224C555.8,213,581,107,606,64C631.6,21,657,43,682,42.7C707.4,43,733,21,758,48C783.2,75,808,149,834,181.3C858.9,213,884,203,909,165.3C934.7,128,960,64,985,37.3C1010.5,11,1036,21,1061,74.7C1086.3,128,1112,224,1137,261.3C1162.1,299,1187,277,1213,250.7C1237.9,224,1263,192,1288,170.7C1313.7,149,1339,139,1364,133.3C1389.5,128,1415,128,1427,128L1440,128L1440,0L1427.4,0C1414.7,0,1389,0,1364,0C1338.9,0,1314,0,1288,0C1263.2,0,1238,0,1213,0C1187.4,0,1162,0,1137,0C1111.6,0,1086,0,1061,0C1035.8,0,1011,0,985,0C960,0,935,0,909,0C884.2,0,859,0,834,0C808.4,0,783,0,758,0C732.6,0,707,0,682,0C656.8,0,632,0,606,0C581.1,0,556,0,531,0C505.3,0,480,0,455,0C429.5,0,404,0,379,0C353.7,0,328,0,303,0C277.9,0,253,0,227,0C202.1,0,177,0,152,0C126.3,0,101,0,76,0C50.5,0,25,0,13,0L0,0Z"
                        ></path>
                    </svg>
                    <div className="absolute bottom-0 right-0 max-[700px]:bottom-[-50px]">
                        <iframe
                            className="w-[250px] h-[250px]"
                            src="https://lottie.host/embed/d4281cdf-cd87-42ad-907a-835e330f180d/BoLMpXuxWZ.json"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        ></iframe>
                    </div>
                </div>
            </Slide>
            <Fade className="text-4xl font-bold text-[#003A6B] text-center">
                Impact on Students
            </Fade>
            <Fade triggerOnce>
                <div className="w-full flex justify-between text-center gap-10 px-10 max-[1000px]:flex-wrap">
                    <div className="w-full bg-slate-200 p-10 rounded-xl">
                        <div className="font-semibold text-3xl flex gap-3 flex-col items-center justify-between">
                            <HeartPulse
                                width={72}
                                height={72}
                                strokeWidth={1.5}
                            />
                            Psychological Trauma
                        </div>
                    </div>
                    <div className="w-full bg-slate-200 p-10 rounded-xl">
                        <div className="font-semibold text-3xl flex gap-3 flex-col items-center justify-between">
                            <Library width={72} height={72} strokeWidth={1.5} />
                            Academic Disruption
                        </div>
                    </div>
                    <div className="w-full bg-slate-200 p-10 rounded-xl">
                        <div className="font-semibold text-3xl flex gap-3 flex-col items-center justify-between">
                            <Tablets width={72} height={72} strokeWidth={1.5} />
                            Physical Harm
                        </div>
                    </div>
                </div>
            </Fade>
            <div className="prevention-box bg-[#89CFF1] w-full py-20 px-6 flex flex-col justify-center items-center gap-5 text-[#003A6B]">
                <Fade className="text-4xl font-bold text-center">
                    Why It Is Important to Prevent Ragging
                </Fade>
                <Fade triggerOnce>
                    <div className="w-full flex justify-center gap-10 max-[1200px]:flex-wrap">
                        <div className="w-full">
                            <div className="w-full bg-white p-10 rounded-t-xl">
                                <div className="font-semibold text-3xl text-center flex gap-3 flex-col items-center justify-between">
                                    <ShieldPlus
                                        width={72}
                                        height={72}
                                        strokeWidth={1.5}
                                    />
                                    Protects Student Safety and Well-being
                                </div>
                            </div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 1440 320"
                            >
                                <path
                                    fill="#fff"
                                    fill-opacity="1"
                                    d="M0,160L40,133.3C80,107,160,53,240,69.3C320,85,400,171,480,181.3C560,192,640,128,720,101.3C800,75,880,85,960,85.3C1040,85,1120,75,1200,106.7C1280,139,1360,213,1400,250.7L1440,288L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
                                ></path>
                            </svg>
                        </div>

                        <div className="w-full">
                            <div className="w-full bg-white p-10 rounded-t-xl">
                                <div className="font-semibold text-3xl text-center flex gap-3 flex-col items-center justify-between">
                                    <School
                                        width={72}
                                        height={72}
                                        strokeWidth={1.5}
                                    />
                                    Promotes a Positive Campus Culture
                                </div>
                            </div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 1440 320"
                            >
                                <path
                                    fill="#fff"
                                    fill-opacity="1"
                                    d="M0,288L40,250.7C80,213,160,139,240,90.7C320,43,400,21,480,58.7C560,96,640,192,720,213.3C800,235,880,181,960,186.7C1040,192,1120,256,1200,256C1280,256,1360,192,1400,160L1440,128L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
                                ></path>
                            </svg>
                        </div>

                        <div className="w-full">
                            <div className="w-full bg-white p-10 rounded-t-xl">
                                <div className="font-semibold text-3xl text-center flex gap-3 flex-col items-center justify-between">
                                    <Scale
                                        width={72}
                                        height={72}
                                        strokeWidth={1.5}
                                    />
                                    Ensures Legal Compliance
                                </div>
                            </div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 1440 320"
                            >
                                <path
                                    fill="#fff"
                                    fill-opacity="1"
                                    d="M0,224L40,208C80,192,160,160,240,122.7C320,85,400,43,480,42.7C560,43,640,85,720,122.7C800,160,880,192,960,213.3C1040,235,1120,245,1200,261.3C1280,277,1360,299,1400,309.3L1440,320L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
                                ></path>
                            </svg>
                        </div>

                        <div className="w-full">
                            <div className="w-full bg-white p-10 rounded-t-xl">
                                <div className="font-semibold text-3xl text-center flex gap-3 flex-col items-center justify-between">
                                    <HandHeart
                                        width={72}
                                        height={72}
                                        strokeWidth={1.5}
                                    />
                                    Fosters Mutual Respect and Inclusion
                                </div>
                            </div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 1440 320"
                            >
                                <path
                                    fill="#fff"
                                    fill-opacity="1"
                                    d="M0,256L40,245.3C80,235,160,213,240,186.7C320,160,400,128,480,144C560,160,640,224,720,250.7C800,277,880,267,960,256C1040,245,1120,235,1200,197.3C1280,160,1360,96,1400,64L1440,32L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
                                ></path>
                            </svg>
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    );
};
