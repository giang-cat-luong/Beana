import React from "react";
import { Outlet } from "react-router-dom";
import "./home.css";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Slider from "../../components/slider/slider"
import LandingPage from "../home/components/landingPage/landingPage"


export default function Home() {
    return (
        <>
            <div className="bg-[#FAF9F5]">
                <Header />

                <div className="body">
                    <div className="component">
                        <Outlet />
                        <Slider />
                        <LandingPage />
                    </div>
                </div>

                <Footer />
            </div >
        </>
    );
}
