import React, { useEffect, useState } from "react";
import fireBase from "./fire";

export var AuthContext = React.createContext();

// eslint-disable-next-line react/prop-types
export var AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        fireBase.auth().onAuthStateChanged(setCurrentUser);
    }, []);

    return (
        <AuthContext.Provider
            value={{
                currentUser
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};


