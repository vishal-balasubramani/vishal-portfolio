import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <div className="flex items-center gap-2 text-gray-400">
            <span>© 2025 Vishal C B. Built with</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            <span>using Next.js</span>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href="https://github.com/vishal-balasubramani"
              target="_blank"
              className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/vishalcb7853/"
              target="_blank"
              className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:vishalbala2806@gmail.com"
              className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
