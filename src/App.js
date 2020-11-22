import React, { useEffect, useState } from 'react'
import { Button, TextField } from '@material-ui/core'
import './App.css';
import Tweet from './components/Tweet'


const searchTweetTerm = (searchTerm) => {
  const { REACT_APP_APIURL } = process.env
  const fullUrl = `${REACT_APP_APIURL}/${searchTerm}`

  return fetch(fullUrl).then(d => d.json())
}


function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [tweets, setTweets] = useState([])

  const onHandleSearchTerm = (e) => {    
    setSearchTerm(e.target.value)
  }

  const onSearchTweet = async (e) => {
    e.preventDefault();
    e.stopPropagation();    
    if(searchTerm.length > 0) {
      //invoke api
      const tweetResults = await searchTweetTerm(searchTerm)
      setTweets(tweetResults && tweetResults.statuses)
      console.log(JSON.stringify(tweetResults))
    }

    return false;
  }

  return (
    <div className="App">      
      <h1>Fame for Play</h1>

      <form onSubmit={onSearchTweet}>                  
        <TextField label="Enter Search Term" name="searchTerm" required size="small" onChange={onHandleSearchTerm} value={searchTerm} />        
        <br /><br />
        <Button color="primary" onClick={onSearchTweet} variant="contained">SEARCH</Button>
      </form>
      <hr />
      {
        tweets && tweets.length > 0 && (<Tweet tweets={tweets} />)
      } 
    </div>
  );
}

export default App;
