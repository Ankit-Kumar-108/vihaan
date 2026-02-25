"use client"
import Footer from "@/app/components/footer/footer";
import Nav from "@/app/components/nav/nav";
import { useParams } from "next/navigation";

export default function Page () {
    const param = useParams()
    return (

        <div className="w-dvw h-dvh bg-background-light dark:bg-background-dark">
            <Nav/>
            <div className="h-[82%] w-full flex justify-center items-center">
            <h1 className="font-bold text-4xl text-slate-400 dark:text-white"> {param.id} is coming soon.... </h1>
            </div>
            <Footer/>
        </div>

    )
}