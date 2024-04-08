import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) => {
    const [user , setUser] = React.useState(null) // NEED NOT TO IMPORT IT EXTRA
    return(
        <UserContext.Provider value={{user , setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;