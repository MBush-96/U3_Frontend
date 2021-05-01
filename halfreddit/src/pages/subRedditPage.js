import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory, Link } from 'react-router-dom'
import { useContext } from 'react/cjs/react.development'
import { UserContext } from '../context/userContext'

const SubReddit = props => {
    const {globaluserState, fetchUser} = useContext(UserContext)
    const [user, setUser] = globaluserState
    const [title, setTitle] = useState('')
    const [postBody, setPostBody] = useState('')
    const [allPosts, setAllPosts] = useState([])
    const [subId, setSubId] = useState('')
    const history = useHistory()

    useEffect(() => {
        fetchUser(localStorage.getItem('userId'))
    }, [])

    axios.get(`http://localhost:3001/subreddit/sr/${props.routingProps}`).then(res => {
        setSubId(res.data.sub.id)
    })

    const handleSubmit = async e => {
        e.preventDefault()
        const res = await axios.get(`http://localhost:3001/subreddit/sr/${props.routingProps}`)
        const resFromPost = await axios.post(`http://localhost:3001/post/create`, {
            postTitle: title,
            postBody: postBody,
            userId: localStorage.getItem('userId'),
            subRedditId: subId,
        })
        history.push(`/sr/${props.routingProps}`)
    }

    const getPosts = () => {
        axios.post(`http://localhost:3001/subreddit/sr`, {
            subredditId: parseInt(subId)
        }).then(res => {
            setAllPosts(res.data.posts)
        })
    }

    useEffect(getPosts, [subId, allPosts])
    return(
        <div>
            <div>
                hello from {props.routingProps}
                <form id="postForm" onSubmit={handleSubmit}>
                    <input type='text' value={title} onChange={e => setTitle(e.target.value)} placeholder='Post Title' required />
                    <input type='submit' value='post' />
                </form>
                <textarea className='postTextArea' form='postForm' value={postBody} onChange={e => setPostBody(e.target.value)} rows='4' cols='50' placeholder='Post..' required />
            </div>
            <div className='subPostsContainer'>
                {allPosts.map((post, i) => (
                    <div key={i}>
                        <div className='singleSubPost'>
                            <div className='postVotes'>
                                <img src='https://i.imgur.com/buCPNw2.png' className='voteArrow'></img>
                                <p className='likedCount'>{post.numlikes}</p>
                                <img src='https://i.imgur.com/Li8IVnZ.png' className='voteArrow'></img>
                            </div>
                            <div>
                                <div>
                                    <p className='singlePostInfo'>Posted by: {user.username}</p>
                                </div>
                                <Link to={`/sr/post/${post.id}`} key={i} className='singlePostLink'>
                                    <div>
                                        <h1 className='singlePostTitle'>{post.title}</h1>
                                        <p className='singlePostBody'>{post.body}</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SubReddit