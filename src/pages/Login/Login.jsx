import React, { Fragment, useState, useEffect } from "react";
import "./Login.css";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faUser, faEnvelope, faEye, faEyeSlash, faCalendar, faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useRive, useStateMachineInput } from "@rive-app/react-canvas";
import { useSignin, useSignup } from '../../services/Auth/services'
import Datepicker from "tailwind-datepicker-react"

const options = {
    title: "Chọn ngày sinh",
    autoHide: true,
    todayBtn: true,
    clearBtn: true,
    clearBtnText: "Clear",
    maxDate: new Date("2030-01-01"),
    minDate: new Date("1950-01-01"),
    theme: {
        background: "bg-gray-700 dark:bg-gray-800",
        todayBtn: "",
        clearBtn: "",
        icons: "",
        text: "",
        disabledText: "bg-red-500",
        input: "",
        inputIcon: "",
        selected: "",
    },
    icons: {
        // () => ReactElement | JSX.Element
        prev: () => <FontAwesomeIcon
            icon={faArrowLeft}
            color="#fff"
            size="1x"
            fixedWidth />,
        next: () => <FontAwesomeIcon
            icon={faArrowRight}
            color="#fff"
            size="1x"
            fixedWidth />,
    },
    datepickerClassNames: "top-12",
    defaultDate: new Date("2022-01-01"),
    language: "vie",
    disabledDates: [],
    weekDays: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
    inputNameProp: "date",
    inputIdProp: "date",
    inputPlaceholderProp: "Select Date",
    inputDateFormatProp: {
        day: "numeric",
        month: "long",
        year: "numeric"
    }
}



function Login({ props }) {



    const [isSignUpMode, setIsSignUpMode] = useState(false);
    const [isShow, setIsShow] = useState(false);
    const [isShowConfirm, setIsShowConfirm] = useState(false);

    //handle date
    const [show, setShow] = useState(false);

    const handleChange = (selectedDate) => {
        setSelectedDate(new Intl.DateTimeFormat().format(selectedDate))
        console.log(new Intl.DateTimeFormat().format(selectedDate))
    }
    const handleClose = (state) => {
        setShow(state)
    }

    //signup
    const [signupUsername, setSignupUsername] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [selectedDate, setSelectedDate] = useState(null)
    const [gender, setGender] = useState("");
    const [signgupPassword, setSignupPassword] = useState("");
    console.log(gender)
    // signin
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const { mutate: mutateSignin } = useSignin();
    const { mutate: mutateSignup } = useSignup();

    const handleSignUp = (e) => {
        e.preventDefault();
        try {
            mutateSignup({
                username: signupUsername,
                name: name,
                email: email,
                phone: phone,
                gender: gender,
                dob: selectedDate,
                password: signgupPassword,
            });
        } catch (error) {
            console.error(error);
        }
    };
    const handleSignIn = (e) => {
        e.preventDefault();
        try {
            mutateSignin({ username, password });
        } catch (error) {
            console.error(error);
        }
    };

    const checkLogin = (username, pass) => {
        return username === "user" && pass === "password"
    }
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


    const STATE_MACHINE_NAME = "Enter";

    const { rive, RiveComponent } = useRive({
        src: "/assets/bean_animation1.riv",
        stateMachines: STATE_MACHINE_NAME,
        autoplay: true,
    });

    useEffect(() => {
        setLook();
    }, [username])

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
        if (username) {
            nbChars = parseFloat(username.split('').length);
        }

        let ratio = nbChars / parseFloat(15);
        let lookToSet = ratio * 100 - 25
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
        // console.log(rive.contents);
    }


    return (
        <Fragment>
            <div className={`container ${isSignUpMode ? props && "sign-up-mode" : props}`}>
                <div className="forms-container">
                    <div className="signin-signup">
                        <form action="#" className="sign-in-form" onSubmit={handleSignIn}>
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
                                    onChange={(event) => setUsername(event.target.value)}
                                    value={username || ""}
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
                                    if (checkLogin(username, password)) {
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

                        <form action="#" className="sign-up-form" onSubmit={handleSignUp}>
                            <div className="title-signup">Đăng Ký</div>
                            <div className="grid grid-cols-2 gap-3">
                                <div className="">
                                    <div className="input-field">
                                        <FontAwesomeIcon icon={faEnvelope} color="#acacac" size="lg" fixedWidth className="icon-login" />
                                        <input
                                            type="email"
                                            placeholder="Email"
                                            style={{ width: "100%" }}
                                            onChange={(event) => setEmail(event.target.value)}
                                            value={email || ""}
                                        />
                                    </div>
                                    <div className="input-field">
                                        <FontAwesomeIcon icon={faUser} color="#acacac" size="lg" fixedWidth className="icon-login" />
                                        <input
                                            type="text"
                                            placeholder="Name"
                                            style={{ width: "100%" }}
                                            onChange={(event) => setName(event.target.value)}
                                            value={name || ""}
                                        />
                                    </div>
                                    <div className="input-field">
                                        <FontAwesomeIcon icon={faUser} color="#acacac" size="lg" fixedWidth className="icon-login" />
                                        <input
                                            type="text"
                                            placeholder="Username"
                                            style={{ width: "100%" }}
                                            onChange={(event) => setSignupUsername(event.target.value)}
                                            value={signupUsername || ""}
                                        />
                                    </div>
                                    <div className="input-field">
                                        <FontAwesomeIcon icon={faUser} color="#acacac" size="lg" fixedWidth className="icon-login" />
                                        <input
                                            type="text"
                                            placeholder="Phone"
                                            style={{ width: "100%" }}
                                            onChange={(event) => setPhone(event.target.value)}
                                            value={phone || ""}
                                        />
                                    </div>
                                </div>
                                <div className="">
                                    <div className="input-field">
                                        <FontAwesomeIcon icon={faUser} color="#acacac" size="lg" fixedWidth className="icon-login" />

                                        <select className="bg-[#f0f0f0] outline-none focus-within:bg-white pl-4" name="cars" style={{ width: "100%" }} >
                                            <option value="0" className="">Nam</option>
                                            <option value="1">Nữ</option>
                                        </select>
                                    </div>
                                    <div className="input-field">
                                        <div className="...">
                                            <Datepicker options={options} onChange={handleChange} show={show} setShow={handleClose}>
                                                <FontAwesomeIcon icon={faCalendar} size="lg" color="#acacac" className="icon-login" />
                                            </Datepicker>
                                        </div>
                                        <input type="text"
                                            className="ml-1"
                                            placeholder="Select Date"
                                            value={selectedDate || ""}
                                            onFocus={() => setShow(true)}
                                            readOnly />
                                    </div>
                                    <div className="input-field">
                                        <FontAwesomeIcon icon={faLock} color="#acacac" size="lg" fixedWidth className="icon-login" />
                                        <input
                                            type={isShow ? "text" : "password"}
                                            placeholder="Password"
                                            value={signgupPassword || ""}
                                            onChange={(event) => setSignupPassword(event.target.value)}
                                        />
                                        <div className="relative">
                                            {isShow ? (
                                                <FontAwesomeIcon
                                                    icon={faEyeSlash}
                                                    color="#000"
                                                    size="lg"
                                                    fixedWidth
                                                    onClick={() => hidePassword()}
                                                    className="pt-4 absolute left-[-40px]" />
                                            ) : (
                                                <FontAwesomeIcon
                                                    value={password || ""}
                                                    icon={faEye}
                                                    color="#000"
                                                    size="lg"
                                                    fixedWidth
                                                    onClick={() => showPassword()}
                                                    className="pt-4 absolute left-[-40px]" />
                                            )}
                                        </div>
                                    </div>
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
