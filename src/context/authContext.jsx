import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || null);

    const login = () => {
        //To Do
        setCurrentUser({id: 1,
             name: "Tomide Oyekunle",
              profilePic: "https://images.pexels.com/photos/9037302/pexels-photo-9037302.jpeg"})
    }


    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser))
    },[currentUser])


    return (
        <AuthContext.Provider value={{currentUser, login}}>{children}</AuthContext.Provider>
    )

}