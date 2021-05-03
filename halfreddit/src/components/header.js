import Nav from '../components/nav'
import SearchBar from '../components/searchbar'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = props => {
    const [search, setSearch] = useState('')

    return(
        <div className='headerContainer'>
            <div className='logoHeader'>
                <Link to='/'>
                    <h1 className='headerSiteName'>Half Reddit</h1>
                </Link>
            </div>
            <div className='searchBar'>
                <SearchBar 
                    search={search}
                    setSearch={setSearch}
                    allSubReddits={props.allSubReddits}
                    setAllSubReddits={props.setAllSubReddits}
                />
            </div>
            <div className='navContainer'>
                <Nav 
                    loggedIn={props.loggedIn}
                    setLoggedIn={props.setLoggedIn}
                />
            </div>
        </div>
    )
}

export default Header