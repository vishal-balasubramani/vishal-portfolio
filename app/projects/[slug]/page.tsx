'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { projects } from '../../content/project';
import { ArrowLeft, Github, ExternalLink, Figma, CheckCircle2 } from 'lucide-react';
import { useRef } from 'react';

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  if (!project) notFound();

  return (
    <main className="min-h-screen bg-white" ref={ref}>
      {/* Hero Section with Parallax */}
      <motion.div
        className={`relative h-[70vh] bg-gradient-to-br ${project.color} overflow-hidden`}
        style={{ y, opacity }}
      >
        <div className="absolute inset-0 bg-black/10" />
        
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 -left-4 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-blob" />
          <div className="absolute top-0 -right-4 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-2000" />
          <div className="absolute -bottom-8 left-20 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-4000" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 h-full flex flex-col justify-end pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-8 transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to projects
            </Link>

            <div className="mb-6">
              <span className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white text-sm font-semibold rounded-full">
                {project.role}
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              {project.title}
            </h1>

            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl">
              {project.summary}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-xl font-semibold hover:scale-105 transition-transform"
                >
                  <Github className="w-5 h-5" />
                  View Code
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white rounded-xl font-semibold hover:bg-white/30 transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                  Live Demo
                </a>
              )}
              {project.figma && (
                <a
                  href={project.figma}
                  target="_blank"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white rounded-xl font-semibold hover:bg-white/30 transition-colors"
                >
                  <Figma className="w-5 h-5" />
                  View Design
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Content Section */}
      <div className="max-w-5xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-20"
        >
          {/* Project Meta */}
          <div className="grid md:grid-cols-3 gap-8 pb-12 border-b-2 border-gray-100">
            <div>
              <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">
                Role
              </h3>
              <p className="text-xl font-semibold text-gray-900">{project.role}</p>
            </div>
            <div>
              <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">
                Duration
              </h3>
              <p className="text-xl font-semibold text-gray-900">{project.duration}</p>
            </div>
            <div>
              <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">
                Stack
              </h3>
              <p className="text-xl font-semibold text-gray-900">
                {project.stack.slice(0, 3).join(', ')}
              </p>
            </div>
          </div>

          {/* The Problem */}
          <section>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                The Problem
              </h2>
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border-l-4 border-purple-600">
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  {project.problem}
                </p>
              </div>
            </motion.div>
          </section>

          {/* Approach */}
          <section>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Approach & Implementation
              </h2>
              <div className="space-y-6">
                {project.approach.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex gap-6 group"
                  >
                    <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform`}>
                      {i + 1}
                    </div>
                    <div className="flex-1">
                      <p className="text-lg text-gray-700 leading-relaxed pt-2">
                        {item}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>

          {/* Outcome */}
          <section>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`bg-gradient-to-br ${project.color} rounded-3xl p-10 md:p-12 text-white`}
            >
              <h2 className="text-4xl font-bold mb-6">Outcome & Impact</h2>
              <p className="text-xl leading-relaxed mb-8 text-white/90">
                {project.outcome}
              </p>

              {project.metrics && (
                <div className="grid sm:grid-cols-2 gap-4">
                  {project.metrics.map((metric) => (
                    <div
                      key={metric}
                      className="flex items-start gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4"
                    >
                      <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-0.5" />
                      <span className="font-medium">{metric}</span>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          </section>

          {/* Next Project CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="pt-12 border-t-2 border-gray-100"
          >
            <div className="text-center">
              <p className="text-gray-600 mb-4">Interested in working together?</p>
              <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-gray-900 text-white rounded-xl font-semibold hover:scale-105 transition-transform shadow-lg"
              >
                Start a Project
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
