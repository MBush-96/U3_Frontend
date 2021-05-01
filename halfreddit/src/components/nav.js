import { Link } from 'react-router-dom'

const Nav = () => {
    // Deconstructs object for user/setUser
    // const {globaluserState} = useContext(UserContext)
    // const [user, setUser] = globaluserState

    return(
        <div className='navContentContainer'>
            <nav className='navContent'>
                <Link to='/' className='headerLinks'>Home</Link>
                {localStorage.getItem('userId') ?
                    <> 
                        <Link to='/profile' className='headerLinks'>Profile</Link>
                        <Link to='/' className='headerLinks' onClick={() => {
                            localStorage.removeItem('userId')
                        }}>Logout</Link>           
                    </>
                :
                    <>
                        <Link to='/signup' className='headerLinks'>Signup</Link>
                        <Link to='/login' className='headerLinks'>Login</Link>
                    </>
                }
            </nav>
        </div>
    )
}

export default Nav