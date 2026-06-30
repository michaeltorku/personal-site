export interface TasteBudsRankingItem {
  rank: number;
  name: string;
  cuisine: string;
  location?: string;
  branch?: string;
  note: string;
  verdict: string;
}

export interface TasteBudsRankingColumn {
  title: string;
  description: string;
  items: TasteBudsRankingItem[];
}

export const tasteBudsIntro = {
  title: 'Taste Buds',
  subtitle:
    'A food show about the meals worth leaving the house for.',
  thesis:
    'Just a guy and his tastebuds.',
  quoteOne: 'There’s no right or wrong when it comes to food.',
  quoteTwo: ''
};

export const tasteBudsBreakfastBrunchRanking: TasteBudsRankingItem[] = [
  {
    rank: 1,
    name: 'Breakfast Burrito',
    cuisine: 'Mexican-American',
    note: 'Portable, filling, and forgiving when you want a strong start.',
    verdict: 'Taste Buds Certified'
  },
  {
    rank: 2,
    name: 'Chocolate Cake',
    cuisine: 'Dessert',
    note: 'Moisture, sweetness, and richness decide everything.',
    verdict: 'No Umph Detected'
  },
  {
    rank: 3,
    name: 'Crispy Chicken Sandwich',
    cuisine: 'American',
    note: 'Crunch, heat, and balance can carry a lot here.',
    verdict: 'Taste Buds Certified'
  }
];

export const tasteBudsLunchDinnerRanking: TasteBudsRankingItem[] = [
  {
    rank: 1,
    name: 'Tatiana',
    cuisine: 'Dinner',
    note: 'Big-room energy with enough polish to feel like an occasion.',
    verdict: 'Taste Buds Certified'
  },
  {
    rank: 2,
    name: 'Wayan',
    cuisine: 'Lunch / Dinner',
    note: 'Bright, layered, and exactly the kind of spot that rewards a longer meal.',
    verdict: 'Taste Buds Certified'
  },
  {
    rank: 3,
    name: 'Jiang’s',
    cuisine: 'Dinner',
    note: 'A strong middle-of-the-table contender that can win on comfort and consistency.',
    verdict: 'Taste Buds Trial'
  },
  {
    rank: 4,
    name: 'Lele',
    cuisine: 'Lunch / Dinner',
    note: 'A place that feels built for sharing, trading bites, and rethinking your order.',
    verdict: 'Split Decision'
  },
  {
    rank: 5,
    name: 'Momofuku',
    cuisine: 'Lunch / Dinner',
    note: 'Reliable enough to stay in the conversation, strong enough to justify the return trip.',
    verdict: 'Receipt Check'
  }
];
