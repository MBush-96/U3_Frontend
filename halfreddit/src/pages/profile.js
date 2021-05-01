import CreateSubForm from '../components/createSubForm'
import { Link } from 'react-router-dom'

const Profile = () => {
    //const [showSubForm, setShowSubForm] = useState(false)

    return(
        <div>
            {/* {showSubForm ? <CreateSubForm /> : null} */}
            <CreateSubForm />
            <Link to='/new/create'>Make subreddit</Link>
        </div>
    )
}

export default Profile