export interface AxiomLabsPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  summary: string;
}

export interface AxiomLabsPreamble {
  title: string;
  date: string;
  excerpt: string;
}

export interface AxiomLabsExperiment {
  id: string;
  name: string;
  description: string;
  posts: AxiomLabsPost[];
}

export const axiomLabsPreamble: AxiomLabsPreamble = {
  title: 'v0.0.0',
  date: 'May 31, 2026',
  excerpt:
    'A public lab for testing life, leverage, discipline, happiness, and internet wisdom through weekly experiments.'
};

export const axiomLabsPosts: AxiomLabsPost[] = [
  {
    id: 'the-hormozi-test-v1-0-0',
    title: 'The Hormozi Test v1.0.0',
    date: 'April 8, 2026',
    excerpt:
      'An experiment on Alex Hormozi’s business teachings, execution, and whether the ideas hold up in practice.',
    summary:
      'A first experiment on whether Hormozi’s content and systems can translate into a real business outcome.'
  }
];

export const axiomLabsExperiments: AxiomLabsExperiment[] = [
  {
    id: 'hormozi-test',
    name: 'The Hormozi Test',
    description:
      'A first experiment about testing internet wisdom against real execution, starting with Alex Hormozi.',
    posts: axiomLabsPosts
  }
];
