import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Chat from "./components/Chat/Chat";
import Voucher from "./components/Voucher";
import LandingPage from "../LandingPage";

export default function Home() {
    const location = useLocation();
    const path = location.pathname
    return (
        <>
            <div className="bg-[#FAF9F5]">
                <Header />
                <div className="flex min-h-screen md:pt-[135px] pt-[120px] font-NotoSans">
                    <div className="flex flex-col justify-self-end w-full justify-between mb-[60px]">
                        {path === "/" ?
                            <LandingPage />
                            :
                            <Outlet />
                        }
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
