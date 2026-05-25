import React from 'react';
import { tasteBudsIntro, tasteBudsRankingGroups } from '../data/tasteBuds';

interface TasteBudsPageProps {
  navigateTo: (page: string) => void;
}

export const TasteBudsPage: React.FC<TasteBudsPageProps> = ({ navigateTo }) => {
  return (
    <div className="space-y-10">
      <section className="rounded-3xl border border-gray-200 bg-gradient-to-br from-amber-50 via-white to-orange-50 p-8 shadow-sm dark:border-gray-800 dark:from-gray-900 dark:via-gray-900 dark:to-gray-950">
        <div className="max-w-2xl space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700 dark:text-amber-400">
            Food project
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-gray-950 dark:text-gray-50 sm:text-5xl">
            {tasteBudsIntro.title}
          </h1>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            {tasteBudsIntro.description}
          </p>
          <p className="max-w-2xl text-base leading-7 text-gray-600 dark:text-gray-400">
            {tasteBudsIntro.manifesto}
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <button
              onClick={() => navigateTo('home')}
              className="rounded-full bg-gray-950 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 dark:bg-gray-50 dark:text-gray-950 dark:hover:bg-white"
            >
              Back to blog
            </button>
            <span className="rounded-full border border-gray-300 px-4 py-2 text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
              Conversation first
            </span>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-950">
          <p className="text-sm font-semibold text-amber-700 dark:text-amber-400">Primary lens</p>
          <h2 className="mt-2 text-xl font-bold">What did we actually taste?</h2>
          <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
            Use taste notes, texture, seasoning, temperature, and aftertaste.
          </p>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-950">
          <p className="text-sm font-semibold text-amber-700 dark:text-amber-400">Social lens</p>
          <h2 className="mt-2 text-xl font-bold">Who were we with?</h2>
          <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
            The best food memories include the conversation, not just the dish.
          </p>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-950">
          <p className="text-sm font-semibold text-amber-700 dark:text-amber-400">Ranking lens</p>
          <h2 className="mt-2 text-xl font-bold">Compare by context</h2>
          <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
            Separate cuisine, blind ranking, and meal state so each answer stays useful.
          </p>
        </div>
      </section>

      {tasteBudsRankingGroups.map((group) => (
        <section key={group.title} className="space-y-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-950 dark:text-gray-50">{group.title}</h2>
            <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-400">{group.description}</p>
          </div>
          <div className="grid gap-4">
            {group.items.map((item, index) => (
              <article
                key={`${group.title}-${item.name}-${index}`}
                className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-950"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-xl font-bold text-gray-950 dark:text-gray-50">
                        {item.name}
                      </h3>
                      <span className="rounded-full bg-amber-100 px-2.5 py-1 text-xs font-semibold text-amber-800 dark:bg-amber-500/15 dark:text-amber-300">
                        {item.cuisine}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                      {[item.branch, item.location].filter(Boolean).join(' • ') || item.context}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {item.cuisineRank ? (
                      <span className="rounded-full border border-gray-300 px-3 py-1 text-xs font-medium text-gray-700 dark:border-gray-700 dark:text-gray-300">
                        Cuisine #{item.cuisineRank}
                      </span>
                    ) : null}
                    {item.blindRank ? (
                      <span className="rounded-full border border-gray-300 px-3 py-1 text-xs font-medium text-gray-700 dark:border-gray-700 dark:text-gray-300">
                        Blind #{item.blindRank}
                      </span>
                    ) : null}
                    {item.contextRank ? (
                      <span className="rounded-full border border-gray-300 px-3 py-1 text-xs font-medium text-gray-700 dark:border-gray-700 dark:text-gray-300">
                        Context #{item.contextRank}
                      </span>
                    ) : null}
                    <span className="rounded-full border border-gray-300 px-3 py-1 text-xs font-medium text-gray-700 dark:border-gray-700 dark:text-gray-300">
                      {item.context}
                    </span>
                  </div>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div>
                    <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">Notes</p>
                    <p className="mt-2 text-sm leading-7 text-gray-600 dark:text-gray-400">
                      {item.notes}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">Why it works</p>
                    <p className="mt-2 text-sm leading-7 text-gray-600 dark:text-gray-400">
                      {item.whyItWorks}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

