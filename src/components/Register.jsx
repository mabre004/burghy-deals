/* eslint-disable react/prop-types */
/* eslint-disable import/first */
// eslint-disable-next-line no-unused-vars
import React, { useCallback, useContext, Component } from "react";
import hands from "./hand.png";
import "./styleReg.css";
import { withRouter, Redirect } from "react-router";
import fireBase from "../config/fire";
import { AuthContext } from "../config/Auth";
import logo_burghy from "./logo_burghy1.png";

// eslint-disable-next-line react/prop-types
const Register = ({ history }) => {
  const signUpUser = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;

      var idx = email.value.lastIndexOf("@");
      if (idx > -1 && email.value.slice(idx + 1) === "plattsburgh.edu") {
        try {
          await fireBase
            .auth()
            .createUserWithEmailAndPassword(email.value, password.value);
          // eslint-disable-next-line react/prop-types
          history.push("/");
        } catch (err) {
          alert(err);
        }
      }
      else {
        window.alert("use ur plattsburgh email")
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div className="App" style={{
      backgroundImage: `url(${hands})`, backgroundPosition: "center",
      backgroundSize: "cover"

    }}>
      <img src={logo_burghy} alt="logo" class="logo" />
      {/* <h1>Log in</h1> */}
      <form onSubmit={signUpUser}>
        <header className="AppHeader">
          <p1 style={{ color: "#80d0c7" }}>Welcome to </p1>
          <p1 style={{ color: "#80d0c7" }}>BurghyDeals</p1>
          <div className="LoginBox">
            <div className="Email">

              <input style={{ height: "40px", width: "470px" }}
                name="email"
                type="email"
                placeholder="Enter your email" />
            </div>
            <div className="Password" >

              <input style={{ height: "40px", width: "470px" }}
                name="password"
                type="password"
                placeholder="Enter your password" />
            </div>
            <button style={{ height: "50px" }} type="submit">Create account</button>
            <button style={{ width: "300px" }} onClick={() => history.push("/login")} label="Action">Already have an account? LogIn</button>


          </div>
        </header>
      </form>
    </div>
  );
};

export default withRouter(Register);