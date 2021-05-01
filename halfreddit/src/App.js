import './App.css';

import Header from './components/header'
import Home from './pages/home'
import Login from './pages/login'
import Signup from './pages/signup'
import SearchBar from './components/searchbar'
import Profile from './pages/profile'
import CreateSub from './pages/createSub'
import { Route } from 'react-router-dom'
import {useState} from 'react'
import SubReddit from './pages/subRedditPage';

function App() {
  // const {globaluserState, fetchUser} = useContext(UserContext)
  // const [user, setUser] = globaluserState
  const [search, setSearch] = useState('')

  return (
    <div className="App">
      <Header />
      
      <SearchBar 
        search={search}
        setSearch={setSearch}
      />

      <Route
        path='/'
        exact
        render={() => 
          <Home />
        }
      />

      <Route
        path='/signup'
        exact
        render={() => 
          <Signup />
        }
      />

      <Route
        path='/login'
        exact
        render={() => 
          <Login />
        }
      />

      <Route 
        path='/profile'
        exact
        render={() =>
          <Profile />
        }
      />

      <Route
        path='/new/create'
        exact
        render={() =>
          <CreateSub />
        }
      />

      <Route
        path='/sr/:subname'
        exact
        render={routingProps => (
          <SubReddit routingProps={routingProps.match.params.subname} />
        )}
      />
    </div>
  );
}

export default App;
