import { useState, useEffect } from 'react'
import axios from 'axios'


const NewsFeed = () => {
  const [articles, setArticles] = useState(null)

  useEffect(() => {

  const axios = require("axios").default;

const options = {
  method: 'GET',
  url: 'https://crypto-news-live.p.rapidapi.com/news/coindesk',
  headers: {
    'x-rapidapi-host': 'crypto-news-live.p.rapidapi.com',
    'x-rapidapi-key': process.env.REACT_APP_RAPID_KEY
  }
};

axios.request(options).then((response)=>{
  console.log(response.data);
  setArticles(response.data)
}).catch((error)=> {
  console.error(error);
});

}, [])

const first7Articles = articles?.slice(0,7)

  return (
    <div className="news-feed">
    <h1>News Feed</h1>
    {first7Articles?.map((article, _index)  => {
      return <a href={article.url}>
       <p key={_index}>
         {article.title}
       </p>
     </a>
   })}
    </div>
    )
}

export default NewsFeed
