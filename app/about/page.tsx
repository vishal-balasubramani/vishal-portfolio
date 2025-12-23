'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Award, Briefcase, GraduationCap, Code2, Target, Lightbulb, Users, Trophy } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
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
                About Me
              </span>
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Building Solutions{' '}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                That Matter
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Full-Stack Developer | Mobile App Developer | AI/ML Enthusiast | UI/UX Designer
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        {/* About Section with Photo Gallery */}
        <div className="grid lg:grid-cols-5 gap-12 items-start mb-20">
          {/* Photo Gallery - Takes 2 columns */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="sticky top-24 space-y-6">
              {/* Main Photo */}
              <div className="relative">
                {/* Glowing background effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-3xl blur-2xl opacity-20 animate-pulse"></div>
                
                {/* Main Photo container */}
                <div className="relative w-full aspect-square rounded-3xl overflow-hidden border-4 border-gray-100 shadow-2xl">
                  <Image
                    src="/projects/vishal_profile.jpg"
                    alt="Vishal C B"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Decorative badge */}
                <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl p-4 border border-gray-100">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold text-gray-900">Available for Work</span>
                  </div>
                </div>
              </div>

              {/* Additional Photos Row 1 */}
              <div className="grid grid-cols-2 gap-4">
                {/* Photo 2 */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                  className="relative aspect-square rounded-2xl overflow-hidden border-2 border-gray-100 shadow-lg hover:shadow-xl transition-shadow group"
                >
                  <Image
                    src="/projects/leetcode.png"
                    alt="Vishal working"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-3 left-3 text-white text-sm font-medium">
                      Coding Session
                    </div>
                  </div>
                </motion.div>

                {/* Photo 3 */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 }}
                  className="relative aspect-square rounded-2xl overflow-hidden border-2 border-gray-100 shadow-lg hover:shadow-xl transition-shadow group"
                >
                  <Image
                    src="/projects/HACKATHON.jpg"
                    alt="Vishal presenting"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-3 left-3 text-white text-sm font-medium">
                      Hackathon
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Additional Photos Row 2 */}
              <div className="grid grid-cols-2 gap-4">
                {/* Photo 4 */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  className="relative aspect-square rounded-2xl overflow-hidden border-2 border-gray-100 shadow-lg hover:shadow-xl transition-shadow group"
                >
                  <Image
                    src="/projects/figma_ui.png"
                    alt="Vishal designing"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-3 left-3 text-white text-sm font-medium">
                      UI Design
                    </div>
                  </div>
                </motion.div>

                {/* Photo 5 */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 }}
                  className="relative aspect-square rounded-2xl overflow-hidden border-2 border-gray-100 shadow-lg hover:shadow-xl transition-shadow group"
                >
                  <Image
                    src="/projects/team_work .jpg"
                    alt="Vishal collaborating"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-3 left-3 text-white text-sm font-medium">
                      Team Work
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Text Box - Takes 3 columns */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            {/* Boxed Content */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-10 border border-gray-200 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Hi, I'm <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Vishal C B</span>
              </h2>

              <div className="space-y-6">
                <p className="text-lg text-gray-600 leading-relaxed">
                  I'm a passionate full-stack developer specializing in building exceptional digital experiences that solve real-world problems. From real-time parking management systems to ML-powered solutions, I focus on creating products that make a meaningful impact.
                </p>

                <p className="text-lg text-gray-600 leading-relaxed">
                  Currently pursuing my degree at <span className="font-semibold text-gray-900">Chennai Institute of Technology (CIT)</span>, I've worked on diverse projects spanning mobile development with Flutter, full-stack web applications with React and Next.js, backend systems with Express.js and Django, and AI/ML solutions using PyTorch.
                </p>

                <p className="text-lg text-gray-600 leading-relaxed">
                  My expertise includes full-stack development (React.js, Next.js, Express.js, Django), mobile app development (Flutter, Firebase), databases (MongoDB, PostgreSQL, MySQL), AI/ML (PyTorch, Pandas, Streamlit), and UI/UX design (Figma). I'm also proficient in competitive programming with C++, Java, and Python.
                </p>

                <p className="text-lg text-gray-600 leading-relaxed">
                  I believe in writing clean, maintainable code and creating intuitive user experiences. Whether it's architecting scalable backends, designing pixel-perfect interfaces, or training ML models, I approach every challenge with curiosity and attention to detail.
                </p>
              </div>

              {/* Divider */}
              <div className="my-8 border-t border-gray-200"></div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:scale-105 transition-transform shadow-lg"
                >
                  View My Work
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/contact"
                  className="px-6 py-3 border-2 border-gray-300 text-gray-900 rounded-xl font-semibold hover:border-gray-900 hover:scale-105 transition-all"
                >
                  Get In Touch
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        {/* What I Do Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            What I <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Do</span>
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            I work across the entire development stack, from design to deployment
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Code2,
                title: 'Full-Stack Development',
                description: 'Building end-to-end web applications with React, Next.js, Express.js, and Django. From RESTful APIs to server-side rendering.',
                gradient: 'from-blue-500 to-cyan-500',
              },
              {
                icon: Target,
                title: 'Mobile Development',
                description: 'Creating cross-platform mobile apps with Flutter and Dart. Real-time features, offline support, and smooth animations.',
                gradient: 'from-purple-500 to-pink-500',
              },
              {
                icon: Lightbulb,
                title: 'AI/ML Solutions',
                description: 'Developing intelligent systems using PyTorch, Pandas, and Streamlit. From predictive models to data visualization.',
                gradient: 'from-orange-500 to-red-500',
              },
              {
                icon: Users,
                title: 'UI/UX Design',
                description: 'Designing intuitive interfaces and comprehensive design systems in Figma. User research to high-fidelity prototypes.',
                gradient: 'from-green-500 to-teal-500',
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Journey Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            My <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Key milestones and experiences that shaped my development career
          </p>

          <div className="space-y-8">
            {[
              {
                icon: GraduationCap,
                title: 'Education',
                subtitle: 'Chennai Institute of Technology (CIT)',
                period: 'Present',
                description: 'Pursuing degree with focus on software development, data structures, algorithms, and AI/ML. Active participant in coding competitions and hackathons.',
                gradient: 'from-blue-500 to-cyan-500',
                highlights: ['Data Structures & Algorithms', 'Software Engineering', 'Machine Learning', 'Database Management']
              },
              {
                icon: Briefcase,
                title: 'UI/UX Design Intern',
                subtitle: 'Acutix',
                period: '3 Months',
                description: 'Created comprehensive design systems and enterprise product interfaces in Figma. Collaborated with development teams on design handoff and implementation specifications.',
                gradient: 'from-purple-500 to-pink-500',
                highlights: ['Design Systems', 'Component Libraries', 'User Research', 'Prototyping']
              },
              {
                icon: Code2,
                title: 'Full-Stack Development Projects',
                subtitle: 'UrbanPark • CIT Attendance • GuardianCircle',
                period: 'Multiple Projects',
                description: 'Built production-ready applications with Flutter, Node.js, Express, and PostgreSQL serving real users. Implemented features like real-time updates, offline sync, payment integration, and PDF generation.',
                gradient: 'from-orange-500 to-red-500',
                highlights: ['Real-time Systems', 'Payment Integration', 'Offline-First Apps', 'RESTful APIs']
              },
              {
                icon: Trophy,
                title: 'ML Hackathon - Team Lead',
                subtitle: 'IIT Industrial & Automation Hackathon',
                period: '24 Hours',
                description: 'Led 4-person team as ML lead, coordinating model development, data processing, and Streamlit deployment. Delivered working ML solution with clear metrics and business impact.',
                gradient: 'from-green-500 to-teal-500',
                highlights: ['Team Leadership', 'PyTorch', 'Fast Iteration', 'MVP Development']
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative"
              >
                {/* Timeline line */}
                {i !== 3 && (
                  <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-gradient-to-b from-purple-200 to-transparent"></div>
                )}

                <div className="flex gap-6 p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className={`flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg z-10`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                        <p className="text-purple-600 font-semibold">{item.subtitle}</p>
                      </div>
                      <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                        {item.period}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4 leading-relaxed">{item.description}</p>
                    
                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2">
                      {item.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Technical <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Core technologies and tools I use to build production applications
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Frontend',
                skills: ['React.js', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Framer Motion'],
                gradient: 'from-blue-500 to-cyan-500',
              },
              {
                title: 'Backend',
                skills: ['Express.js', 'Django', 'Node.js', 'REST APIs', 'WebSocket', 'Prisma ORM'],
                gradient: 'from-purple-500 to-pink-500',
              },
              {
                title: 'Database',
                skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'SQLite', 'Database Design', 'Query Optimization'],
                gradient: 'from-orange-500 to-red-500',
              },
              {
                title: 'Mobile',
                skills: ['Flutter', 'Dart', 'Firebase', 'SQLite', 'Push Notifications', 'Offline Sync'],
                gradient: 'from-green-500 to-teal-500',
              },
              {
                title: 'AI/ML',
                skills: ['PyTorch', 'Pandas', 'NumPy', 'Streamlit', 'Machine Learning', 'Deep Learning'],
                gradient: 'from-indigo-500 to-purple-500',
              },
              {
                title: 'Design',
                skills: ['Figma', 'UI/UX Design', 'Design Systems', 'Prototyping', 'Wireframing', 'User Research'],
                gradient: 'from-pink-500 to-rose-500',
              },
              {
                title: 'Languages',
                skills: ['C++', 'Java', 'Python', 'JavaScript', 'TypeScript', 'Dart'],
                gradient: 'from-yellow-500 to-orange-500',
              },
              {
                title: 'Tools & DevOps',
                skills: ['Git', 'GitHub', 'Vercel', 'Render', 'CI/CD', 'Docker'],
                gradient: 'from-teal-500 to-green-500',
              },
            ].map((category, i) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group p-6 bg-white rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all"
              >
                <h3 className={`text-lg font-bold mb-4 bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}>
                  {category.title}
                </h3>
                <div className="space-y-2">
                  {category.skills.map((skill) => (
                    <div key={skill} className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.gradient}`} />
                      <span className="text-gray-700 text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: '5+', label: 'Projects Completed', gradient: 'from-blue-500 to-cyan-500' },
              { number: '4+', label: 'Tech Domains', gradient: 'from-purple-500 to-pink-500' },
              { number: '15+', label: 'Technologies', gradient: 'from-orange-500 to-red-500' },
              { number: '1000+', label: 'Lines of Code', gradient: 'from-green-500 to-teal-500' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all"
              >
                <div className={`text-5xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}>
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-white"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's Work Together
          </h2>
          <p className="text-lg md:text-xl mb-8 text-purple-100 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, and opportunities to be part of your vision
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-purple-600 rounded-xl font-semibold hover:scale-105 transition-transform shadow-lg"
            >
              Contact Me
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="https://drive.google.com/file/d/1AzwwLV1G5gsvSDiKkltfhSOKndLeNgXc/view?usp=sharing"
              download
              className="px-8 py-4 border-2 border-white/30 text-white rounded-xl font-semibold hover:bg-white/10 transition-all"
            >
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
