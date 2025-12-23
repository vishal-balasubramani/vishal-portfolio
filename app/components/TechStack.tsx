'use client';

import { motion } from 'framer-motion';
import { Code2, Database, Smartphone, Cloud, Palette, Zap, Brain, Terminal } from 'lucide-react';

const techCategories = [
  {
    icon: Code2,
    title: 'Frontend Development',
    skills: ['React.js', 'Next.js', 'JavaScript', 'TypeScript', 'Tailwind CSS'],
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Terminal,
    title: 'Backend Development',
    skills: ['Express.js', 'Django', 'Node.js', 'REST APIs', 'WebSocket'],
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Database,
    title: 'Database',
    skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Prisma', 'Database Design'],
    gradient: 'from-orange-500 to-red-500',
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    skills: ['Flutter', 'Dart', 'Firebase', 'SQLite', 'Mobile UI/UX'],
    gradient: 'from-green-500 to-teal-500',
  },
  {
    icon: Brain,
    title: 'AI/ML',
    skills: ['PyTorch', 'Pandas', 'Streamlit', 'Machine Learning', 'Deep Learning'],
    gradient: 'from-indigo-500 to-purple-500',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    skills: ['Figma', 'Design Systems', 'Prototyping', 'User Research', 'Wireframing'],
    gradient: 'from-pink-500 to-rose-500',
  },
  {
    icon: Zap,
    title: 'Programming Languages',
    skills: ['C++', 'Java', 'Python', 'JavaScript', 'Dart'],
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Cloud,
    title: 'DevOps & Tools',
    skills: ['Git', 'GitHub', 'Vercel', 'Render', 'CI/CD'],
    gradient: 'from-teal-500 to-green-500',
  },
];

export default function TechStack() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block mb-6"
          >
            <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">
              Skills & Expertise
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Tech <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Stack</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Technologies and tools I use to build production-ready applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-transparent"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                <category.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium group-hover:bg-gradient-to-r group-hover:from-purple-100 group-hover:to-pink-100 transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Hover gradient border */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl`} />
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          {[
            { number: '5+', label: 'Projects Completed' },
            { number: '3+', label: 'Tech Stacks' },
            { number: '8+', label: 'Technologies' },
            { number: '1+', label: 'Years Experience' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border border-purple-100"
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
