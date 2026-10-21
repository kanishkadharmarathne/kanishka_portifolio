import React from 'react';
import ArticleCard from './ArticleCard';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

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
    <section id="articles" className='py-20 md:py-24'>
      <Reveal>
        <SectionHeading index="04" label="articles" title="My Articles" />
      </Reveal>
      <div className='grid gap-6 md:grid-cols-3'>
        {articles.map((article, index) => (
          <Reveal key={article.id} delay={index * 0.1} className='h-full'>
            <ArticleCard
              title={article.title}
              description={article.description}
              source={article.source}
            />
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default ArticleSection;
