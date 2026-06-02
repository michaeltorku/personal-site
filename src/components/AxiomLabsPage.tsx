import React, { useState } from 'react';
import { axiomLabsExperiments, axiomLabsPreamble } from '../data/axiomLabs';

interface AxiomLabsPageProps {
  navigateTo: (page: string, postId?: string | null) => void;
}

export const AxiomLabsPage: React.FC<AxiomLabsPageProps> = ({ navigateTo }) => {
  const [openExperimentId, setOpenExperimentId] = useState<string | null>(
    axiomLabsExperiments[0]?.id ?? null
  );

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
          experiment to see the posts inside it.{' '}
          <button
            type="button"
            onClick={() => navigateTo('post', 'axiom-labs')}
            className="underline decoration-gray-300 underline-offset-4 transition-colors hover:text-blue-600 hover:decoration-blue-300 dark:decoration-gray-600 dark:hover:text-blue-400 dark:hover:decoration-blue-500/60"
          >
            Background
          </button>
        </p>
      </section>

      <section className="space-y-3">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl font-bold text-gray-950 dark:text-gray-50">
            Experiments
          </h2>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {axiomLabsExperiments.length} experiment
            {axiomLabsExperiments.length === 1 ? '' : 's'}
          </span>
        </div>

        <div className="divide-y divide-gray-200 dark:divide-gray-800">
          {axiomLabsExperiments.map((experiment) => (
            <section key={experiment.id} className="border-b border-gray-200 dark:border-gray-800">
              <button
                type="button"
                onClick={() =>
                  setOpenExperimentId((current) =>
                    current === experiment.id ? null : experiment.id
                  )
                }
                className="flex w-full items-start justify-between gap-6 py-5 text-left transition-colors hover:text-blue-600 dark:hover:text-blue-400"
              >
                <div className="min-w-0 pl-1">
                  <h3 className="text-lg font-semibold text-gray-950 dark:text-gray-50">
                    {experiment.name}
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-600 dark:text-gray-400">
                    {experiment.description}
                  </p>
                </div>
                <div className="flex shrink-0 items-center gap-3">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {experiment.posts.length} post
                    {experiment.posts.length === 1 ? '' : 's'}
                  </span>
                  <span
                    className={`flex h-8 w-8 items-center justify-center transition-transform ${
                      openExperimentId === experiment.id ? 'rotate-180' : ''
                    }`}
                    aria-hidden
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </span>
                </div>
              </button>

              {openExperimentId === experiment.id ? (
                <div className="pl-6 pr-0 pb-5">
                  <div className="space-y-2">
                    {experiment.posts.map((post) => (
                      <article
                        key={post.id}
                        className="rounded-xl bg-gray-50 px-4 py-4 dark:bg-gray-950/60"
                      >
                        <div className="flex flex-wrap items-baseline gap-2">
                          <button
                            onClick={() => navigateTo('post', post.id)}
                            className="text-left text-base font-medium text-gray-950 underline decoration-gray-300 underline-offset-4 transition-colors hover:text-blue-600 hover:decoration-blue-300 dark:text-gray-50 dark:decoration-gray-600 dark:hover:text-blue-400 dark:hover:decoration-blue-500/60"
                          >
                            {post.title}
                          </button>
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {post.date}
                          </span>
                        </div>
                        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-600 dark:text-gray-400">
                          {post.summary}
                        </p>
                      </article>
                    ))}
                  </div>
                </div>
              ) : null}
            </section>
          ))}
        </div>
      </section>
    </div>
  );
};
