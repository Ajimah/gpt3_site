import React from 'react';
import './Article.css';



const Articles = ({imgUrl, date , title}) => {
  return (
    <div className='gpt3__blog-container_article'>
      <div className='gpt3__blog-container-image'>
        <img src={imgUrl} alt="blog " />
      </div>
      <div className='gpt3__blog-container_article-content'>
          <div>
            <p>{date}</p>
            <h3>{title}</h3>
          </div>
          <p>Read full Article</p>
      </div>
    </div>
  )
}

export default Articles