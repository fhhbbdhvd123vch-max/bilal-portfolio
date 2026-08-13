import { motion } from 'framer-motion';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-black flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-9xl font-bold text-cyan-400 mb-4">404</h1>
        <h2 className="text-4xl font-bold text-white mb-4">Page Not Found</h2>
        <p className="text-xl text-gray-400 mb-8">The page you're looking for doesn't exist</p>
        <a
          href="/"
          className="bg-cyan-500 text-black px-8 py-3 rounded-lg font-bold hover:bg-cyan-400 transition"
        >
          Back to Home
        </a>
      </motion.div>
    </div>
  );
};

export default NotFound;
