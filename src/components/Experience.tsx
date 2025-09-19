import React, { useEffect, useRef } from 'react';
import { BriefcaseIcon, GraduationCapIcon } from 'lucide-react';
interface TimelineItem {
  id: number;
  title: string;
  organization: string;
  period: string;
  description: string;
  type: 'work' | 'education';
}
export const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineItemsRef = useRef<(HTMLLIElement | null)[]>([]);
  const timelineItems: TimelineItem[] = [{
    id: 1,
    title: 'Senior Frontend Developer',
    organization: 'Tech Innovations Inc.',
    period: '2021 - Present',
    description: 'Lead the development of modern web applications using React, TypeScript, and GraphQL. Mentored junior developers and implemented best practices for code quality and performance optimization.',
    type: 'work'
  }, {
    id: 2,
    title: 'Frontend Developer',
    organization: 'Digital Solutions Agency',
    period: '2019 - 2021',
    description: 'Developed responsive web applications and e-commerce platforms. Collaborated with designers to implement pixel-perfect UI components and improve user experience.',
    type: 'work'
  }, {
    id: 3,
    title: "Master's in Computer Science",
    organization: 'Tech University',
    period: '2017 - 2019',
    description: 'Specialized in Human-Computer Interaction and Web Technologies. Conducted research on improving accessibility in web applications.',
    type: 'education'
  }, {
    id: 4,
    title: 'Junior Web Developer',
    organization: 'StartUp Ventures',
    period: '2016 - 2019',
    description: 'Built and maintained websites and web applications using JavaScript, HTML, and CSS. Implemented responsive designs and integrated third-party APIs.',
    type: 'work'
  }, {
    id: 5,
    title: "Bachelor's in Computer Science",
    organization: 'State University',
    period: '2012 - 2016',
    description: 'Graduated with honors. Focused on software development and web technologies. Completed capstone project on interactive web applications.',
    type: 'education'
  }];
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    timelineItemsRef.current.forEach(item => {
      if (item) {
        observer.observe(item);
      }
    });
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      timelineItemsRef.current.forEach(item => {
        if (item) {
          observer.unobserve(item);
        }
      });
    };
  }, []);
  return <section id="experience" ref={sectionRef} className="section opacity-0">
      <div className="container">
        <h2 className="section-title">Experience & Education</h2>
        <div className="mt-12 relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-700 transform -translate-x-1/2"></div>
          <ul className="space-y-12">
            {timelineItems.map((item, index) => <li key={item.id} ref={el => timelineItemsRef.current[index] = el} className={`relative pl-8 md:pl-0 ${index % 2 === 0 ? 'md:pr-16 md:text-right md:ml-auto md:mr-auto md:w-1/2' : 'md:pl-16 md:ml-auto md:w-1/2'} opacity-0`} style={{
            animationDelay: `${index * 150}ms`
          }}>
                {/* Timeline dot */}
                <div className={`absolute left-0 md:left-1/2 top-0 w-6 h-6 rounded-full bg-white dark:bg-slate-800 border-4 border-indigo-600 transform -translate-x-1/2 z-10 ${item.type === 'education' ? 'border-purple-600' : 'border-indigo-600'}`}></div>
                <div className={`card p-6 ${item.type === 'education' ? 'border-l-4 border-l-purple-600' : 'border-l-4 border-l-indigo-600'}`}>
                  <div className="flex items-center mb-2 space-x-2">
                    <div className={`p-2 rounded-full ${item.type === 'education' ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400' : 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400'}`}>
                      {item.type === 'education' ? <GraduationCapIcon size={18} /> : <BriefcaseIcon size={18} />}
                    </div>
                    <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                      {item.period}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-1 text-slate-800 dark:text-slate-100">
                    {item.title}
                  </h3>
                  <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-3">
                    {item.organization}
                  </p>
                  <p className="text-slate-600 dark:text-slate-400">
                    {item.description}
                  </p>
                </div>
              </li>)}
          </ul>
        </div>
      </div>
    </section>;
};