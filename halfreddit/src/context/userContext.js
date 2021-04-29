import {useState, createContext} from 'react'
import axios from 'axios'
import env from 'react'

const UserContext = createContext()

const UserProvider = ({children}) => {
    const [user, setUser] = useState({})

    
    // fetch the user using local storage
    const fetchUser = () => {
        const userId = localStorage.getItem('userId')
        if(userId) {
            axios.get(`${process.env.REACT_APP_URL}/user/${userId}`, {
                headers: {
                    Authorization: userId
                }
            })
            .then(res => {
                setUser(res.data.user)
            })
        }
    }

    //used to pass the variables
    const state = {
        globaluserState: [user, setUser],
        
        //makes fetchUser usable globally
        fetchUser: fetchUser
    }
    
    return (
        <UserContext.Provider value={state}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider}


