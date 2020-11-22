import React, { useEffect, useState } from 'react'
import { Button, TextField } from '@material-ui/core'
import './App.css';

const searchTweetTerm = (searchTerm) => {
  const { REACT_APP_APIURL, REACT_APP_APIBEARER, REACT_APP_MAXRESULT } = process.env
  const fullUrl = `${REACT_APP_APIURL}/1.1/search/tweets.json?q="${searchTerm}"&result_type=popular&count=${REACT_APP_MAXRESULT}`

  return fetch(fullUrl, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `bearer ${REACT_APP_APIBEARER}`
    }
  }).then(d => d.json())
}


function App() {
  const [searchTerm, setSearchTerm] = useState('')

  const onHandleSearchTerm = (e) => {    
    setSearchTerm(e.target.value)
  }

  const onSearchTweet = async (e) => {
    if(searchTerm.length > 0) {
      //invoke api
      const tweetResult = await searchTweetTerm(searchTerm).then((result) => result)
      console.log(tweetResult)
    }

    e.preventDefault();

    return false;
  }

  useEffect(() => {
    
  })

  return (
    <div className="App">      
      <h1>Fame for Play</h1>

      <form onSubmit={onSearchTweet}>                  
        <TextField label="Enter Search Term" name="searchTerm" required size="small" onChange={onHandleSearchTerm} value={searchTerm} />        
        <br /><br />
        <Button color="primary" onClick={onSearchTweet} variant="contained">SEARCH</Button>
      </form>
      <hr />    
      <p>{searchTerm }</p>
    </div>
  );
}

export default App;
