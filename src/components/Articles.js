import React from 'react';
import SkeletonArticle from '../skeletons/SkeletonArticle';

const Articles = () => {
  const [articles, setArticles] = React.useState(null);

  React.useEffect(() => {
    setTimeout(async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts').then((response) => response.json());
      setArticles(res);
    }, 5000);
  })

  return (
    <div className='articles'>
      <h2>Articles</h2>
      {
        articles && articles.map(article => (
          <div className="article" key={article.id}>
            <h3>{article.title}</h3>
            <p>{article.body}</p>
          </div>
        ))
      }
      {!articles && [1, 2, 3, 4, 5].map((n) => <SkeletonArticle key={n} theme="dark" />)}
    </div>
  )
}

export default Articles