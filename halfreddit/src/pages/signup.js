import {useContext, useEffect} from 'react'
import {UserContext} from '../context/userContext'
import axios from 'axios'
import env from 'react'
import { useState } from 'react/cjs/react.development'

const Signup = props => {
    const {globaluserState}  = useContext(UserContext)
    const [user, setUser] = globaluserState

    const handleSubmit = async e => {
        e.preventDefault()
        // console.log(process.env.REACT_APP_URL)
        // console.log(user.username)
        // console.log(user.email)
        const res = await axios.post(`http://localhost:3001/user/signup`, {   
            username: props.username,
            email: props.email,
            password: props.password
        })
        props.setUsername('')
        props.setEmail('')
        props.setPassword('')
        if(res.data.error) {
            console.log(res.data.error);
            document.querySelector('.signupForm').reset()
        } else {
            localStorage.setItem('userId', res.data.user[0].id)
            console.log(res);
        }
    }


    return(
        <div>
            <form className='signupForm' onSubmit={handleSubmit}>
                <div>
                    <input type='text' value={props.username} onChange={e => props.setUsername(e.target.value)} placeholder='Username' required />
                </div>
                <div>
                    <input type='email' value={props.email} onChange={e => props.setEmail(e.target.value)} placeholder='Email' required />
                </div>
                <div>
                    <input type='password' value={props.password} onChange={e => props.setPassword(e.target.value)} placeholder='Password' required />
               </div>
                    <input type='submit' value='Sign-up!' />
            </form>
        </div>
    )
}

export default Signup