import React, { useState } from 'react';
import { ExternalLinkIcon } from 'lucide-react';
interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
}
export const ProjectFilter = () => {
  const projects: Project[] = [{
    title: 'Zen Garden App',
    description: 'A meditation and mindfulness application inspired by Japanese zen gardens.',
    image: 'https://media.istockphoto.com/id/104665657/photo/japanese-room-with-a-view.jpg?s=612x612&w=0&k=20&c=aKlihPjrvPuwOK1Mp3RBUky2LvUF_AFJDiwnDWxHNeo=',
    tags: ['React Native', 'Firebase', 'UX Design', 'Mobile']
  }, {
    title: 'Wabi-Sabi Portfolio',
    description: 'A minimalist portfolio template celebrating the beauty of imperfection.',
    image: 'https://images.unsplash.com/photo-1616628188550-808682f3926d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    tags: ['HTML/CSS', 'JavaScript', 'Responsive', 'Web']
  }, {
    title: 'Ikigai Planner',
    description: 'A productivity tool based on the Japanese concept of purpose and fulfillment.',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e',
    tags: ['React', 'Node.js', 'MongoDB', 'Web']
  }, {
    title: 'Shodo Learning Platform',
    description: 'An interactive website for learning Japanese calligraphy fundamentals.',
    image: 'https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    tags: ['Next.js', 'Canvas API', 'Tailwind CSS', 'Education', 'Web']
  }, {
    title: 'Tokyo Transit App',
    description: "A mobile app to navigate Tokyo's complex transit system with ease.",
    image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    tags: ['React Native', 'GraphQL', 'Maps API', 'Mobile']
  }, {
    title: 'Kanji Dictionary',
    description: 'A comprehensive digital dictionary for Japanese kanji characters.',
    image: 'https://images.unsplash.com/photo-1601979031925-424e53b6caaa?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    tags: ['React', 'MongoDB', 'NLP', 'Education', 'Web']
  }];
  const allCategories = ['All', ...new Set(projects.flatMap(project => project.tags))];
  const [activeFilter, setActiveFilter] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [isAnimating, setIsAnimating] = useState(false);
  const handleFilterClick = (category: string) => {
    setIsAnimating(true);
    setActiveFilter(category);
    setTimeout(() => {
      if (category === 'All') {
        setFilteredProjects(projects);
      } else {
        setFilteredProjects(projects.filter(project => project.tags.includes(category)));
      }
      setIsAnimating(false);
    }, 300);
  };
  return <section id="projects" className="py-20 bg-stone-100 dark:bg-stone-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-light text-stone-800 dark:text-stone-100 mb-2 inline-block border-b-2 border-red-700 pb-1">
            Projects
          </h2>
          <p className="text-sm text-stone-500 dark:text-stone-400">
            プロジェクト
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {allCategories.map((category, index) => <button key={index} onClick={() => handleFilterClick(category)} className={`px-4 py-2 rounded-full transition-all duration-300 ${activeFilter === category ? 'bg-red-700 text-white shadow-md' : 'bg-white dark:bg-stone-800 text-stone-600 dark:text-stone-300 hover:bg-red-700/10'}`}>
              {category}
            </button>)}
        </div>
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
          {filteredProjects.map((project, index) => <div key={index} className="bg-white dark:bg-stone-800 rounded-lg overflow-hidden shadow-sm border border-stone-200 dark:border-stone-700 hover:shadow-md transition-all duration-300 group hover:border-red-700/20">
              <div className="aspect-video relative overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                  <h3 className="text-white text-xl font-medium">
                    {project.title}
                  </h3>
                  <a href="#" className="text-white flex items-center bg-red-700/80 hover:bg-red-700 px-3 py-1 rounded-md transition-colors">
                    View <ExternalLinkIcon size={16} className="ml-1" />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl text-stone-800 dark:text-stone-100 mb-2 font-normal">
                  {project.title}
                </h3>
                <p className="text-stone-600 dark:text-stone-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => <span key={idx} className="px-3 py-1 bg-indigo-900/10 dark:bg-indigo-900/20 text-indigo-900 dark:text-indigo-300 text-sm rounded-full">
                      {tag}
                    </span>)}
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};