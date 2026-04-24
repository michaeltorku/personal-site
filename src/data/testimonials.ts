export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    role: 'CTO',
    company: 'TechStart Inc.',
    content: 'Michael helped us architect a scalable ML pipeline that reduced our processing time by 80%. His expertise in both AI and software engineering is exceptional.',
    rating: 5
  },
  {
    id: '2',
    name: 'David Rodriguez',
    role: 'Engineering Manager',
    company: 'ScaleUp Solutions',
    content: 'The technical audit and code review process was thorough and actionable. We implemented the recommendations and saw significant improvements in code quality and performance.',
    rating: 5
  },
  {
    id: '3',
    name: 'Emily Johnson',
    role: 'Product Lead',
    company: 'InnovateAI',
    content: 'Working with Michael on our AI strategy was transformative. He not only provided expert guidance but also helped us build a roadmap that we could actually execute.',
    rating: 5
  }
];
