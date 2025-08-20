import React from 'react';
import ArticleCard from './ArticleCard';

const articles = [
  {
    id: 1,
    title: "Reducing Hotel Booking Cancellations Using Six Sigma Methodology",
    description: "A group project where we applied the Six Sigma DMAIC framework to analyze hotel booking data and propose strategies to reduce cancellations. I contributed by creating statistical charts using R software and presenting key insights during the final presentation.",
    source: "/article_1.pdf"
  },
  {
    id: 2,
    title: "Article 2",
    description: "Description for article 2",
    source: "/cv.pdf"
  },
  {
    id: 3,
    title: "Article 3",
    description: "Description for article 3",
    source: "/cv.pdf"
  }
]

const ArticleSection = () => {
  return (
    <section id="articles">
      <div>
        <h2 className='text-center sm:text-3xl md:text-4xl mb-8 text-5xl font-bold text-blue-400'>
          My Articles
        </h2>
      </div>
      <div className='grid md:grid-cols-3 gap-12 md:gap-12'>
        {articles.map(article => (
          <ArticleCard
            key={article.id}
            title={article.title}
            description={article.description}
            source={article.source}
          />
        ))}
      </div>
    </section>
  )
}

export default ArticleSection;