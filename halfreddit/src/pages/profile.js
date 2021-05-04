import CreateSubForm from '../components/createSubForm'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react/cjs/react.development'
import { UserContext } from '../context/userContext'
import axios from 'axios'

const Profile = () => {
    const {globaluserState, fetchUser} = useContext(UserContext)
    const [user, setUser] = globaluserState
    const [userPosts, setUserPosts] = useState([])

    const getAllUserPosts = async () => {
        const res = await axios.post(`${process.env.REACT_APP_URL}/user/posts`, {
            userId: parseInt(localStorage.getItem('userId'))
        })
        setUserPosts(res.data.post)
    }

    useEffect(() => {
        fetchUser(localStorage.getItem('userId'))
        getAllUserPosts()
    }, [])

    return(
        <div className='sd'>
            <div className='idk'>
                
            </div>
            <div className='profileContainer'>
                <div className='profileActivityContainer'>
                    {userPosts.map((post, i) => (
                        <div className='profileActivity' key={i}>
                            <div>
                                <h1>{post.title}</h1>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='profileInfoPanel'>
                    <div className='userInfoPanel'>
                        <img className='userProfileImg' src={user.profileimage}></img>
                        <p>{user.username}</p>
                        <p>Karma: {user.karma}</p>
                    </div>
                    <Link to='/create/subreddit' className='createSRBtn'>
                        Create a subreddit
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Profile