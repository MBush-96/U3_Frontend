import { Link } from 'react-router-dom'
import { useContext } from 'react/cjs/react.development'
import { UserContext } from '../context/userContext'

const Nav = () => {
    // Deconstructs object for user/setUser
    const {globaluserState} = useContext(UserContext)
    const [user, setUser] = globaluserState

    return(
        <nav>
            <Link to='/'>Home</Link>{' | '}
            <Link to='/signup'>Signup</Link>{' | '}
            <Link to='/login'>Login</Link>
        </nav>
    )
}

export default Nav