import { BookOpenText } from "lucide-react";

export const Laws = () => {
    return (
        <div className="w-full min-h-screen bg-white text-[#003A6B] px-10 py-5 flex flex-col gap-10 items-center">
            <BookOpenText width={72} height={72} color="#003a6b" />
            <p className="text-5xl font-bold text-center">
                Laws and Regulations
            </p>
            <p className="text-2xl text-center font-medium w-1/2 max-[500px]:w-full">
                Understanding the legal framework is crucial for addressing and
                preventing ragging. The following laws and regulations outline
                the legal consequences and protective measures at both national
                and university levels to ensure a safe and respectful
                environment for all students.
            </p>

            <div className="w-full laws bg-[#003a6b] p-8 text-2xl font-semibold text-white">
                University Grants Commission (UGC) Regulations on Curbing the
                Menace of Ragging in Higher Educational Institutions, 2009
            </div>

            <div className="w-full laws bg-[#003a6b] p-8 text-2xl font-semibold text-white">
                The Indian Penal Code (IPC)
            </div>

            <div className="w-full laws bg-[#003a6b] p-8 text-2xl font-semibold text-white">
                The Protection of Human Rights Act, 1993
            </div>

            <div className="w-full laws bg-[#003a6b] p-8 text-2xl font-semibold text-white">
                The Juvenile Justice (Care and Protection of Children) Act, 2015
            </div>
            <div className="w-full laws bg-[#003a6b] p-8 text-2xl font-semibold text-white">
                University Anti-Ragging Policy
            </div>
            <div className="w-full laws bg-[#003a6b] p-8 text-2xl font-semibold text-white">
                Student Code of Conduct or Handbook
            </div>
        </div>
    );
};
