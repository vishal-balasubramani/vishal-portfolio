'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { projects } from '../content/project';
import ProjectCard from '../components/ProjectCard';
import { Code2, Smartphone, Palette, Brain, Filter, Grid3x3, LayoutGrid } from 'lucide-react';

export default function ProjectsPage() {
  const [filter, setFilter] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'masonry'>('grid');

  // Categories for filtering
  const categories = ['All', 'Full-Stack', 'Mobile', 'UI/UX', 'AI/ML'];

  // Filter projects based on selected category
  // NEW - FIXED VERSION
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => 
        project.category?.includes(filter)
      );


  // Stats
  const stats = [
    { label: 'Total Projects', value: projects.length, icon: Code2 },
    { label: 'Technologies', value: '15+', icon: Smartphone },
    { label: 'Happy Clients', value: '10+', icon: Palette },
    { label: 'Lines of Code', value: '10K+', icon: Brain },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 pt-32 pb-24 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-6"
            >
              <span className="px-4 py-2 bg-purple-500/20 backdrop-blur-sm text-purple-300 rounded-full text-sm font-semibold border border-purple-400/30">
                Portfolio
              </span>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Selected{' '}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Work
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12">
              Production apps and design systems built for real users, solving real-world problems
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all"
                >
                  <stat.icon className="w-8 h-8 text-purple-400 mb-3 mx-auto" />
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Filter & View Toggle Section */}
      <div className="bg-gray-50 border-b border-gray-200 sticky top-0 z-40 backdrop-blur-lg bg-gray-50/80">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-5 py-2.5 rounded-xl font-medium transition-all ${
                    filter === category
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg scale-105'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex gap-2 bg-white rounded-xl p-1 border border-gray-200">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-all ${
                  viewMode === 'grid' 
                    ? 'bg-purple-100 text-purple-600' 
                    : 'text-gray-500 hover:bg-gray-100'
                }`}
              >
                <Grid3x3 className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('masonry')}
                className={`p-2 rounded-lg transition-all ${
                  viewMode === 'masonry' 
                    ? 'bg-purple-100 text-purple-600' 
                    : 'text-gray-500 hover:bg-gray-100'
                }`}
              >
                <LayoutGrid className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Results count */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm text-gray-600 mt-4"
          >
            Showing <span className="font-semibold text-gray-900">{filteredProjects.length}</span> project{filteredProjects.length !== 1 ? 's' : ''}
          </motion.p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16 bg-gradient-to-b from-gray-50 to-white">
        {filteredProjects.length > 0 ? (
          <motion.div
            layout
            className={`grid gap-8 ${
              viewMode === 'grid' 
                ? 'md:grid-cols-2' 
                : 'md:grid-cols-2 lg:grid-cols-3'
            }`}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <ProjectCard project={project} index={index} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <Filter className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No projects found</h3>
            <p className="text-gray-600 mb-6">Try selecting a different category</p>
            <button
              onClick={() => setFilter('All')}
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:scale-105 transition-transform"
            >
              View All Projects
            </button>
          </motion.div>
        )}
      </div>

      {/* Technologies Section - UPDATED WITH ANIMATIONS */}
<div className="relative bg-gradient-to-b from-gray-50 to-white py-20 overflow-hidden">
  {/* Background decorative elements */}
  <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
  <div className="absolute top-40 right-10 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
  <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000" />

  <div className="max-w-7xl mx-auto px-6 relative z-10">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="inline-block mb-6"
      >
        <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">
          Tech Stack
        </span>
      </motion.div>

      <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
        Technologies{' '}
        <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Powering
        </span>{' '}
        Projects
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Modern tech stack used across all projects for scalable, production-ready solutions
      </p>
    </motion.div>

    {/* Tech Cards Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {[
          { name: 'Flutter', icon: '📱', gradient: 'from-blue-500 to-cyan-500', delay: 0 },
          { name: 'React', icon: '⚛️', gradient: 'from-cyan-500 to-blue-500', delay: 0.1 },
          { name: 'Next.js', icon: '▲', gradient: 'from-gray-700 to-gray-900', delay: 0.2 },
          { name: 'Node.js', icon: '🟢', gradient: 'from-green-600 to-green-800', delay: 0.3 },
          { name: 'Express', icon: '🚂', gradient: 'from-gray-600 to-gray-800', delay: 0.4 },
          { name: 'PostgreSQL', icon: '🐘', gradient: 'from-blue-600 to-indigo-700', delay: 0.5 },
          { name: 'Firebase', icon: '🔥', gradient: 'from-yellow-500 to-orange-600', delay: 0.6 },
          { name: 'PyTorch', icon: '🔦', gradient: 'from-orange-600 to-red-600', delay: 0.7 },
          { name: 'Figma', icon: '🎨', gradient: 'from-purple-500 to-pink-500', delay: 0.8 },
          { name: 'Tailwind', icon: '💨', gradient: 'from-cyan-500 to-teal-500', delay: 0.9 },
        ].map((tech, i) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ 
              delay: tech.delay,
              duration: 0.5,
              type: "spring",
              stiffness: 100
            }}
            whileHover={{ 
              scale: 1.05,
              rotate: [0, -5, 5, 0],
              transition: { duration: 0.3 }
            }}
            className="group relative"
          >
            {/* Card */}
            <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden">
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${tech.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              
              {/* Content */}
              <div className="relative z-10 flex flex-col items-center gap-3">
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="text-4xl"
                >
                  {tech.icon}
                </motion.div>
                <h3 className="font-bold text-gray-900 group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                  {tech.name}
                </h3>
              </div>

              {/* Shine effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Floating Tech Tags */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8 }}
        className="mt-12 flex flex-wrap justify-center gap-3"
      >
        {['TypeScript', 'Prisma', 'SQLite', 'WebSocket', 'Razorpay', 'REST API', 'Git', 'Vercel', 'Docker'].map((tech, i) => (
          <motion.span
            key={tech}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1 + i * 0.05 }}
            whileHover={{ scale: 1.1, y: -5 }}
            className="px-4 py-2 bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700 rounded-full text-sm font-medium border border-purple-200 hover:border-purple-400 transition-all cursor-default shadow-sm hover:shadow-md"
          >
            {tech}
          </motion.span>
        ))}
      </motion.div>
    </div>
  </div>


      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-[2.5rem] p-12 md:p-16 text-center shadow-2xl relative overflow-hidden"
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
                Like what you see?
              </h2>
              <p className="text-lg md:text-xl mb-10 text-white/90 max-w-2xl mx-auto">
                Let's build something amazing together. I'm always open to discussing new projects and opportunities.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-purple-600 rounded-xl font-semibold hover:scale-105 transition-transform shadow-lg"
                >
                  Start a Project
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <a
                  href="https://drive.google.com/file/d/1AzwwLV1G5gsvSDiKkltfhSOKndLeNgXc/view?usp=sharing"
                  download
                  className="px-8 py-4 border-2 border-white/30 text-white rounded-xl font-semibold hover:bg-white/10 transition-all"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
