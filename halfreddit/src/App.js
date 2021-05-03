import './App.css';

import Header from './components/header'
import Home from './pages/home'
import Login from './pages/login'
import Signup from './pages/signup'
import Profile from './pages/profile'
import PostPage from './pages/postpage';
import CreateSub from './pages/createSub'
import { Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import SubReddit from './pages/subRedditPage';
import CreateSubReddit from './pages/createSubReddit'
import axios from 'axios'

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [allSubReddits, setAllSubReddits] = useState([])

  const allSubs = () => {
    axios.get(`${process.env.REACT_APP_URL}/subreddit/all`).then(res => {
      setAllSubReddits(res.data.subs)
    })
  }

  useEffect(allSubs, [])


  return (
    <div className="App">
      <Header 
        loggedIn={loggedIn}
        setLoggedIn={setLoggedIn}
        allSubReddits={allSubReddits}
        setAllSubReddits={setAllSubReddits}
      />

      <Route
        path='/'
        exact
        render={() => 
          <Home 
            allSubReddits={allSubReddits}
          />
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

      <Route
        path='/create/subreddit'
        exact
        render={() => (
          <CreateSubReddit />
        )}
      />
    </div>
  );
}

export default App;
