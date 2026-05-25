export type TasteBudsMealContext =
  | 'Breakfast'
  | 'Lunch'
  | 'Dinner'
  | 'Late Night'
  | 'Dessert'
  | 'Casual'
  | 'Date Night'
  | 'Group Hang';

export interface TasteBudsSpot {
  name: string;
  cuisine: string;
  branch?: string;
  location?: string;
  blindRank?: number;
  cuisineRank?: number;
  contextRank?: number;
  context: TasteBudsMealContext;
  notes: string;
  whyItWorks: string;
}

export interface TasteBudsRankingGroup {
  title: string;
  description: string;
  items: TasteBudsSpot[];
}

export const tasteBudsIntro = {
  title: 'Taste Buds',
  description:
    'A food project about sitting down with friends, enjoying meals, discussing them honestly, and ranking what stands out across cuisine, blind taste, and the moment around the meal.',
  manifesto:
    'Taste Buds is part food journal, part ranking system, and part conversation log. The goal is not just to say what is good, but to understand why it feels good, who it is good with, and how the experience changes by context.'
};

export const tasteBudsRankingGroups: TasteBudsRankingGroup[] = [
  {
    title: 'Cuisine Rankings',
    description:
      'These answer the question: what is the best version of this cuisine we have had?',
    items: [
      {
        name: 'Kokos',
        cuisine: 'Ghanaian',
        branch: 'Brooklyn',
        location: 'New York, NY',
        cuisineRank: 1,
        context: 'Group Hang',
        notes: 'Sharp seasoning, familiar flavors, and the kind of meal that keeps the table talking.',
        whyItWorks: 'Feels culturally specific without being heavy-handed.'
      },
      {
        name: 'Nobu',
        cuisine: 'Japanese',
        branch: 'Downtown',
        location: 'New York, NY',
        cuisineRank: 1,
        context: 'Date Night',
        notes: 'Clean presentation and a precise, expensive kind of calm.',
        whyItWorks: 'High confidence in technique and plating.'
      },
      {
        name: 'Jollof House',
        cuisine: 'West African',
        branch: 'Queens',
        location: 'New York, NY',
        cuisineRank: 1,
        context: 'Casual',
        notes: 'Comfort-food energy with enough smoke and spice to keep it interesting.',
        whyItWorks: 'Good benchmark for a familiar meal done well.'
      }
    ]
  },
  {
    title: 'Blind Rankings',
    description:
      'These are taste-first rankings. The venue matters less than the plate.',
    items: [
      {
        name: 'Crispy Chicken Sandwich',
        cuisine: 'American',
        blindRank: 1,
        context: 'Lunch',
        notes: 'Crunch, heat, and balance can carry a lot here.',
        whyItWorks: 'Easy to compare directly across places.'
      },
      {
        name: 'Jollof Rice Plate',
        cuisine: 'West African',
        blindRank: 2,
        context: 'Dinner',
        notes: 'The rice, sauce, spice, and protein have to work together.',
        whyItWorks: 'Strong baseline for evaluating flavor and texture.'
      },
      {
        name: 'Chocolate Cake',
        cuisine: 'Dessert',
        blindRank: 3,
        context: 'Dessert',
        notes: 'Moisture, sweetness, and richness decide everything.',
        whyItWorks: 'Good for separating average from memorable desserts.'
      }
    ]
  },
  {
    title: 'Meal Context Rankings',
    description:
      'These answer the question: what is the best food for this moment?',
    items: [
      {
        name: 'Breakfast Burrito',
        cuisine: 'Mexican-American',
        context: 'Breakfast',
        contextRank: 1,
        notes: 'Portable, filling, and forgiving when you want a strong start.',
        whyItWorks: 'Great when the goal is energy and convenience.'
      },
      {
        name: 'Late-Night Ramen',
        cuisine: 'Japanese',
        context: 'Late Night',
        contextRank: 1,
        notes: 'Warm, salty, restorative, and slightly indulgent.',
        whyItWorks: 'Perfect for the mood as much as the food.'
      },
      {
        name: 'Small Plates and Shared Apps',
        cuisine: 'Modern',
        context: 'Group Hang',
        contextRank: 1,
        notes: 'Lets the table share, compare, and keep the conversation moving.',
        whyItWorks: 'Best for a social food experience.'
      }
    ]
  }
];

