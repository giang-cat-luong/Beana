import React, { Fragment, useState } from "react";
import Bean from "../../components/bean/Bean";
import "./login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faUser, faEnvelope, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";


function Login() {
    const [isSignUpMode, setIsSignUpMode] = useState(false);
    const [isShow, setIsShow] = useState(false);

    const toggleMode = () => {
        setIsSignUpMode(!isSignUpMode);
    };
    const showPassword = () => {
        setIsShow(true);
    };
    const hidePassword = () => {
        setIsShow(false);
    };

    return (
        <Fragment>
            <div className={`container ${isSignUpMode ? "sign-up-mode" : ""}`}>
                <div className="forms-container">
                    <div className="signin-signup">
                        <form action="#" className="sign-in-form">
                            <Bean />
                            <h2 className="title">Sign in</h2>
                            <div className="input-field">
                                <FontAwesomeIcon icon={faUser} color="#acacac" size="lg" fixedWidth className="icon-login" />
                                <input type="text" placeholder="Username" style={{ width: "100%" }} />
                            </div>
                            <div className="input-field">
                                <FontAwesomeIcon icon={faLock} color="#acacac" size="lg" fixedWidth className="icon-login" />
                                <input type={isShow ? "text" : "password"} placeholder="Password" />
                                <div>
                                    {isShow ? (
                                        <FontAwesomeIcon
                                            icon={faEyeSlash}
                                            color="#000"
                                            size="lg"
                                            fixedWidth
                                            onClick={() => hidePassword()}
                                            className="icon-password" />
                                    ) : (
                                        <FontAwesomeIcon
                                            icon={faEye}
                                            color="#000"
                                            size="lg"
                                            fixedWidth
                                            onClick={() => showPassword()}
                                            className="icon-password" />
                                    )}
                                </div>
                            </div>

                            <input type="submit" value="Login" className="btn solid" />
                            <p className="social-text">Or Sign in with social platforms</p>
                            <div className="social-media">
                                <a href="#" className="social-icon">
                                    <img src="/assets/facebook.svg" style={{ width: '40px' }} alt="" />
                                </a>
                                <a href="#" className="social-icon">
                                    <img src="/assets/insta.svg" style={{ width: '40px' }} alt="" />
                                </a>
                                <a href="#" className="social-icon">
                                    <img src="/assets/google.svg" style={{ width: '40px' }} alt="" />
                                </a>
                            </div>
                        </form>
                        <form action="#" className="sign-up-form">
                            <Bean />
                            <h2 className="title">Sign up</h2>
                            <div className="input-field">
                                <FontAwesomeIcon icon={faEnvelope} color="#acacac" size="lg" fixedWidth className="icon-login" />
                                <input type="email" placeholder="Email" style={{ width: "100%" }} />
                            </div>
                            <div className="input-field">
                                <FontAwesomeIcon icon={faUser} color="#acacac" size="lg" fixedWidth className="icon-login" />
                                <input type="text" placeholder="Username" style={{ width: "100%" }} />
                            </div>
                            <div className="input-field">
                                <FontAwesomeIcon icon={faLock} color="#acacac" size="lg" fixedWidth className="icon-login" />
                                <input type={isShow ? "text" : "password"} placeholder="Password" />
                                <div>
                                    {isShow ? (
                                        <FontAwesomeIcon
                                            icon={faEyeSlash}
                                            color="#000"
                                            size="lg"
                                            fixedWidth
                                            onClick={() => hidePassword()}
                                            className="icon-password" />
                                    ) : (
                                        <FontAwesomeIcon
                                            icon={faEye}
                                            color="#000"
                                            size="lg"
                                            fixedWidth
                                            onClick={() => showPassword()}
                                            className="icon-password" />
                                    )}
                                </div>
                            </div>
                            <div className="input-field">
                                <FontAwesomeIcon icon={faLock} color="#acacac" size="lg" fixedWidth className="icon-login" />
                                <input type={isShow ? "text" : "password"} placeholder="Password" />
                                <div>
                                    {isShow ? (
                                        <FontAwesomeIcon
                                            icon={faEyeSlash}
                                            color="#000"
                                            size="lg"
                                            fixedWidth
                                            onClick={() => hidePassword()}
                                            className="icon-password" />
                                    ) : (
                                        <FontAwesomeIcon
                                            icon={faEye}
                                            color="#000"
                                            size="lg"
                                            fixedWidth
                                            onClick={() => showPassword()}
                                            className="icon-password" />
                                    )}
                                </div>
                            </div>
                            <input type="submit" className="btn" value="Sign up" />
                            <p className="social-text">Or Sign up with social platforms</p>
                            <div className="social-media">
                                <a href="#" className="social-icon">
                                    <img src="/assets/facebook.svg" style={{ width: '40px' }} alt="" />
                                </a>
                                <a href="#" className="social-icon">
                                    <img src="/assets/insta.svg" style={{ width: '40px' }} alt="" />
                                </a>
                                <a href="#" className="social-icon">
                                    <img src="/assets/google.svg" style={{ width: '40px' }} alt="" />
                                </a>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="panels-container">
                    <div className="panel left-panel">
                        <div className="content">
                            <h3>Bạn là người mới ?</h3>
                            <p>
                                Đăng kí tải khoản ngay để trải nghiệm dịch vụ quét và chăm sóc da mặt hàng đầu Việt Nam.
                            </p>
                            <button className="btn transparent" onClick={toggleMode}>
                                Đăng ký
                            </button>
                        </div>
                        <img src="/assets/phone.png" className="image" alt="" />
                    </div>
                    <div className="panel right-panel">
                        <div className="content">
                            <h3>Bạn đã có tài khoản ?</h3>
                            <p>
                                Đăng nhập ngay để nhận được ưu đãi và dịch vụ quét và chăm sóc da mặt hàng đầu Việt Nam.
                            </p>
                            <button className="btn transparent" onClick={toggleMode}>
                                Đăng nhập
                            </button>
                        </div>
                        <img
                            src="/assets/phone1.png"
                            style={{ marginRight: "90px" }}
                            className="image"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Login;
