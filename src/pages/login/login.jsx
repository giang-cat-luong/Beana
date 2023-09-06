import "./login.css"
import { Fragment } from "react";
import Rive from "@rive-app/react-canvas";
import Bean from "../../components/bean/Bean";

function Login() {

    return (
        <Fragment>
           
            <img class="wave" src="/assets/wave.png" />
            <div class="container">
                <div class="img-phone">
                    <img src="/assets/phone.png" />
                </div>
                <div class="login-content">
                    <form action="index.html">
                        <div class="bg-div">
                             <Bean />
                            <h2 class="title">Welcome</h2>
                        </div>
                        <div class="input-div one">
                            <div class="i">
                                <i class="fas fa-user"></i>
                            </div>
                            <div class="div">
                                <h5>Username</h5>
                                <input type="text" class="input" />
                            </div>
                        </div>
                        <div class="input-div pass">
                            <div class="i">
                                <i class="fas fa-lock"></i>
                            </div>
                            <div class="div">
                                <h5>Password</h5>
                                <input type="password" class="input" />
                            </div>
                        </div>
                        <a href="#">Forgot Password?</a>
                        <input type="submit" class="btn" value="Login" />
                    </form>
                </div>
            </div>
        </Fragment>
    );

};

export default Login;