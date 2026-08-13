import Head from 'next/head';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaStar, FaDownload, FaCode } from 'react-icons/fa';

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const products = [
    {
      id: 1,
      name: 'E-Commerce Platform',
      category: 'full-stack',
      price: 79,
      rating: 4.9,
      reviews: 145,
      downloads: 2500,
      description: 'Complete e-commerce solution with Stripe integration',
      image: '🛒',
      tech: ['Next.js', 'Stripe', 'MongoDB', 'TypeScript'],
    },
    {
      id: 2,
      name: 'SaaS Dashboard',
      category: 'template',
      price: 59,
      rating: 4.8,
      reviews: 98,
      downloads: 1800,
      description: 'Beautiful admin dashboard with charts and analytics',
      image: '📊',
      tech: ['Next.js', 'Chart.js', 'Tailwind', 'TypeScript'],
    },
    {
      id: 3,
      name: 'Blog Engine',
      category: 'template',
      price: 39,
      rating: 4.9,
      reviews: 210,
      downloads: 3200,
      description: 'SEO-optimized blog with markdown support',
      image: '📝',
      tech: ['Next.js', 'MDX', 'Tailwind', 'TypeScript'],
    },
    {
      id: 4,
      name: 'Chat Application',
      category: 'full-stack',
      price: 99,
      rating: 4.7,
      reviews: 76,
      downloads: 1200,
      description: 'Real-time chat with Socket.io and authentication',
      image: '💬',
      tech: ['Next.js', 'Socket.io', 'Redis', 'TypeScript'],
    },
    {
      id: 5,
      name: 'Component Library',
      category: 'component',
      price: 49,
      rating: 4.8,
      reviews: 156,
      downloads: 2100,
      description: '50+ pre-built React components ready to use',
      image: '🧩',
      tech: ['React', 'Tailwind', 'Framer Motion', 'TypeScript'],
    },
    {
      id: 6,
      name: 'Payment System',
      category: 'component',
      price: 69,
      rating: 4.9,
      reviews: 89,
      downloads: 1500,
      description: 'Complete payment processing with Stripe & PayPal',
      image: '💳',
      tech: ['Node.js', 'Stripe', 'PayPal', 'TypeScript'],
    },
  ];

  const categories = [
    { id: 'all', label: 'All Products' },
    { id: 'template', label: 'Templates' },
    { id: 'component', label: 'Components' },
    { id: 'full-stack', label: 'Full Stack' },
  ];

  const filtered = selectedCategory === 'all' ? products : products.filter(p => p.category === selectedCategory);

  return (
    <>
      <Head>
        <title>Shop - AI Code Marketplace</title>
        <meta name="description" content="Browse and buy premium code templates and components" />
      </Head>

      {/* Nav */}
      <nav className="fixed w-full bg-black/80 backdrop-blur-md z-50 border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-cyan-400">🤖 AI Code Market</div>
          <div className="flex gap-4">
            <button className="text-cyan-400 hover:text-cyan-300 transition">❤️ Wishlist</button>
            <button className="bg-cyan-500 text-black px-6 py-2 rounded-lg font-semibold hover:bg-cyan-400 transition">🛒 Cart</button>
          </div>
        </div>
      </nav>

      <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-black pt-24 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h1 className="text-5xl font-bold text-white mb-4">Code Templates & Components</h1>
            <p className="text-xl text-gray-400">Professional, production-ready solutions for your projects</p>
          </motion.div>

          {/* Filter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap gap-3 mb-12"
          >
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-6 py-2 rounded-lg font-semibold transition ${
                  selectedCategory === cat.id
                    ? 'bg-cyan-500 text-black'
                    : 'border border-cyan-500/50 text-cyan-400 hover:border-cyan-400'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </motion.div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group bg-slate-900/50 border border-cyan-500/20 rounded-lg overflow-hidden hover:border-cyan-400 transition hover:shadow-lg hover:shadow-cyan-500/20"
              >
                {/* Image */}
                <div className="h-48 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition flex items-center justify-center text-7xl">
                  {product.image}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{product.description}</p>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} size={14} />
                      ))}
                    </div>
                    <span className="text-gray-400 text-sm">({product.reviews} reviews)</span>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.tech.slice(0, 2).map(t => (
                      <span key={t} className="px-2 py-1 bg-cyan-500/20 text-cyan-300 rounded text-xs font-semibold">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="flex justify-between text-gray-400 text-sm mb-4 pb-4 border-t border-slate-700">
                    <span className="flex items-center gap-1"><FaDownload size={12} /> {product.downloads.toLocaleString()}</span>
                    <span className="flex items-center gap-1"><FaCode size={12} /> Open Source</span>
                  </div>

                  {/* Footer */}
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-cyan-400">${product.price}</span>
                    <button className="bg-cyan-500 text-black px-4 py-2 rounded-lg font-semibold hover:bg-cyan-400 transition">
                      Buy Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
