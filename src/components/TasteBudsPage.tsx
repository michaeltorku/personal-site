import React from 'react';
import {
  tasteBudsBreakfastBrunchRanking,
  tasteBudsIntro,
  tasteBudsLunchDinnerRanking,
} from '../data/tasteBuds';

interface TasteBudsPageProps {
  navigateTo: (page: string) => void;
}

export const TasteBudsPage: React.FC<TasteBudsPageProps> = ({ navigateTo }) => {
  return (
    <div className="mx-auto max-w-4xl space-y-10">
      <section className="border-b border-gray-200 pb-8 dark:border-gray-800">
      <p className="text-sm font-medium tracking-wide text-gray-500 dark:text-gray-400">
          Just a guy and his
        </p>
        <div className="max-w-3xl">
          <h2 className="font-serif text-5xl font-semibold tracking-tight text-gray-950 dark:text-gray-50 sm:text-6xl">
            Taste Buds
          </h2>
          <p className="mt-3 font-serif text-lg italic text-gray-600 dark:text-gray-400">
            [teyst buhdz] noun
          </p>
          <div className="mt-6 space-y-6 font-serif text-lg leading-8 text-gray-700 dark:text-gray-300 sm:text-xl">
            <p>
              small sensory organs located primarily on the tongue,
              responsible for detecting taste.
            </p>
            <p>
              Buddies sharing food and enjoying great taste together.
            </p>
          </div>
          <blockquote className="mt-6 border-l-2 border-gray-200 pl-4 text-sm italic text-gray-600 dark:border-gray-800 dark:text-gray-400">
            {tasteBudsIntro.quoteOne}
          </blockquote>
          <button
            onClick={() => navigateTo('home')}
            className="mt-4 inline-block text-sm text-gray-500 underline decoration-gray-300 underline-offset-4 transition-colors hover:text-gray-950 hover:decoration-gray-700 dark:text-gray-400 dark:decoration-gray-600 dark:hover:text-gray-50"
          >
            Back to blog
          </button>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-950 dark:text-gray-50">
              Current ranking
            </h2>
            <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500 dark:text-gray-400">
              Breakfast/brunch on the left. Lunch/dinner on the right.
            </p>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <RankingList
            title="Breakfast / brunch"
            items={tasteBudsBreakfastBrunchRanking}
          />
          <RankingList
            title="Lunch / dinner"
            items={tasteBudsLunchDinnerRanking}
          />
        </div>
      </section>
    </div>
  );
};

const RankingList = ({
  title,
  items
}: {
  title: string;
  items: Array<{
    rank: number;
    name: string;
    cuisine: string;
    note: string;
    verdict: string;
    location?: string;
    branch?: string;
  }>;
}) => (
  <article className="space-y-4 border-t border-gray-200 pt-4 dark:border-gray-800">
    <h3 className="text-lg font-semibold text-gray-950 dark:text-gray-50">
      {title}
    </h3>
    <div className="space-y-3">
      {items.map((item) => (
        <div
          key={`${title}-${item.rank}-${item.name}`}
          className="border-b border-gray-200 pb-3 last:border-b-0 last:pb-0 dark:border-gray-800"
        >
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <div className="min-w-0">
              <div className="flex items-baseline gap-2">
                <span className="text-sm font-medium text-gray-400 dark:text-gray-500">
                  {item.rank}
                </span>
                <h4 className="truncate text-base font-semibold text-gray-950 dark:text-gray-50">
                  {item.name}
                </h4>
              </div>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                {item.cuisine}
                {item.location ? ` • ${item.location}` : ''}
                {item.branch ? ` • ${item.branch}` : ''}
              </p>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-gray-600 dark:text-gray-400">
                {item.note}
              </p>
            </div>

            <span className="shrink-0 text-xs font-medium uppercase tracking-[0.14em] text-gray-500 dark:text-gray-400">
              {item.verdict}
            </span>
          </div>
        </div>
      ))}
    </div>
  </article>
);
