import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useContext } from 'react/cjs/react.development'
import { UserContext } from '../context/userContext'

const CreatePostForm = props => {
    const {globaluserState, fetchUser} = useContext(UserContext)
    const [user, setUser] = globaluserState
    const [title, setTitle] = useState('')
    const [postBody, setPostBody] = useState('')
    const [subId, setSubId] = useState('')
    const history = useHistory()

    const handleSubmit = e => {
        e.preventDefault()
        axios.get(`${process.env.REACT_APP_URL}/subreddit/sr/${props.routingProps}`).then(res => {
            console.log(res);
        })
        const resFromPost = axios.post(`${process.env.REACT_APP_URL}/post/create`, {
            postTitle: title,
            postBody: postBody,
            userId: localStorage.getItem('userId'),
            subRedditId: subId,
        })
        history.push(`/sr/${props.routingProps}`)
    }

    useEffect(() => {
        fetchUser(localStorage.getItem('userId'))}
    , [])

    axios.get(`${process.env.REACT_APP_URL}/subreddit/sr/${props.routingProps}`).then(res => {
        setSubId(res.data.sub.id)
        console.log(res);
    })


    return(
        <div>
            <div className='idk'>

            </div>
            Make a post
            <div className='postFormContainer'>
                <form id="postForm" onSubmit={handleSubmit}>
                    <input className='postTitleInput' type='text' value={title} onChange={e => setTitle(e.target.value)} placeholder='Post Title' required />
                    <textarea className='postTextArea' form='postForm' value={postBody} onChange={e => setPostBody(e.target.value)} rows='4' cols='50' placeholder='Post..' required />
                    <input type='submit' value='Post' className='postFormSubmitBtn' />
                </form>
            </div>
        </div>
    )
}

export default CreatePostForm