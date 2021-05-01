import {useState, createContext} from 'react'
import axios from 'axios'

const UserContext = createContext()

const UserProvider = ({children}) => {
    // adding the keys to the end will allow for objects
    const [user, setUser] = useState({username: '', email: ''})

    
    // fetch the user using local storage
    const fetchUser = (id=null) => {
        const userId = id ? id : localStorage.getItem('userId')
        if(userId) {
            axios.get(`http://localhost:3001/user/${userId}`)
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


