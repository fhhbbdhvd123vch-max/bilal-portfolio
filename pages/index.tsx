import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { FaCode, FaRocket, FaShoppingCart } from 'react-icons/fa';

const Home = () => {
  const features = [
    {
      icon: <FaCode className="text-3xl" />,
      title: 'Production-Ready Code',
      desc: 'Professional, tested, and optimized templates ready to deploy',
    },
    {
      icon: <FaRocket className="text-3xl" />,
      title: 'Lightning Fast',
      desc: 'Built with Next.js & TypeScript for maximum performance',
    },
    {
      icon: <FaShoppingCart className="text-3xl" />,
      title: 'Easy Integration',
      desc: 'Copy, paste, and customize - it just works!',
    },
  ];

  const templates = [
    { name: 'E-Commerce Platform', price: '$79', rating: '4.9' },
    { name: 'SaaS Dashboard', price: '$59', rating: '4.8' },
    { name: 'Blog Engine', price: '$39', rating: '4.9' },
    { name: 'Chat Application', price: '$99', rating: '4.7' },
  ];

  return (
    <>
      <Head>
        <title>AI Code Marketplace - Premium Templates & Components</title>
        <meta name="description" content="Production-ready code templates powered by AI. Get professional, tested templates for your next project." />
      </Head>

      {/* Navigation */}
      <nav className="fixed w-full bg-black/80 backdrop-blur-md z-50 border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-2xl font-bold text-cyan-400">
            🤖 AI Code Market
          </motion.div>
          <div className="flex gap-6">
            <Link href="#templates" className="text-gray-300 hover:text-cyan-400 transition">
              Templates
            </Link>
            <Link href="#pricing" className="text-gray-300 hover:text-cyan-400 transition">
              Pricing
            </Link>
            <button className="bg-cyan-500 text-black px-6 py-2 rounded-lg font-semibold hover:bg-cyan-400 transition">
              Shop Now
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-black pt-20 px-4 flex items-center">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
              Premium Code Templates
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"> Powered by AI</span>
            </h1>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Production-ready components, templates, and full-stack projects. Built by AI, trusted by developers.
            </p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-10 py-4 rounded-lg font-bold text-lg hover:shadow-lg hover:shadow-cyan-500/50 transition">
                Browse Templates
              </button>
              <button className="border-2 border-cyan-500 text-cyan-400 px-10 py-4 rounded-lg font-bold text-lg hover:bg-cyan-500/10 transition">
                View Demo
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-black px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-16">Why Choose Us?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-900/50 border border-cyan-500/20 p-8 rounded-lg hover:border-cyan-500/50 transition"
              >
                <div className="text-cyan-400 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Templates */}
      <section id="templates" className="py-20 bg-gradient-to-b from-black to-slate-900 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-16">Featured Templates</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {templates.map((template, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-900 border border-cyan-500/30 rounded-lg overflow-hidden hover:border-cyan-400 transition cursor-pointer group"
              >
                <div className="h-40 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition flex items-center justify-center">
                  <FaCode className="text-4xl text-cyan-400/50" />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-white mb-2">{template.name}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-cyan-400 font-bold text-xl">{template.price}</span>
                    <span className="text-yellow-400">⭐ {template.rating}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-black px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-16">Simple Pricing</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Starter', price: '$9', features: ['5 Templates', 'Basic Support', 'Monthly Updates'] },
              { name: 'Pro', price: '$29', features: ['50+ Templates', 'Priority Support', 'Weekly Updates', 'Custom Code'], highlight: true },
              { name: 'Enterprise', price: 'Custom', features: ['Unlimited Templates', '24/7 Support', 'API Access', 'Custom Development'] },
            ].map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`p-8 rounded-lg border-2 transition ${
                  plan.highlight
                    ? 'border-cyan-400 bg-cyan-500/10'
                    : 'border-slate-700 bg-slate-900/50 hover:border-cyan-500/50'
                }`}
              >
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold text-cyan-400 mb-6">{plan.price}</div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="text-gray-300 flex items-center gap-2">
                      <span className="text-cyan-400">✓</span> {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-bold transition ${
                  plan.highlight
                    ? 'bg-cyan-500 text-black hover:bg-cyan-400'
                    : 'border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10'
                }`}>
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Accelerate Your Development?</h2>
          <p className="text-xl text-gray-300 mb-8">Join 1000+ developers using AI-powered templates</p>
          <button className="bg-cyan-500 text-black px-12 py-4 rounded-lg font-bold text-lg hover:bg-cyan-400 transition">
            Browse All Templates
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-slate-800 py-8 px-4">
        <div className="max-w-7xl mx-auto text-center text-gray-500">
          <p>© 2024 AI Code Marketplace. Powered by GitHub Copilot. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Home;
