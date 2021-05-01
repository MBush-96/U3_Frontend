import './App.css';

import Header from './components/header'
import Home from './pages/home'
import Login from './pages/login'
import Signup from './pages/signup'
import SearchBar from './components/searchbar'
import Profile from './pages/profile'
import PostPage from './pages/postpage';
import CreateSub from './pages/createSub'
import { Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import SubReddit from './pages/subRedditPage';
import axios from 'axios';

function App() {
  // const {globaluserState, fetchUser} = useContext(UserContext)
  // const [user, setUser] = globaluserState
  const [loggedIn, setLoggedIn] = useState(false)

  return (
    <div className="App">
      <Header 
        loggedIn={loggedIn}
        setLoggedIn={setLoggedIn}
      />
{/* 
      <SearchBar 
        search={search}
        setSearch={setSearch}
      /> */}

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
          <Login 
            loggedIn={loggedIn}
            setLoggedIn={setLoggedIn}
          />
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

      <Route
        path='/sr/post/:postId'
        exact
        render={routingProps => (
          <PostPage />
        )}
      />
    </div>
  );
}

export default App;
