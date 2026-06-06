import Image from 'next/image'

const articles = [
  {
    title: 'E-E-A-T WordPress Implementation',
    url: 'https://fueint.com/blog/eeat-wordpress-complete-guide-for-google-ranking',
    image: '/images/eeat-wordpress.png',
    category: 'SEO',
    readTime: '8 min',
  },
  {
    title: 'HubSpot vs Chargebee UTM Tracking',
    url: 'https://fueint.com/blog/hubspot-chargebee-utm-tracking',
    image: '/images/utm-tracking.png',
    category: 'Analytics',
    readTime: '12 min',
  },
  {
    title: 'Pagination vs Infinite Scroll',
    url: 'https://fueint.com/blog/pagination-vs-load-more-vs-infinite-scroll',
    image: '/images/pagination-scroll.png',
    category: 'UX',
    readTime: '6 min',
  },
]

export default function Blog() {
  return (
    <section id="blog" className="py-28 md:py-36 bg-ink">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between md:items-end mb-16 gap-6">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-accent leading-tight">
            Things I&apos;ve<br />written.
          </h2>
          <a
            href="https://fueint.com/authors/abinesh-s"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex group items-center gap-2 text-sm font-mono text-canvas/50 hover:text-accent transition-colors"
          >
            All articles{' '}
            <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {articles.map((article) => (
            <a
              key={article.title}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal-text group block overflow-hidden hover:border-accent transition-colors duration-300 bg-canvas"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 border-t border-rule group-hover:border-accent/40 transition-colors duration-300">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-mono text-accent uppercase tracking-widest">
                    {article.category}
                  </span>
                  <span className="text-sm font-mono text-mist">{article.readTime}</span>
                </div>
                <h3 className="text-ink font-semibold text-base leading-snug group-hover:text-forest transition-colors duration-300">
                  {article.title}
                </h3>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-10 text-center md:hidden">
          <a
            href="https://fueint.com/authors/abinesh-s"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-mono text-canvas/50 hover:text-accent transition-colors"
          >
            All articles →
          </a>
        </div>
      </div>
    </section>
  )
}
