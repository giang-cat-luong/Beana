import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Chat from "./components/Chat/Chat";
import Voucher from "./components/Voucher";

export default function Home() {
    return (
        <>
            <div className="bg-[#FAF9F5]">
                <Header />

                <div className="flex min-h-screen md:pt-[135px] pt-[120px] font-Montserrat">
                    <div className="flex flex-col justify-self-end w-full justify-between mb-[100px]">
                        <Outlet />
                    </div>
                    <div>
                        <Chat />
                        <Voucher />
                    </div>
                </div>

                <Footer />
            </div >
        </>
    );
}
