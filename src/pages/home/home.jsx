import React from "react";
import { Outlet } from "react-router-dom";
import "./home.css";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Slider from "../../components/slider/slider"

export default function Home() {
    return (
        <>
            <Header />

            <div className="body">
                <div className="component">
                    <Outlet />
                    <Slider />
                </div>
            </div>

            <Footer />
        </>
    );
}
