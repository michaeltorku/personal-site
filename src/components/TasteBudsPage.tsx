import React, { useMemo, useState } from 'react';
import { tasteBudsIntro, tasteBudsRankingGroups } from '../data/tasteBuds';

interface TasteBudsPageProps {
  navigateTo: (page: string) => void;
}

type RankingMode = 'cuisine' | 'blind' | 'context';

const modeMeta: Record<
  RankingMode,
  { label: string; title: string; description: string }
> = {
  cuisine: {
    label: 'By cuisine',
    title: 'Cuisine rankings',
    description: 'See the best spots for each cuisine.'
  },
  blind: {
    label: 'Blind ranking',
    title: 'Blind rankings',
    description: 'Compare food on taste alone.'
  },
  context: {
    label: 'By moment',
    title: 'Meal context',
    description: 'Rank food by the kind of moment it fits.'
  }
};

export const TasteBudsPage: React.FC<TasteBudsPageProps> = ({ navigateTo }) => {
  const [mode, setMode] = useState<RankingMode>('cuisine');

  const currentGroup = useMemo(() => {
    if (mode === 'cuisine') return tasteBudsRankingGroups[0];
    if (mode === 'blind') return tasteBudsRankingGroups[1];
    return tasteBudsRankingGroups[2];
  }, [mode]);

  return (
    <div className="mx-auto max-w-3xl space-y-8">
      <section className="space-y-4 border-b border-gray-200 pb-8 dark:border-gray-800">
        <p className="text-sm font-medium tracking-wide text-gray-500 dark:text-gray-400">
          Food project
        </p>
        <div className="space-y-3">
          <h1 className="text-3xl font-bold tracking-tight text-gray-950 dark:text-gray-50 sm:text-4xl">
            {tasteBudsIntro.title}
          </h1>
          <p className="max-w-2xl text-base leading-7 text-gray-700 dark:text-gray-300">
            {tasteBudsIntro.description}
          </p>
          <p className="max-w-2xl text-sm leading-6 text-gray-500 dark:text-gray-400">
            {tasteBudsIntro.manifesto}
          </p>
        </div>
        <div className="flex flex-wrap gap-2 pt-2">
          {Object.entries(modeMeta).map(([key, value]) => (
            <button
              key={key}
              onClick={() => setMode(key as RankingMode)}
              className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                mode === key
                  ? 'border-gray-950 bg-gray-950 text-white dark:border-gray-50 dark:bg-gray-50 dark:text-gray-950'
                  : 'border-gray-300 text-gray-700 hover:border-gray-500 hover:text-gray-950 dark:border-gray-700 dark:text-gray-300 dark:hover:border-gray-500 dark:hover:text-gray-50'
              }`}
            >
              {value.label}
            </button>
          ))}
          <button
            onClick={() => navigateTo('home')}
            className="rounded-full border border-transparent px-4 py-2 text-sm text-gray-500 hover:text-gray-950 dark:text-gray-400 dark:hover:text-gray-50"
          >
            Back to blog
          </button>
        </div>
      </section>

      <section className="space-y-3">
        <div className="flex items-baseline justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-950 dark:text-gray-50">
              {modeMeta[mode].title}
            </h2>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              {modeMeta[mode].description}
            </p>
          </div>
          <span className="hidden rounded-full border border-gray-200 px-3 py-1 text-xs font-medium text-gray-500 dark:border-gray-800 dark:text-gray-400 sm:inline-flex">
            {currentGroup.items.length} entries
          </span>
        </div>

        <div className="space-y-3">
          {currentGroup.items.map((item) => (
            <article
              key={`${mode}-${item.name}`}
              className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0 dark:border-gray-800"
            >
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-lg font-semibold text-gray-950 dark:text-gray-50">
                  {item.name}
                </h3>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {item.cuisine}
                </span>
              </div>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-600 dark:text-gray-400">
                {item.notes}
              </p>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-500">
                {item.whyItWorks}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-gray-200 pt-6 dark:border-gray-800">
        <p className="max-w-2xl text-sm leading-6 text-gray-500 dark:text-gray-400">
          Taste Buds is meant to feel like a simple place to pick a ranking,
          read a little about the project, and move quickly into the food itself.
          The project can expand later, but the first version should stay quiet,
          minimal, and easy to scan.
        </p>
      </section>
    </div>
  );
};

