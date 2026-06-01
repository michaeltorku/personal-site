import React from 'react';

interface AxiomLabsPageProps {
  navigateTo: (page: string) => void;
}

export const AxiomLabsPage: React.FC<AxiomLabsPageProps> = ({ navigateTo }) => {
  return (
    <div className="mx-auto max-w-2xl space-y-8">
      <section className="space-y-4 border-b border-gray-200 pb-8 dark:border-gray-800">
        <p className="text-sm font-medium tracking-wide text-gray-500 dark:text-gray-400">
          Tab
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-gray-950 dark:text-gray-50 sm:text-4xl">
          Axiom Labs
        </h1>
        <p className="max-w-xl text-base leading-7 text-gray-700 dark:text-gray-300">
          Axiom Labs is a place for experiments, prototypes, and ideas that sit
          a little outside the blog. The first version should stay minimal and
          focused.
        </p>
        <div className="flex flex-wrap gap-2 pt-2">
          <button
            onClick={() => navigateTo('home')}
            className="rounded-full border border-gray-300 px-4 py-2 text-sm text-gray-700 hover:border-gray-500 hover:text-gray-950 dark:border-gray-700 dark:text-gray-300 dark:hover:border-gray-500 dark:hover:text-gray-50"
          >
            Back to blog
          </button>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-bold text-gray-950 dark:text-gray-50">
          v0.0.0
        </h2>
        <p className="max-w-2xl text-sm leading-6 text-gray-600 dark:text-gray-400">
          This page can hold experiments, notes, and small product ideas as they
          evolve. For now, it stays quiet and clear so the content can grow
          without fighting the layout.
        </p>
      </section>
    </div>
  );
};

