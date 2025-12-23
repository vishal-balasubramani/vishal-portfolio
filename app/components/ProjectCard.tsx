'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Github, ExternalLink, Figma, ArrowRight } from 'lucide-react';
import { Project } from '@/content/project';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <Link href={`/projects/${project.slug}`}>
        <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
          {/* Image Section with Gradient Overlay */}
          <div className="relative h-72 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
            {/* Gradient overlay that appears on hover */}
            <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-90 transition-all duration-500 z-10`} />
            
            {/* Placeholder for project image */}
            <motion.div
              className={`w-full h-full bg-gradient-to-br ${project.color} flex items-center justify-center`}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-white text-center p-8">
                <h3 className="text-3xl font-bold mb-2">{project.title}</h3>
                <p className="text-white/80">{project.role}</p>
              </div>
            </motion.div>

            {/* Floating tech stack tags on hover */}
            <div className="absolute bottom-4 left-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="flex flex-wrap gap-2">
                {project.stack.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-semibold text-gray-900 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
                {project.stack.length > 4 && (
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-semibold text-gray-900 rounded-full">
                    +{project.stack.length - 4}
                  </span>
                )}
              </div>
            </div>

            {/* View Project button on hover */}
            <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="px-6 py-3 bg-white text-gray-900 rounded-xl font-semibold flex items-center gap-2 shadow-lg">
                View Case Study
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-8 flex-1 flex flex-col">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors mb-2">
                  {project.title}
                </h2>
                <p className="text-sm font-medium text-purple-600">{project.role}</p>
              </div>
              
              {/* Icons */}
              <div className="flex gap-2 ml-4">
                {project.github && (
                  <div className="p-2 bg-gray-100 rounded-lg group-hover:bg-gray-900 group-hover:text-white transition-colors">
                    <Github className="w-4 h-4" />
                  </div>
                )}
                {project.live && (
                  <div className="p-2 bg-gray-100 rounded-lg group-hover:bg-gray-900 group-hover:text-white transition-colors">
                    <ExternalLink className="w-4 h-4" />
                  </div>
                )}
                {project.figma && (
                  <div className="p-2 bg-gray-100 rounded-lg group-hover:bg-gray-900 group-hover:text-white transition-colors">
                    <Figma className="w-4 h-4" />
                  </div>
                )}
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed mb-6 flex-1">
              {project.summary}
            </p>

            {/* Metrics */}
            {project.metrics && (
              <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
                {project.metrics.slice(0, 3).map((metric) => (
                  <span
                    key={metric}
                    className="text-xs font-medium text-gray-500 flex items-center gap-1"
                  >
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                    {metric}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Animated border gradient */}
          <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-2xl`} />
        </div>
      </Link>
    </motion.div>
  );
}
