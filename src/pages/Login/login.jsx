import React, { Fragment, useState, useEffect } from "react";
import "./login.css";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faUser, faEnvelope, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useRive, useStateMachineInput } from "@rive-app/react-canvas";



function Login({ props }) {

    const [isSignUpMode, setIsSignUpMode] = useState(false);
    const [isShow, setIsShow] = useState(false);
    const [isShowConfirm, setIsShowConfirm] = useState(false);


    //toggle sign up or sign in mode
    const toggleMode = () => {
        setIsSignUpMode(!isSignUpMode);
    };

    //show password or hide password
    const showPassword = () => {
        setIsShow(true);
    };
    const hidePassword = () => {
        setIsShow(false);
    };
    const showPasswordConfirm = () => {
        setIsShowConfirm(true);
    };
    const hidePasswordConfirm = () => {
        setIsShowConfirm(false);
    };

    //rive animation for bean
    const [user, setUser] = useState(null);
    const [password, setPassword] = useState(null);

    const STATE_MACHINE_NAME = "Enter";

    const { rive, RiveComponent } = useRive({
        src: "/assets/bean_animation1.riv",
        stateMachines: STATE_MACHINE_NAME,
        autoplay: true,
    });

    useEffect(() => {
        setLook();
    }, [user])

    const stateSuccess = useStateMachineInput(
        rive,
        STATE_MACHINE_NAME,
        'success'
    )
    const stateFail = useStateMachineInput(
        rive,
        STATE_MACHINE_NAME,
        'fail'
    )
    const stateHandUp = useStateMachineInput(
        rive,
        STATE_MACHINE_NAME,
        'hands_up'
    )

    const stateCheck = useStateMachineInput(
        rive,
        STATE_MACHINE_NAME,
        'Check'
    )
    const stateLook = useStateMachineInput(
        rive,
        STATE_MACHINE_NAME,
        'Look'
    )
    const stateGlance = useStateMachineInput(
        rive,
        STATE_MACHINE_NAME,
        'glance'
    )


    const triggerSuccess = () => {
        stateSuccess && stateSuccess.fire();
    }
    const triggerFail = () => {
        stateFail && stateFail.fire();
    }


    const setHangUp = (hangUp) => {
        stateHandUp && (stateHandUp.value = hangUp);
    }

    const setLook = () => {
        if (!stateLook || !stateCheck || !setHangUp || !setGlance) {
            return;
        }
        setGlance(false)
        setHangUp(false)
        setCheck(true);
        let nbChars = 0;
        if (user) {
            nbChars = parseFloat(user.split('').length);
        }

        let ratio = nbChars / parseFloat(15);
        console.log("ratio " + ratio);

        let lookToSet = ratio * 100 - 25
        console.log("lookToSet " + Math.round(lookToSet));
        stateLook.value = Math.round(lookToSet);
    }
    const setCheck = (check) => {
        if (stateCheck) {
            stateCheck.value = check;
        }

    }
    const setGlance = (glance) => {
        if (stateGlance) {
            stateGlance.value = glance;
        }

    }





    if (rive) {
        console.log(rive.contents);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    const checkLogin = (user, pass) => {
        return user === "user" && pass === "password"
    }

    return (
        <Fragment>
            <div className={`container ${isSignUpMode ? props && "sign-up-mode" : props}`}>
                <div className="forms-container">
                    <div className="signin-signup">
                        <form action="#" className="sign-in-form" onSubmit={handleSubmit}>
                            <div className="RiveContainer">
                                <RiveComponent src="/assets/bean_animation1.riv" />
                            </div>
                            <div className="title-signin">Đăng Nhập</div>
                            <div className="input-field">
                                <FontAwesomeIcon icon={faUser} color="#acacac" size="lg" fixedWidth className="icon-login" />
                                <input
                                    onFocus={() => {
                                        setCheck(true);
                                        setGlance(false)
                                        setHangUp(false);
                                    }}
                                    onBlur={() => setCheck(false)}
                                    onChange={(event) => setUser(event.target.value)}
                                    value={user || ""}
                                    type="text"
                                    placeholder="Username"
                                    style={{ width: "100%" }}
                                />
                            </div>
                            <div className="input-field">
                                <FontAwesomeIcon icon={faLock} color="#acacac" size="lg" fixedWidth className="icon-login" />
                                <input
                                    onChange={(event) => {
                                        setHangUp(true);
                                        setPassword(event.target.value);
                                    }}
                                    onFocus={() => setHangUp(true)}
                                    // onBlur={() => setHangUp(false)}
                                    //onE
                                    value={password || ""}
                                    type={isShow ? "text" : "password"}
                                    placeholder="Password"
                                />
                                <div>
                                    {isShow ? (
                                        <FontAwesomeIcon
                                            icon={faEyeSlash}
                                            color="#000"
                                            size="lg"
                                            fixedWidth
                                            onClick={() => {
                                                hidePassword();
                                                setHangUp(true);
                                                setGlance(false);
                                            }}
                                            className="icon-password" />
                                    ) : (
                                        <FontAwesomeIcon
                                            icon={faEye}
                                            color="#000"
                                            size="lg"
                                            fixedWidth
                                            onClick={() => {
                                                showPassword();
                                                setHangUp(true);
                                                setGlance(true);
                                            }}
                                            className="icon-password" />
                                    )}
                                </div>
                            </div>
                            <a href="#" className="forgot-password">
                                <p >Bạn quên mật khẩu?</p>
                            </a>
                            <button
                                onMouseOver={() => {
                                    setGlance(false)
                                    setHangUp(false)
                                }}
                                onFocus={() => setHangUp(false)}
                                onClick={() => {
                                    setCheck(false);
                                    if (checkLogin(user, password)) {
                                        triggerSuccess()
                                    } else {
                                        triggerFail();
                                    }
                                }}
                                type="submit"
                                value="Login"
                                className="btn solid"
                            >Đăng Nhập</button>
                            <p className="social-text">Hoặc đăng nhập bằng các nền tảng</p>
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

                        <form action="#" className="sign-up-form" >
                            <div className="title-signup">Đăng Ký</div>
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
                                            value={password || ""}
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
                                <input type={isShowConfirm ? "text" : "password"} placeholder="Confirm Password" />
                                <div>
                                    {isShowConfirm ? (
                                        <FontAwesomeIcon
                                            icon={faEyeSlash}
                                            color="#000"
                                            size="lg"
                                            fixedWidth
                                            onClick={() => hidePasswordConfirm()}
                                            className="icon-password" />
                                    ) : (
                                        <FontAwesomeIcon
                                            icon={faEye}
                                            color="#000"
                                            size="lg"
                                            fixedWidth
                                            onClick={() => showPasswordConfirm()}
                                            className="icon-password" />
                                    )}
                                </div>
                            </div>
                            <input
                                type="submit"
                                className="btn"
                                value="Sign up"
                            />

                            <p className="social-text">Hoặc đăng nhập bằng các nền tảng</p>
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
                            <h3>Bạn mới biết đến Beana ?</h3>
                            <p>
                                Đăng kí tải khoản ngay để trải nghiệm dịch vụ quét và chăm sóc da mặt hàng đầu Việt Nam.
                            </p>
                            <Link to="/signup">
                                <button className="btn transparent" onClick={toggleMode}>
                                    Đăng ký
                                </button>
                            </Link>
                        </div>
                        <img src="/assets/phone.png" className="image" alt="" />
                    </div>
                    <div className="panel right-panel">
                        <div className="content">
                            <h3>Bạn đang là thành viên của Beana ?</h3>
                            <p>
                                Đăng nhập ngay để nhận được ưu đãi và dịch vụ quét và chăm sóc da mặt hàng đầu Việt Nam.
                            </p>
                            <Link to="/login">
                                <button className="btn transparent" onClick={toggleMode}>
                                    Đăng nhập
                                </button>
                            </Link>
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
        </Fragment >
    );
}

export default Login;
