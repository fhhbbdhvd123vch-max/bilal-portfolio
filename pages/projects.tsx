import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ProjectsPage = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform built with Next.js and Stripe integration. Features include product catalog, shopping cart, secure payment processing, and order management.',
      longDescription: 'This e-commerce platform was built to provide a seamless shopping experience. It includes a dynamic product catalog, real-time inventory management, secure checkout with Stripe integration, and an admin dashboard for managing products and orders.',
      tech: ['Next.js', 'Stripe', 'MongoDB', 'Tailwind CSS', 'TypeScript'],
      image: 'https://via.placeholder.com/600x400',
      link: '#',
      github: '#',
      date: 'January 2024',
      features: ['Product Catalog', 'Shopping Cart', 'Secure Checkout', 'Admin Dashboard', 'Order Tracking'],
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates using Firebase. Team members can create tasks, assign them, track progress, and collaborate in real-time.',
      longDescription: 'Built for teams to collaborate efficiently, this app provides real-time task updates, team collaboration features, progress tracking, and notification system. Perfect for agile teams and project management.',
      tech: ['React', 'Firebase', 'Tailwind CSS', 'Redux', 'TypeScript'],
      image: 'https://via.placeholder.com/600x400',
      link: '#',
      github: '#',
      date: 'December 2023',
      features: ['Real-time Updates', 'Team Collaboration', 'Progress Tracking', 'Notifications', 'Drag & Drop'],
    },
    {
      id: 3,
      title: 'Analytics Dashboard',
      description: 'Interactive analytics dashboard with data visualization and real-time metrics. Monitor key performance indicators and business metrics with beautiful charts and graphs.',
      longDescription: 'This analytics dashboard provides real-time insights into business metrics. It features interactive charts, customizable dashboards, export functionality, and detailed analytics reports for informed decision-making.',
      tech: ['React', 'Chart.js', 'Node.js', 'PostgreSQL', 'TypeScript'],
      image: 'https://via.placeholder.com/600x400',
      link: '#',
      github: '#',
      date: 'November 2023',
      features: ['Real-time Metrics', 'Interactive Charts', 'Custom Reports', 'Data Export', 'Alert System'],
    },
    {
      id: 4,
      title: 'Social Media API',
      description: 'RESTful API for a social media platform with authentication and real-time features. Built with Node.js and Express, featuring JWT authentication and WebSocket support.',
      longDescription: 'A robust backend API for a social media platform. Includes user authentication, friend system, posts, comments, likes, notifications, and real-time messaging using WebSockets.',
      tech: ['Node.js', 'Express', 'MongoDB', 'JWT', 'WebSocket'],
      image: 'https://via.placeholder.com/600x400',
      link: '#',
      github: '#',
      date: 'October 2023',
      features: ['JWT Auth', 'Friend System', 'Posts & Comments', 'Real-time Messaging', 'Notifications'],
    },
    {
      id: 5,
      title: 'AI Chat Application',
      description: 'An intelligent chat application powered by AI. Users can have conversations with an AI assistant, get recommendations, and receive instant answers.',
      longDescription: 'Built with modern AI capabilities, this chat app provides intelligent conversations, context awareness, and personalized recommendations. Integrated with OpenAI API for powerful language processing.',
      tech: ['React', 'OpenAI API', 'Node.js', 'MongoDB', 'Socket.io'],
      image: 'https://via.placeholder.com/600x400',
      link: '#',
      github: '#',
      date: 'September 2023',
      features: ['AI Conversations', 'Context Awareness', 'Real-time Chat', 'History Tracking', 'Personalization'],
    },
    {
      id: 6,
      title: 'Video Streaming Platform',
      description: 'A video streaming platform similar to YouTube. Features include video upload, streaming, recommendations, and user subscriptions.',
      longDescription: 'Complete video streaming solution with adaptive bitrate streaming, user subscriptions, monetization features, recommendation engine, and content management system for creators.',
      tech: ['Next.js', 'AWS S3', 'HLS Streaming', 'TypeScript', 'PostgreSQL'],
      image: 'https://via.placeholder.com/600x400',
      link: '#',
      github: '#',
      date: 'August 2023',
      features: ['Video Upload', 'Adaptive Streaming', 'Recommendations', 'Subscriptions', 'Monetization'],
    },
  ];

  return (
    <>
      <Head>
        <title>Projects - Mohamed Bilal</title>
        <meta name="description" content="Explore all of Mohamed Bilal's projects and portfolio work" />
      </Head>
      <Navbar />
      <div className="min-h-screen bg-primary pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              My <span className="text-accent">Projects</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A collection of my recent work, from web applications to innovative solutions
            </p>
          </motion.div>

          <div className="space-y-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-secondary rounded-lg overflow-hidden border border-accent/20 hover:border-accent/50 transition-all"
              >
                <div className="grid md:grid-cols-2 gap-8 p-8">
                  {/* Image */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-accent to-gold rounded-lg h-80 flex items-center justify-center"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </motion.div>

                  {/* Content */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <h2 className="text-3xl font-bold text-white">{project.title}</h2>
                    </div>
                    <p className="text-gray-300 mb-4">{project.date}</p>
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                      {project.longDescription}
                    </p>

                    {/* Features */}
                    <div className="mb-6">
                      <h3 className="text-accent font-semibold mb-3">Key Features:</h3>
                      <div className="grid grid-cols-2 gap-2">
                        {project.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-2 text-gray-300">
                            <span className="text-accent">✓</span>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-semibold"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-4">
                      <a
                        href={project.link}
                        className="px-6 py-2 bg-accent text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors"
                      >
                        View Project
                      </a>
                      <a
                        href={project.github}
                        className="px-6 py-2 border-2 border-accent text-accent rounded-lg font-semibold hover:bg-accent hover:text-white transition-colors"
                      >
                        GitHub
                      </a>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProjectsPage;
