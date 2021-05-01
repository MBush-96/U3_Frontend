import Nav from '../components/nav'

const Header = props => {
    return(
        <div className='headerContainer'>
            <div className='logoHeader'>
            </div>
            <div className='navContainer'>
                <Nav />
            </div>
        </div>
    )
}

export default Header