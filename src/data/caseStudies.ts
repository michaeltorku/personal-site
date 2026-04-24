export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: '1',
    title: 'ML Pipeline Optimization',
    client: 'E-commerce Platform',
    challenge: 'Existing ML pipeline was taking 12+ hours to process daily data, causing delays in model updates and business decisions.',
    solution: 'Redesigned the pipeline architecture using distributed processing, implemented efficient data pipelines, and optimized model training workflows.',
    results: [
      'Reduced processing time from 12 hours to 2.5 hours (80% improvement)',
      'Enabled real-time model updates',
      'Reduced infrastructure costs by 40%'
    ],
    technologies: ['Python', 'Apache Spark', 'Kubernetes', 'TensorFlow', 'AWS']
  },
  {
    id: '2',
    title: 'Legacy System Modernization',
    client: 'Financial Services Company',
    challenge: 'Monolithic application was difficult to maintain, scale, and deploy. Team velocity was declining due to technical debt.',
    solution: 'Architected a microservices-based solution, established CI/CD pipelines, and implemented modern development practices.',
    results: [
      'Improved deployment frequency from monthly to daily',
      'Reduced bug resolution time by 60%',
      'Enabled independent team scaling'
    ],
    technologies: ['TypeScript', 'Node.js', 'Docker', 'Kubernetes', 'PostgreSQL']
  },
  {
    id: '3',
    title: 'AI-Powered Recommendation System',
    client: 'Media Streaming Platform',
    challenge: 'Needed to improve content recommendation accuracy and user engagement without increasing infrastructure costs.',
    solution: 'Designed and implemented a hybrid recommendation system combining collaborative filtering with deep learning models.',
    results: [
      'Increased user engagement by 35%',
      'Improved recommendation accuracy by 28%',
      'Maintained existing infrastructure costs'
    ],
    technologies: ['Python', 'PyTorch', 'Redis', 'PostgreSQL', 'TensorFlow Serving']
  }
];
