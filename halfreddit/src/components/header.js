import Nav from '../components/nav'
import SearchBar from '../components/searchbar'
import { useState } from 'react'

const Header = props => {
    const [search, setSearch] = useState('')

    return(
        <div className='headerContainer'>
            <div className='logoHeader'>
            </div>
            <div className='searchBar'>
                <SearchBar 
                    search={search}
                    setSearch={setSearch}
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