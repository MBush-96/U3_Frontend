import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import { useContext } from 'react/cjs/react.development'
import { UserContext } from '../context/userContext'
import UsernameComment from '../components/usernameComments'

const SubReddit = props => {
    const {globaluserState, fetchUser} = useContext(UserContext)
    const [user, setUser] = globaluserState
    const [allPosts, setAllPosts] = useState([])
    const [subId, setSubId] = useState('')

    
    
    const getPosts = id => {
        axios.post(`${process.env.REACT_APP_URL}/subreddit/sr`, {
            subredditId: parseInt(id)
        }).then(res => {
            setAllPosts(res.data.posts)
            console.log('getposts');
            console.log(subId);
        })
    }
    
    const addLike = async post => {
        console.log(post.id);
        const res = await axios.put(`${process.env.REACT_APP_URL}/post/liked`, {
            postId: post.id
        })
        getPosts(subId)
    }
    
    const dislikePost = async post => {
        const res = await axios.put(`${process.env.REACT_APP_URL}/post/disliked`, {
            postId: post.id
        })
        console.log(res);
        getPosts(subId)
    }
    
    useEffect(async () => {
        fetchUser(localStorage.getItem('userId'))
        const res = await axios.get(`${process.env.REACT_APP_URL}/subreddit/sr/${props.routingProps}`)
        setSubId(res.data.sub.id)
        if(res) {
            getPosts(res.data.sub.id)
        }
        console.log('h');
    }, [])

    return(
        <div className='subRedditPage'>
            <div className='subHeader'>
                <div className='srHeaderTopHalf'>

                </div>
                <div className='srTitle'>
                    <div className='srImageContainer'>
                    </div>
                    <div>
                        <h1>{props.routingProps}</h1>
                        <p>sr/{props.routingProps}</p>
                    </div>
                    <div className='srJoinBtnContainer'>
                        <button className='srJoinBtn'>Join</button>
                    </div>
                </div>
            </div>
            <div className='spacerSubRedditPage'>
            </div>
            <div className='subPostsContainer'>
                {allPosts.map((post, i) => (
                    <div key={i}>
                        <div className='singleSubPost'>
                            <div className='postVotes'>
                                <img src='https://i.imgur.com/buCPNw2.png' className='voteArrow' onClick={() => {
                                    addLike(post)
                                }}></img>
                                <p className='likedCount'>{post.numlikes}</p>
                                <img src='https://i.imgur.com/Li8IVnZ.png' className='voteArrow' onClick={() => {
                                    dislikePost(post)
                                }}></img>
                            </div>
                            <div>
                                <div>
                                    <p className='singlePostInfo'>Posted by: {<UsernameComment userId={post.userId} />}</p>
                                </div>
                                <Link to={`/sr/post/${post.id}`} key={i} className='singlePostLink'>
                                    <div>
                                        <h1 className='singlePostTitle'>{post.title}</h1>
                                        <p className='singlePostBody'>{post.body}</p>
                                    </div>
                                </Link>
                                <div className='postBottomComment'>
                                    <p className='pCommentBtn'>Comment</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='subRedditInfo'>
                <div>
                    <Link to={`/create/post/${props.routingProps}`} className='createNewPost'>Make a post</Link>
                </div>
            </div>
        </div>
    )
}

export default SubReddit