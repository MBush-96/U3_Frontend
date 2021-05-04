import { useEffect, useState } from "react/cjs/react.development"
import axios from 'axios'

const UsernameComment = props => {
    const [username, setUsername] = useState('')
    const [userImage, setUserImage] = useState('')

    const handleUsernameGrab = () => {
        axios.get(`${process.env.REACT_APP_URL}/user/${props.userId}`).then(res => {
            setUsername(res.data.user.username)
            setUserImage(res.data.user.profileimage)
        })
    }

    useEffect(handleUsernameGrab, [])

    return(
        <div className='commentHead'>
            <img className='commentHeadImg' src={userImage} />
            <p style={{marginBottom: 0}}>{username}</p>
        </div>
    )
}

export default UsernameComment