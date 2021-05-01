import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom'

const SubReddit = props => {
    const [title, setTitle] = useState('')
    const [postBody, setPostBody] = useState('')
    const [allPosts, setAllPosts] = useState([])
    const [subId, setSubId] = useState('')
    const history = useHistory()

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
            subRedditId: subId
        })
        history.push(`/sr/${props.routingProps}`)
    }

    const getPosts = () => {
        axios.post(`http://localhost:3001/subreddit/sr/`, {
            subredditId: parseInt(subId)
        }).then(res => {
            console.log(res.data.posts)
            setAllPosts(res.data.posts)
        })
    }

    useEffect(getPosts, [subId])

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
                        <div className='singleSubPost' key={i}>
                            <h1>{post.title}</h1>
                            <p>{post.body}</p>
                        </div>
                ))}
            </div>
        </div>
    )
}

export default SubReddit