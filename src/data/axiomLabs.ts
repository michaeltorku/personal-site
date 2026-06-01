export interface AxiomLabsPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  summary: string;
  tags: string[];
}

export const axiomLabsPosts: AxiomLabsPost[] = [
  {
    id: 'v0-0-0',
    title: 'v0.0.0',
    date: 'May 31, 2026',
    excerpt:
      'A public lab for testing life, leverage, discipline, happiness, and internet wisdom through weekly experiments.',
    summary:
      'The first experiment is a public execution layer for internet wisdom, where ideas are tested seriously rather than admired passively.',
    tags: ['Experiment', 'Self-Help', 'Internet Wisdom']
  }
];

