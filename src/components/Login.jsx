/* eslint-disable import/first */
import React, { Component } from "react";
export { Login } from "./Login";
import hands from "./hand.png";


class Login extends Component {

    render() {
        return <div className="App" style={{
            textAlign: "center",
            backgroundImage: `url(${hands})`,
            backgroundPosition: "center",
            backgroundSize: "cover"
        }}>
            <header className="App-header" style={{
                // backgroundColor: "#282c34",
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "calc(10px + 2vmin)",
                color: "white"
            }}>
                <p style={{
                    fontSize: "55px",
                    fontFamily: "Didot, serif",
                    fontWeight: "normal",
                    fontVariant: "small-caps",

                    color: "DarkSlateGray",
                    marginLeft: "200px",
                    marginTop: "240px"
                }}>Welcome to BurghyDeals</p>
                <div className="LoginBox" style={{
                    height: "300px",
                    width: "40%",
                    marginLeft: "100px",
                    marginBottom: "200px",
                    alignItems: "center",
                    backgroundColor: "transparent",
                    borderRadius: "12px"
                }}>
                    <div className="Email" style={{
                        texAlign: "left",
                        flexDirection: "column",
                        // marginTop: "1em"
                    }}>

                        {/* <div htmlFor="email"
                            style={{
                                fontSize: "15px",
                                color: "#000000",
                                // textAlign: "left",
                                marginRight: "260px",
                                marginTop: "10px"
                            }}>
                            Email: </div> */}
                        <input style={{
                            height: "50px",
                            borderColor: "#282c34",
                            width: "500px",
                            borderRadius: "40px",
                            // marginRight: "420px"

                        }}
                            type="text"
                            name="email"
                            placeholder="Enter your SUNY Plattsburgh email"
                        ></input>
                    </div>
                    <div className="Password" style={{
                        textAlign: "center",
                        flexDirection: "column",
                        padding: "20px"
                    }}>
                        {/* <div htmlFor="password" style={{
                            fontSize: "15px",
                            color: "#000000",
                            // textAlign: "left",
                            marginRight: "235px",
                            marginTop: "15px"
                        }}> Password: </div> */}
                        <input style={{
                            height: "50px",
                            borderColor: "#282c34",
                            width: "500px",
                            borderRadius: "40px",


                        }}
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                        ></input>
                    </div>
                    <div className="submit">
                        <button style={{
                            height: "40px",
                            width: "120px",
                            backgroundColor: "#000000",
                            color: "#ffffff",
                            borderRadius: "40px",
                            borderColor: "#000000",
                            fontSize: "18px",
                            marginLeft: "250px"
                        }}> Submit </button>
                    </div>
                    {/* <a
                        className="App-link"
                        href="https://plattsburgh.edu"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#61dafb" }}
                    >
                        Go to myPlattsburgh?
        </a> */}
                </div>


            </header>
        </div>;

    }
}

export default Login;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>Hello Burghy Deals users. Welcome!!!</p>
//         <div className="LoginBox">
//           <div className="Username">
//             <div htmlFor="username"> Username: </div>
//             <input
//               type="text"
//               name="username"
//               placeholder="Enter your username"
//             ></input>
//           </div>
//           <div className="Password">
//             <div htmlFor="password"> Password: </div>
//             <input
//               type="password"
//               name="password"
//               placeholder="Enter your password"
//             ></input>
//           </div>
//         </div>

//         <a
//           className="App-link"
//           href="https://plattsburgh.edu"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Go to my plattsburgh?
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;