import axios from "axios"

const Login = props => {
    
    const handleLogin = e => {
        e.preventDefault()
        console.log(props.email);
        axios.post(`http://localhost:3001/user/login`, {
            email: props.email,
            password: props.password
        }).then(res => {
            if(res.data.error) {
                console.log(res.data.error);
            } else {
                console.log(res);
                localStorage.setItem('userId', res.data.user.id)
            }
        })
    }
    
    return(
        <div>
            <form onSubmit={handleLogin}>
                <div>
                    <input type='text' value={props.email} onChange={e => props.setEmail(e.target.value)} placeholder='Email' required />
                </div>
                <div>
                    <input type='password' value={props.password} onChange={e => props.setPassword(e.target.value)} placeholder='Password' required />
                </div>
                    <input type='submit' value='Login' />
            </form>
        </div>
    )
}

export default Login