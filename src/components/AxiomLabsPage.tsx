import React from 'react';
import { axiomLabsExperiments, axiomLabsPreamble } from '../data/axiomLabs';

interface AxiomLabsPageProps {
  navigateTo: (page: string, postId?: string | null) => void;
}

export const AxiomLabsPage: React.FC<AxiomLabsPageProps> = ({ navigateTo }) => {
  return (
    <div className="mx-auto max-w-3xl space-y-8">
      <section className="space-y-4 border-b border-gray-200 pb-8 dark:border-gray-800">
        <p className="text-sm font-medium tracking-wide text-gray-500 dark:text-gray-400">
          Lab
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-gray-950 dark:text-gray-50 sm:text-4xl">
          Axiom Labs
        </h1>
        <p className="max-w-2xl text-base leading-7 text-gray-700 dark:text-gray-300">
          A small shelf for experiments, organized by experiment name. Click an
          experiment to see the posts inside it.
        </p>
        <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4 dark:border-gray-800 dark:bg-gray-950">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400">
            Preamble
          </p>
          <div className="mt-2 flex flex-wrap items-baseline gap-2">
            <h2 className="text-lg font-semibold text-gray-950 dark:text-gray-50">
              {axiomLabsPreamble.title}
            </h2>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {axiomLabsPreamble.date}
            </span>
          </div>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-600 dark:text-gray-400">
            {axiomLabsPreamble.excerpt}
          </p>
        </div>
      </section>

      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-950 dark:text-gray-50">
            Experiments
          </h2>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {axiomLabsExperiments.length} experiment
            {axiomLabsExperiments.length === 1 ? '' : 's'}
          </span>
        </div>

        <div className="space-y-4">
          {axiomLabsExperiments.map((experiment) => (
            <details
              key={experiment.id}
              className="group rounded-2xl border border-gray-200 px-4 py-4 dark:border-gray-800"
            >
              <summary className="cursor-pointer list-none">
                <div className="flex items-baseline justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-950 group-open:text-blue-600 dark:text-gray-50 dark:group-open:text-blue-400">
                      {experiment.name}
                    </h3>
                    <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-600 dark:text-gray-400">
                      {experiment.description}
                    </p>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {experiment.posts.length} post
                    {experiment.posts.length === 1 ? '' : 's'}
                  </span>
                </div>
              </summary>

              <div className="mt-4 space-y-3 border-t border-gray-200 pt-4 dark:border-gray-800">
                {experiment.posts.map((post) => (
                  <article
                    key={post.id}
                    className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0 dark:border-gray-800"
                  >
                    <div className="flex flex-wrap items-baseline gap-2">
                      <button
                        onClick={() => navigateTo('post', post.id)}
                        className="text-left text-base font-medium text-gray-950 hover:text-blue-600 dark:text-gray-50 dark:hover:text-blue-400"
                      >
                        {post.title}
                      </button>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{post.date}</span>
                    </div>
                    <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-600 dark:text-gray-400">
                      {post.summary}
                    </p>
                  </article>
                ))}
              </div>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
};
