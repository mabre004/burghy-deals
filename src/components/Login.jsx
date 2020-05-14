/* eslint-disable react/prop-types */
/* eslint-disable import/first */
// eslint-disable-next-line no-unused-vars
import React, { useCallback, useContext, Component } from "react";
export { Login } from "./Login";
import hands from "./hand.png";
import logo_burghy from "./logo_burghy1.png";
// import home from "./Home";
import { withRouter, Redirect } from "react-router";
import fireBase from "../config/fire";
import { AuthContext } from "../config/Auth";
import "./styleLogin.css";

// eslint-disable-next-line react/prop-types
const Login = ({ history }) => {
    const loginUser = useCallback(
        async event => {
            event.preventDefault();
            const { email, password } = event.target.elements;
            try {
                await fireBase
                    .auth()
                    .signInWithEmailAndPassword(email.value, password.value);
                // eslint-disable-next-line react/prop-types
                history.push("/");
            } catch (err) {
                alert(err);
            }
        },
        [history]
    );

    const { currentUser } = useContext(AuthContext);

    if (currentUser) {
        return <Redirect to="/home" />;
    }

    return (
        <div className="App" style={{
            // backgroundImage: `url(${hands})`, backgroundPosition: "center",
            // backgroundSize: "cover"
            backgroundColor: "gray",
            backgroundSize: "cover"

        }}>
            <img src={logo_burghy} alt="logo" class="logo" />

            {/* <h1>Log in</h1> */}
            <form onSubmit={loginUser}>
                <header className="Appheader">
                    <p1 style={{ color: "#80d0c7" }}> Welcome to </p1>
                    <p1 style={{ color: "#80d0c7" }}>BurghyDeals</p1>
                    <div className="LoginBox">
                        <div className="Email">

                            <input style={{ height: "40px", width: "470px" }}
                                name="email"
                                type="email"
                                placeholder="Login with your email" />
                        </div>
                        <div className="Password" >

                            <input style={{ height: "40px", width: "470px" }}
                                name="password"
                                type="password"
                                placeholder="Enter your password" />
                        </div>
                        <button type="submit">Log in</button>
                        <button onClick={() => history.push("/register")}
                            label="Action" style={{
                                height: "50px"

                            }}>Create an account</button>

                    </div>
                </header>
            </form>

        </div>
    );



};
export default withRouter(Login);