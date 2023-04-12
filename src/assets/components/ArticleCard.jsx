import React from 'react'

const ArticleCard = ({article}) => {
  return (
    <article className=' w-[300px] border-[1px] border-black rounded-lg relative flex flex-col'>
      <div className='h-[150px] overflow-hidden'>
      <img className='h-full w-full object-cover rounded-t-lg' src={article.urlToImage} alt="news images" />
      </div>
      <div className='p-2 flex-1 flex flex-col justify-between'>
      <h2>{article.title}</h2>
      <a className='p-2 bg-blue-400 text-white block w-max rounded-md '  href={article.url}>Read More</a>
      </div>
    </article>
  )
}

export default ArticleCard