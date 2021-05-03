import axios from 'axios';
import { useHistory } from 'react-router-dom'
import { useEffect, useState } from 'react';

const SearchBar = props => {
    const history = useHistory()

    // used for search suggestions 
    const getAllSubs = () => {
      axios.get(`${process.env.REACT_APP_URL}/subreddit/all`).then(res => {
        props.setAllSubReddits(res.data.subs)
      })
    }

    const handleSubmit = e => {
        e.preventDefault();
        axios.get(`${process.env.REACT_APP_URL}/subreddit/sr/${props.search}`).then(res => {
            if(res.data.sub === null) {
                alert('no page')
                props.setSearch('')
            } else {
                history.push(`/sr/${props.search}`)
                props.setSearch('')
            }
        })
    }

    useEffect(getAllSubs, [])

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