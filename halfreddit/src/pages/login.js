import axios from "axios"
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useContext } from "react/cjs/react.development"
import { UserContext } from "../context/userContext"


const Login = props => {
    const {globaluserState, fetchUser} = useContext(UserContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()

    const handleLogin = e => {
        e.preventDefault()
        axios.post(`${process.env.REACT_APP_URL}/user/login`, {
            email: email,
            password: password
        }).then(res => {
            if(res.data.error) {
                console.log(res.data.error);
            } else {
                console.log(res);
                localStorage.setItem('userId', res.data.id)
                fetchUser(res.data.id)
                props.setLoggedIn(true)
                history.push('/')
            }
        })
    }
    
    return(
        <div>
            <form onSubmit={handleLogin}>
                <div>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} placeholder='Email' required />
                </div>
                <div>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} placeholder='Password' required />
                </div>
                    <input type='submit' value='Login' />
            </form>
        </div>
    )
}

export default Login