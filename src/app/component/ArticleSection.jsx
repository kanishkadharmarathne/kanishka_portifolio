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
    title: "Ethical Implications of Artificial Intelligence",
    description: "This research presentation explores the ethical challenges of Artificial Intelligence, including bias in algorithms, data privacy concerns, deepfakes, accountability, and global governance. It highlights real-world cases, principles of responsible AI, and the need for fairness, transparency, and human oversight to ensure trustworthy AI systems.",
    source: "/article_2.pptx"
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
    <section id="articles" className='mb-12'>
      <div>
        <h2 className='text-center sm:text-3xl md:text-4xl mb-8 text-5xl font-bold text-blue-400'>
          My Articles
        </h2>
      </div>
      <div className='grid md:grid-cols-3 gap-12 md:gap-12 p-4 rounded-2xl'>
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