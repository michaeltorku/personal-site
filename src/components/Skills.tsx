import React, { useEffect, useRef } from 'react';
interface Skill {
  name: string;
  level: number;
  category: string;
}
export const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const skillBarsRef = useRef<(HTMLDivElement | null)[]>([]);
  const skills: Skill[] = [{
    name: 'React',
    level: 90,
    category: 'Frontend'
  }, {
    name: 'TypeScript',
    level: 85,
    category: 'Frontend'
  }, {
    name: 'JavaScript',
    level: 95,
    category: 'Frontend'
  }, {
    name: 'HTML/CSS',
    level: 90,
    category: 'Frontend'
  }, {
    name: 'Tailwind CSS',
    level: 85,
    category: 'Frontend'
  }, {
    name: 'Node.js',
    level: 75,
    category: 'Backend'
  }, {
    name: 'Express',
    level: 80,
    category: 'Backend'
  }, {
    name: 'MongoDB',
    level: 70,
    category: 'Backend'
  }, {
    name: 'Figma',
    level: 75,
    category: 'Design'
  }, {
    name: 'UI/UX Design',
    level: 80,
    category: 'Design'
  }, {
    name: 'Git',
    level: 85,
    category: 'Tools'
  }, {
    name: 'Jest',
    level: 75,
    category: 'Tools'
  }];
  const categories = Array.from(new Set(skills.map(skill => skill.category)));
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in');
        // Animate skill bars
        skillBarsRef.current.forEach((bar, index) => {
          if (bar) {
            setTimeout(() => {
              bar.style.width = `${skills[index].level}%`;
              bar.style.opacity = '1';
            }, 300 + index * 100);
          }
        });
        observer.unobserve(entry.target);
      }
    }, {
      threshold: 0.1
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [skills]);
  return <section id="skills" ref={sectionRef} className="section opacity-0">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
              I've worked with a variety of technologies and tools throughout my
              career. My focus is on building fast, accessible, and responsive
              web applications using modern JavaScript frameworks and libraries.
            </p>
            <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
              While I specialize in frontend development with React and
              TypeScript, I also have experience with backend technologies and
              design tools that help me create full-stack solutions and
              collaborate effectively with design teams.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8">
              {['React', 'TypeScript', 'Next.js', 'Tailwind', 'Node.js', 'GraphQL'].map(tech => <div key={tech} className="bg-slate-200 dark:bg-slate-700 rounded-lg py-2 px-4 text-center text-slate-800 dark:text-slate-200 font-medium">
                  {tech}
                </div>)}
            </div>
          </div>
          <div className="space-y-8">
            {categories.map(category => <div key={category} className="mb-6">
                <h3 className="text-xl font-semibold mb-4 text-slate-800 dark:text-slate-200">
                  {category}
                </h3>
                <div className="space-y-4">
                  {skills.filter(skill => skill.category === category).map((skill, index) => {
                const actualIndex = skills.findIndex(s => s.name === skill.name);
                return <div key={skill.name} className="mb-2">
                          <div className="flex justify-between mb-1">
                            <span className="font-medium text-slate-700 dark:text-slate-300">
                              {skill.name}
                            </span>
                            <span className="text-slate-600 dark:text-slate-400">
                              {skill.level}%
                            </span>
                          </div>
                          <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5">
                            <div ref={el => skillBarsRef.current[actualIndex] = el} className="bg-indigo-600 h-2.5 rounded-full transition-all duration-1000 ease-out opacity-0" style={{
                      width: '0%'
                    }}></div>
                          </div>
                        </div>;
              })}
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};