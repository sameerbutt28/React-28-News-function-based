import React from 'react'
import { Link } from 'react-router-dom';

import './NewsItem.css'

const newsItem =(props)=> {
  

  
    let {title, description, url, imageUrl} = props;
    return (
    
      <div className='card-container'>
        
        <div className='card' >
  <img src={imageUrl} alt="..." />
  <div  className='card-data'>
    <h3 className="card-title">{title}</h3>
    <p className="card-text">{description}</p>
    <br></br>
    <Link className='button' to={url? url: 'https://www.macrumors.com/2023/08/31/apple-discontinues-itunes-movie-trailers-app/'} target='_blank'> Read more</Link>

  </div>
</div>

      </div>
    )
  
}

export default newsItem
