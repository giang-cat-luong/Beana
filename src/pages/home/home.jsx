import React from "react";
import { Outlet } from "react-router-dom";
import "./home.css";
// import Header from "../../components/header/";
// import Footer from "../../components/footer/footer";

export default function Home() {
    return (
        <>
            {/* <Header /> */}

            <div className="body">
                <div className="component">
                    <Outlet />
                    <h1>hello</h1>
                </div>
            </div>

            {/* <Footer /> */}
        </>
    );
}
