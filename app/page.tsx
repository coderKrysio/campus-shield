"use client";
import { About } from "@/components/about";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Landing } from "@/components/landing";
import { Laws } from "@/components/laws";
import { Support } from "@/components/support";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between pt-16">
            <Header />
            <Landing />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                    fill="#003A6B"
                    fill-opacity="1"
                    d="M0,32L12,64C24,96,48,160,72,202.7C96,245,120,267,144,240C168,213,192,139,216,112C240,85,264,107,288,117.3C312,128,336,128,360,106.7C384,85,408,43,432,32C456,21,480,43,504,64C528,85,552,107,576,117.3C600,128,624,128,648,112C672,96,696,64,720,74.7C744,85,768,139,792,170.7C816,203,840,213,864,229.3C888,245,912,267,936,234.7C960,203,984,117,1008,90.7C1032,64,1056,96,1080,117.3C1104,139,1128,149,1152,154.7C1176,160,1200,160,1224,154.7C1248,149,1272,139,1296,112C1320,85,1344,43,1368,74.7C1392,107,1416,213,1428,266.7L1440,320L1440,0L1428,0C1416,0,1392,0,1368,0C1344,0,1320,0,1296,0C1272,0,1248,0,1224,0C1200,0,1176,0,1152,0C1128,0,1104,0,1080,0C1056,0,1032,0,1008,0C984,0,960,0,936,0C912,0,888,0,864,0C840,0,816,0,792,0C768,0,744,0,720,0C696,0,672,0,648,0C624,0,600,0,576,0C552,0,528,0,504,0C480,0,456,0,432,0C408,0,384,0,360,0C336,0,312,0,288,0C264,0,240,0,216,0C192,0,168,0,144,0C120,0,96,0,72,0C48,0,24,0,12,0L0,0Z"
                ></path>
            </svg>
            <About />
            <Laws />
            <Support />
            <Footer />
        </main>
    );
}
