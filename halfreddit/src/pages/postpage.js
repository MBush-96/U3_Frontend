import axios from 'axios'
import { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import UsernameComment from '../components/usernameComments'

const PostPage = props => {
    const [post, setPost] = useState({})
    const [comment, setComment] = useState('')
    const [allComments, setComments] = useState([])
    const [username, setUsername] = useState('')

    const getPost = () => {
        axios.post(`${process.env.REACT_APP_URL}/post/${props.routingProps.postId}`).then(res => {
            setPost(res.data.post)
        })
    }

    const getComments = () => {
        axios.post(`${process.env.REACT_APP_URL}/comment/post/${props.routingProps.postId}`).then(res => {
            setComments(res.data.comments)
        })
    }

    const handleSubmit = async e => {
        e.preventDefault()
        const res =  await axios.post(`${process.env.REACT_APP_URL}/comment/new`, {
            body: comment,
            userId: localStorage.getItem('userId'),
            postId: post.id
        })
        console.log(res);
        setComment('')
        getComments()
    }

    const getUserWhoPosted = async comment => {
        const res = await axios.get(`${process.env.REACT_APP_URL}/user/2`)
        console.log(res);
        let commenter = res.data.user.username
        setUsername(commenter)
    }

    useEffect(getPost, [])
    useEffect(getComments, [])
    useEffect(getUserWhoPosted, [])

    
    return(
        <div>
            <div className='idk'>
                hi
            </div>
            <div className='postCommentContainer'>
                <div className='postCommentPost'>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                </div>
                <div className='leaveCommentForm'>
                    <form id='commentForm' onSubmit={handleSubmit}>
                        <textarea className='commentTextArea' form='commentForm' value={comment} onChange={e => setComment(e.target.value)} rows='10' cols='107' placeholder='Comment..' required />
                        <input className='commentFormBtn' type='submit' value='Reply' />
                    </form>
                </div>
                <div className='comments'>
                    {allComments.map((comment, i) => (
                        <div className='singleComment' key={i}>
                            
                            <UsernameComment
                                className='commentUsername'
                                userId={comment.userId}
                            />
                            <p className='commentBody'>{comment.body}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PostPage