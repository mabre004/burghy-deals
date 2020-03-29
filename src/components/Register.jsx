/* eslint-disable react/prop-types */
/* eslint-disable import/first */
// eslint-disable-next-line no-unused-vars
import React, { useCallback, useContext, Component } from "react";
import hands from "./hand.png";
import "./styleReg.css";
import { withRouter, Redirect } from "react-router";
import fireBase from "../config/fire";
import { AuthContext } from "../config/Auth";


// eslint-disable-next-line react/prop-types
const Register = ({ history }) => {
  const signUpUser = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await fireBase
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
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
    return <Redirect to="/" />;
  }

  return (
    <div className="App" style={{
      backgroundImage: `url(${hands})`, backgroundPosition: "center",
      backgroundSize: "cover"

    }}>
      {/* <h1>Log in</h1> */}
      <form onSubmit={signUpUser}>
        <header className="App-header">
          <p1>Welcome to </p1>
          <p1>BurghyDeals</p1>
          <div className="LoginBox">
            <div className="Email">

              <input
                name="email"
                type="email"
                placeholder="Enter your SUNY Plattsburgh email" />
            </div>
            <div className="Password" >

              <input
                name="password"
                type="password"
                placeholder="Enter your password" />
            </div>
            <button type="submit">Create account</button>
            <button style={{ width: "300px" }} onClick={() => history.push("/login")} label="Action">Already have an account? LogIn</button>


          </div>
        </header>
      </form>
    </div>
  );
};

export default withRouter(Register);