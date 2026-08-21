import Image from 'next/image'
import Carousel from './Carousel'
import GameOfLife from './GameOfLife'

const articles = [
  {
    title: "How to Improve SEO: A Practical Action Plan for 2025",
    url: "https://fueint.com/blog/how-to-improve-seo",
    image: "/images/blog/how-to-Improve-seo.webp",
    category: "SEO",
    readTime: "14 min"
  },
  {
    title: "Perfmatters WordPress Plugin \u2013 Speed Up Your Site",
    url: "https://fueint.com/blog/perfmatters-wordpress-plugin",
    image: "/images/blog/perfmatters-wordpress.webp",
    category: "WordPress",
    readTime: "8 min"
  },
  {
    title: "WordPress Plugins 2025 \u2013 Must-Have Tools for Developers",
    url: "https://fueint.com/blog/must-have-wordpress-plugins",
    image: "/images/blog/wordpress-plugins-2025.webp",
    category: "WordPress",
    readTime: "9 min"
  },
  {
    title: "How to Install LAMP Stack on Ubuntu with Virtual Hosts",
    url: "https://fueint.com/blog/how-to-install-lamp-stack-on-ubuntu",
    image: "/images/blog/install-lamp-stack-on-ubuntu.webp",
    category: "DevOps",
    readTime: "9 min"
  },
  {
    title: "JavaScript Learning Roadmap (Beginner to Mastery Guide)",
    url: "https://fueint.com/blog/javascript-learning-roadmap",
    image: "/images/blog/javascript-learning-roadmap-og.webp",
    category: "JavaScript",
    readTime: "11 min"
  },
  {
    title: "Pantheon: Managed Hosting for WordPress &amp; Drupal Sites",
    url: "https://fueint.com/blog/what-is-pantheon",
    image: "/images/blog/pantheon-hosting.webp",
    category: "WordPress",
    readTime: "9 min"
  },
  {
    title: "WordPress.org vs WordPress.com: Key Differences, Pros",
    url: "https://fueint.com/blog/wordpress-org-vs-wordpress-com",
    image: "/images/blog/wordpress-org-vs-wordpress-com.webp",
    category: "WordPress",
    readTime: "10 min"
  },
  {
    title: "Best A/B Testing WordPress Plugins for 2025",
    url: "https://fueint.com/blog/best-ab-testing-plugins-wordpress",
    image: "/images/blog/ab-testing-plugins-wordpress.jpg",
    category: "WordPress",
    readTime: "12 min"
  },
  {
    title: "Pagination vs Load More vs Infinite Scroll 2025",
    url: "https://fueint.com/blog/pagination-vs-load-more-vs-infinite-scroll",
    image: "/images/blog/pagination-vs-load-more-vs-infinite-scroll.webp",
    category: "Tech",
    readTime: "16 min"
  }
]

export default function Blog() {
  const renderCard = (article: any) => (
    <a
      key={article.title}
      href={article.url}
      target="_blank"
      rel="noopener noreferrer nofollow"
      className="relative block w-full h-full overflow-hidden group rounded-2xl bg-canvas"
      draggable={false}
    >
      <Image
        src={article.image}
        alt={article.title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        draggable={false}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#081729]/95 via-[#081729]/40 to-transparent pointer-events-none" />
      <div className="absolute bottom-6 left-5 right-5 z-10">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="text-xs font-mono text-accent uppercase tracking-widest bg-black/60 px-2 py-1 rounded-md backdrop-blur-sm border border-white/10">
            {article.category}
          </span>
          <span className="text-xs font-mono text-mist bg-black/60 px-2 py-1 rounded-md backdrop-blur-sm border border-white/10">
            {article.readTime}
          </span>
        </div>
        <p className="text-white font-display text-xl md:text-2xl leading-snug group-hover:text-accent transition-colors duration-300">
          {article.title}
        </p>
      </div>
    </a>
  );

  return (
    <section id="blog" className="relative py-20 lg:py-24 bg-transparent border-t border-rule">
      <GameOfLife />
      <div className="relative z-10 container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between md:items-end mb-16 gap-6">
          <div>
            <p className="reveal-text text-xs font-mono text-forest uppercase tracking-widest mb-3 font-semibold">Publications</p>
            <h2 className="reveal-text font-display font-normal text-4xl md:text-5xl text-ink leading-tight delay-100">
              Things I&apos;ve written.
            </h2>
          </div>
          <a
            href="https://fueint.com/authors/abinesh-s"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="reveal-text hidden md:inline-flex group items-center gap-2 text-base font-mono text-mist hover:text-forest transition-colors delay-200"
          >
            All articles{' '}
            <span className="group-hover:translate-x-1 transition-transform inline-flex items-center">
              <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </a>
        </div>

        {/* Desktop Carousel (3 items per view, slides 1 at a time) */}
        <div className="hidden lg:block w-full max-w-7xl mx-auto h-[450px] reveal-text">
          <Carousel slidesToShow={3}>
            {articles.map(article => renderCard(article))}
          </Carousel>
        </div>

        {/* Tablet Carousel (2 items per view, slides 1 at a time) */}
        <div className="hidden md:block lg:hidden w-full max-w-5xl mx-auto h-[420px] reveal-text">
          <Carousel slidesToShow={2}>
            {articles.map(article => renderCard(article))}
          </Carousel>
        </div>

        {/* Mobile Carousel (1 item per view) */}
        <div className="block md:hidden w-full mx-auto h-[450px] reveal-text">
          <Carousel slidesToShow={1}>
            {articles.map(article => renderCard(article))}
          </Carousel>
        </div>

        <div className="mt-10 text-center md:hidden">
          <a
            href="https://fueint.com/authors/abinesh-s"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="group text-base font-mono text-mist hover:text-forest transition-colors inline-flex items-center gap-1.5"
          >
            All articles
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
