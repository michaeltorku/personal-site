export interface ConsultingService {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const consultingServices: ConsultingService[] = [
  {
    id: '1',
    title: 'AI Strategy & Consulting',
    description: 'Develop comprehensive AI strategies aligned with your business goals. From identifying opportunities to building roadmaps for AI adoption.',
    icon: '🤖'
  },
  {
    id: '2',
    title: 'Machine Learning Implementation',
    description: 'Design, develop, and deploy ML models tailored to your specific use cases. End-to-end implementation from data pipeline to production.',
    icon: '🧠'
  },
  {
    id: '3',
    title: 'Software Architecture',
    description: 'Design scalable, maintainable software architectures. System design reviews, technical decision-making, and architecture modernization.',
    icon: '🏗️'
  },
  {
    id: '4',
    title: 'Code Reviews & Technical Audits',
    description: 'Comprehensive code reviews, security audits, and performance optimization. Identify bottlenecks and improve code quality.',
    icon: '🔍'
  },
  {
    id: '5',
    title: 'Technical Leadership',
    description: 'Mentor engineering teams, establish best practices, and drive technical excellence. Help teams scale and deliver high-quality software.',
    icon: '👥'
  },
  {
    id: '6',
    title: 'Full-Stack Development',
    description: 'Build robust web applications from frontend to backend. Modern frameworks, cloud infrastructure, and DevOps practices.',
    icon: '💻'
  }
];
