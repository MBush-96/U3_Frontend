import CreateSubForm from '../components/createSubForm'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useContext } from 'react/cjs/react.development'
import { UserContext } from '../context/userContext'
const Profile = () => {
    const {globaluserState, fetchUser} = useContext(UserContext)
    const [user, setUser] = globaluserState
    const [showSubForm, setShowSubForm] = useState(false)

    useEffect(() => {
        fetchUser(localStorage.getItem('userId'))
    }, [])

    console.log(user);

    return(
        <div className='profileContainer'>
            <div className='ph'>
                <h1>Hi</h1>
            </div>
            <div className='profileInfoPanel'>
                {showSubForm ? <CreateSubForm /> : null}
                <button onClick={() =>
                    showSubForm ? setShowSubForm(false) : setShowSubForm(true)}
                    >Create a subreddit
                </button>
                <div className='userInfoPanel'>
                    <img className='userProfileImg' src={user.profileimage}></img>
                    <p>{user.username}</p>
                    <p>Karma: {user.karma}</p>
                </div>
            </div>
        </div>
    )
}

export default Profile