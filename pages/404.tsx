import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const NotFound = () => {
  return (
    <>
      <Head>
        <title>404 - Page Not Found</title>
        <meta name="description" content="The page you're looking for doesn't exist" />
      </Head>
      <Navbar />
      <div className="min-h-screen bg-primary flex items-center justify-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center px-4"
        >
          <motion.h1
            className="text-9xl md:text-[120px] font-bold text-accent mb-4"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            404
          </motion.h1>
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Page Not Found
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 mb-8 max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Oops! The page you're looking for doesn't exist. Let me help you get back on track.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a
              href="/"
              className="px-8 py-3 bg-accent text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors"
            >
              Go Home
            </a>
            <a
              href="/#projects"
              className="px-8 py-3 border-2 border-accent text-accent rounded-lg font-semibold hover:bg-accent hover:text-white transition-colors"
            >
              View Projects
            </a>
          </motion.div>
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
