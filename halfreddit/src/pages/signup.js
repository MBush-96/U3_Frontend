import axios from 'axios'
import { useState } from 'react/cjs/react.development'
import { useHistory } from 'react-router-dom'

const Signup = props => {
    // use context returns value of User context
    // split the returned value into globaluserState and fetchuser
    // const {globaluserState, fetchUser} = useContext(UserContext)
    // const [user, setUser] = globaluserState

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [profileImage, setProfileImage] = useState()
    const history = useHistory()

    // console.log(globaluserState);
    const handleSubmit = async e => {
        e.preventDefault()
        // console.log(process.env.REACT_APP_URL)
        const res = await axios.post(`${process.env.REACT_APP_URL}/user/signup`, {   
            username: username,
            email: email,
            password: password,
            karma: 0,
            profileimage: profileImage ? profileImage : 'https://i.imgur.com/4D1M140.png'
        })
        setUsername('')
        setEmail('')
        setPassword('')
        if(res.data.error) {
            console.log(res.data.error);
        } else {
            localStorage.setItem('userId', res.data.user[0].id)
            history.push('/login')
            //fetchUser(res.data.user[0].id)
            //console.log(user);
        }
    }
    
    return(
        <div>
            <div className='idk'>
                
            </div>
            <form className='signupForm' onSubmit={handleSubmit}>
                <div>
                    <input type='text' value={username} onChange={e => setUsername(e.target.value)} placeholder='Username' required />
                </div>
                <div>
                    <input type='email' value={email} onChange={e => setEmail(e.target.value)} placeholder='Email' required />
                </div>
                <div>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} placeholder='Password' required />
               </div>
               <div>
                   <input type='text' value={profileImage} onChange={e=> setProfileImage(e.target.value)} placeholder='Profile Image Url' />
               </div>
                    <input type='submit' value='Sign-up!' />
            </form>
        </div>
    )
}

export default Signup