import React from 'react';
import { AnimatedCounter } from './AnimatedCounter';
import { CodeIcon, UsersIcon, CoffeeIcon, AwardIcon } from 'lucide-react';
export const Stats = () => {
  const stats = [{
    icon: <CodeIcon size={28} className="text-red-700 dark:text-red-500" />,
    value: 150,
    label: 'Projects Completed',
    suffix: '+'
  }, {
    icon: <UsersIcon size={28} className="text-red-700 dark:text-red-500" />,
    value: 80,
    label: 'Happy Clients',
    suffix: '+'
  }, {
    icon: <CoffeeIcon size={28} className="text-red-700 dark:text-red-500" />,
    value: 5000,
    label: 'Cups of Coffee',
    suffix: '+'
  }, {
    icon: <AwardIcon size={28} className="text-red-700 dark:text-red-500" />,
    value: 15,
    label: 'Awards Received',
    suffix: ''
  }];
  return <section className="py-16 bg-stone-50 dark:bg-stone-800 border-y border-stone-200 dark:border-stone-700">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => <div key={index} className="bg-white dark:bg-stone-700 p-6 rounded-lg shadow-sm border border-stone-200 dark:border-stone-600 hover:shadow-md transition-all duration-300 hover:border-red-700/20 text-center group">
              <div className="w-16 h-16 rounded-full bg-red-700/10 dark:bg-red-700/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              <p className="text-stone-600 dark:text-stone-300 mt-2">
                {stat.label}
              </p>
            </div>)}
        </div>
      </div>
    </section>;
};