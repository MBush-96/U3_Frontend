import axios from 'axios';
import { useHistory } from 'react-router-dom'

const SearchBar = props => {
    const history = useHistory()

    const handleSubmit = e => {
        e.preventDefault();
        axios.get(`http://localhost:3001/subreddit/sr/${props.search}`).then(res => {
            if(res.data.sub === null) {
                alert('no page')
            } else {
                history.push(`/sr/${props.search}`)
            }
        })
    }


    return(
        <div className='searchBarContainer'>
            <form onSubmit={handleSubmit}>
                <input className='searchBar' type='text' value={props.search} onChange={e => props.setSearch(e.target.value)} placeholder='Search' />
                <input className='searchBarBtn' type='submit' value='Search' />
            </form>
        </div>
    )
}

export default SearchBar