import { Link } from 'react-router-dom'

const Home = props => {

    return(
        <div>
            <div className='idk'>
            </div>
            <div className='homePageContainer'>
                <div className='spacerHome'>

                </div>
                <div className='ph'>

                </div>
                <div className='randomSubsBox'>
                    <div className='sbSubsTitle'>Check out these subreddits!</div>
                    {props.allSubReddits.map((sub, i) => (
                        <Link to={`/sr/${sub.name}`} key={i} className='sbSubs'>
                            sr/{sub.name}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home