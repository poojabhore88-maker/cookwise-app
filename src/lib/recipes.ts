interface RecipeVariation {
  style: 'Standard' | 'Easy' | 'Restaurant Style';
  time: string;
  difficulty: string;
  ingredients: string[];
  steps: string[];
}

interface Recipe {
  name: string;
  category: 'Indian' | 'Italian' | 'Chinese' | 'Fusion';
  variations: RecipeVariation[];
}

export const RECIPE_DATABASE: Recipe[] = [
  {
    name: 'Masala Omelette',
    category: 'Indian',
    variations: [
      {
        style: 'Easy',
        time: '10 min',
        difficulty: 'Easy',
        ingredients: ['egg', 'onion', 'green chili'],
        steps: [
          'Beat 2 eggs with salt',
          'Chop onion and chili',
          'Heat oil, sauté onion and chili',
          'Pour eggs, cook until set',
          'Fold and serve'
        ]
      },
      {
        style: 'Standard',
        time: '12 min',
        difficulty: 'Easy',
        ingredients: ['egg', 'onion', 'green chili', 'coriander', 'turmeric'],
        steps: [
          'Beat 2 eggs with salt, turmeric, and red chili powder',
          'Finely chop 1 onion, 1 green chili, and coriander',
          'Heat oil, add chopped onion and chili, sauté for 2 minutes',
          'Pour beaten eggs into the pan',
          'Cook on medium heat until edges set',
          'Fold the omelette and cook for another minute',
          'Garnish with coriander and serve hot'
        ]
      },
      {
        style: 'Restaurant Style',
        time: '15 min',
        difficulty: 'Medium',
        ingredients: ['egg', 'onion', 'green chili', 'coriander', 'butter', 'cheese'],
        steps: [
          'Beat 3 eggs with salt, pepper, and a pinch of red chili powder',
          'Finely chop 1 onion, 2 green chilies, and fresh coriander',
          'Heat butter in a non-stick pan',
          'Add chopped onion and chili, sauté until golden',
          'Pour beaten eggs, cook on low heat',
          'Add grated cheese on top when half set',
          'Fold carefully and serve with toast'
        ]
      }
    ]
  },
  {
    name: 'Pizza',
    category: 'Italian',
    variations: [
      {
        style: 'Easy',
        time: '20 min',
        difficulty: 'Easy',
        ingredients: ['bread', 'tomato', 'cheese'],
        steps: [
          'Toast bread slices',
          'Spread tomato sauce or ketchup',
          'Add grated cheese',
          'Microwave for 1-2 minutes until cheese melts',
          'Serve hot'
        ]
      },
      {
        style: 'Standard',
        time: '45 min',
        difficulty: 'Medium',
        ingredients: ['flour', 'yeast', 'tomato', 'cheese', 'onion'],
        steps: [
          'Mix flour, yeast, salt, and warm water to make dough',
          'Let dough rise for 30 minutes',
          'Roll out dough into pizza base',
          'Spread tomato sauce',
          'Add chopped onion and grated cheese',
          'Bake at 200°C for 15-20 minutes',
          'Serve hot'
        ]
      },
      {
        style: 'Restaurant Style',
        time: '60 min',
        difficulty: 'Medium',
        ingredients: ['flour', 'yeast', 'tomato', 'mozzarella', 'basil', 'olive oil'],
        steps: [
          'Make dough with flour, yeast, salt, sugar, and warm water',
          'Let rise for 45 minutes',
          'Prepare homemade tomato sauce with garlic and herbs',
          'Roll dough thin, transfer to pizza stone',
          'Spread sauce, add fresh mozzarella and basil',
          'Drizzle olive oil, bake at 250°C for 12-15 minutes',
          'Serve immediately'
        ]
      }
    ]
  },
  {
    name: 'Pasta',
    category: 'Italian',
    variations: [
      {
        style: 'Easy',
        time: '15 min',
        difficulty: 'Easy',
        ingredients: ['pasta', 'tomato', 'onion'],
        steps: [
          'Boil pasta according to package',
          'Sauté chopped onion in oil',
          'Add chopped tomatoes, cook until soft',
          'Mix with pasta, season with salt',
          'Serve hot'
        ]
      },
      {
        style: 'Standard',
        time: '25 min',
        difficulty: 'Easy',
        ingredients: ['pasta', 'tomato', 'onion', 'garlic', 'cheese'],
        steps: [
          'Boil pasta with salt',
          'Sauté minced garlic and chopped onion',
          'Add tomato puree, cook for 10 minutes',
          'Add dried herbs (oregano, basil)',
          'Mix with pasta, top with grated cheese',
          'Serve hot'
        ]
      },
      {
        style: 'Restaurant Style',
        time: '35 min',
        difficulty: 'Medium',
        ingredients: ['pasta', 'tomato', 'onion', 'garlic', 'cream', 'parmesan', 'basil'],
        steps: [
          'Boil pasta al dente in salted water',
          'Make sauce: sauté garlic and onion in olive oil',
          'Add tomato puree, simmer 15 minutes',
          'Add cream, stir well',
          'Toss pasta in sauce',
          'Top with fresh parmesan and basil',
          'Serve immediately'
        ]
      }
    ]
  },
  {
    name: 'Manchurian',
    category: 'Chinese',
    variations: [
      {
        style: 'Easy',
        time: '25 min',
        difficulty: 'Easy',
        ingredients: ['onion', 'soy sauce', 'flour'],
        steps: [
          'Mix flour with water to make batter',
          'Make small balls, fry until golden',
          'Sauté chopped onion',
          'Add soy sauce and water',
          'Add fried balls, cook for 5 minutes',
          'Serve hot'
        ]
      },
      {
        style: 'Standard',
        time: '35 min',
        difficulty: 'Medium',
        ingredients: ['onion', 'garlic', 'soy sauce', 'vinegar', 'flour', 'cornstarch'],
        steps: [
          'Make balls with flour, cornstarch, and water',
          'Deep fry until crispy',
          'Sauté garlic and onion',
          'Add soy sauce, vinegar, and sugar',
          'Add water, thicken with cornstarch',
          'Add fried balls, toss in sauce',
          'Garnish with spring onion'
        ]
      },
      {
        style: 'Restaurant Style',
        time: '45 min',
        difficulty: 'Medium',
        ingredients: ['onion', 'garlic', 'ginger', 'soy sauce', 'vinegar', 'flour', 'cornstarch', 'capsicum'],
        steps: [
          'Make balls with minced veggies, flour, and cornstarch',
          'Double fry for extra crispiness',
          'Make sauce: sauté ginger, garlic, onion, capsicum',
          'Add soy sauce, vinegar, chili sauce, ketchup',
          'Add water, bring to boil, thicken with cornstarch',
          'Toss balls in sauce, garnish with spring onion',
          'Serve hot with fried rice'
        ]
      }
    ]
  },
  {
    name: 'Fried Rice',
    category: 'Chinese',
    variations: [
      {
        style: 'Easy',
        time: '15 min',
        difficulty: 'Easy',
        ingredients: ['rice', 'onion', 'soy sauce'],
        steps: [
          'Use leftover cooked rice',
          'Chop onion',
          'Heat oil, sauté onion',
          'Add rice, mix well',
          'Add soy sauce, salt, pepper',
          'Serve hot'
        ]
      },
      {
        style: 'Standard',
        time: '25 min',
        difficulty: 'Easy',
        ingredients: ['rice', 'onion', 'soy sauce', 'egg', 'carrot'],
        steps: [
          'Cook and cool rice beforehand',
          'Chop onion, carrot, and scramble eggs',
          'Heat oil, scramble eggs, remove',
          'Sauté onion and carrot',
          'Add rice, soy sauce, salt, pepper',
          'Add eggs back, mix well',
          'Serve hot'
        ]
      },
      {
        style: 'Restaurant Style',
        time: '30 min',
        difficulty: 'Medium',
        ingredients: ['rice', 'onion', 'soy sauce', 'egg', 'carrot', 'capsicum', 'spring onion'],
        steps: [
          'Use day-old rice for best results',
          'Chop all vegetables finely',
          'Heat wok, scramble eggs, remove',
          'Stir-fry onion, carrot, capsicum on high heat',
          'Add rice, toss continuously',
          'Add soy sauce, vinegar, white pepper',
          'Add eggs and spring onion, toss',
          'Serve immediately'
        ]
      }
    ]
  },
  {
    name: 'Aloo Paratha',
    category: 'Indian',
    variations: [
      {
        style: 'Easy',
        time: '20 min',
        difficulty: 'Easy',
        ingredients: ['potato', 'onion', 'flour'],
        steps: [
          'Boil and mash potato',
          'Mix with chopped onion and salt',
          'Make dough with flour',
          'Stuff potato in dough, roll',
          'Cook on tawa with oil',
          'Serve hot'
        ]
      },
      {
        style: 'Standard',
        time: '30 min',
        difficulty: 'Medium',
        ingredients: ['potato', 'onion', 'flour', 'cumin', 'coriander', 'green chili'],
        steps: [
          'Boil 2 potatoes, peel and mash',
          'Chop 1 onion, green chili, and coriander',
          'Mix potato with onion, salt, red chili powder, cumin, coriander',
          'Divide into equal portions',
          'Roll wheat flour dough balls',
          'Stuff potato filling inside dough',
          'Roll carefully into parathas',
          'Heat tawa, cook paratha with ghee on both sides until golden',
          'Serve hot with curd or pickle'
        ]
      },
      {
        style: 'Restaurant Style',
        time: '40 min',
        difficulty: 'Medium',
        ingredients: ['potato', 'onion', 'flour', 'cumin', 'coriander', 'green chili', 'ghee', 'amchur'],
        steps: [
          'Boil potatoes, mash while hot',
          'Add roasted cumin powder, amchur, garam masala',
          'Mix with finely chopped onion, green chili, coriander',
          'Make soft dough with flour, salt, and oil',
          'Stuff generously, roll thin',
          'Cook on hot tawa with generous ghee',
          'Press gently to ensure even cooking',
          'Serve with butter, curd, and pickle'
        ]
      }
    ]
  },
  {
    name: 'Egg Curry',
    category: 'Indian',
    variations: [
      {
        style: 'Easy',
        time: '20 min',
        difficulty: 'Easy',
        ingredients: ['egg', 'onion', 'tomato'],
        steps: [
          'Boil eggs, peel',
          'Sauté onion',
          'Add tomato, cook until soft',
          'Add turmeric, salt, water',
          'Add eggs, simmer 5 minutes',
          'Serve'
        ]
      },
      {
        style: 'Standard',
        time: '25 min',
        difficulty: 'Medium',
        ingredients: ['egg', 'onion', 'tomato', 'garlic', 'ginger', 'coriander powder'],
        steps: [
          'Boil 4 eggs, peel and keep aside',
          'Chop 1 onion和 2 tomatoes',
          'Heat oil, add cumin seeds and bay leaf',
          'Add chopped onion, sauté until golden',
          'Add ginger-garlic paste, cook for 1 minute',
          'Add tomato, turmeric, red chili powder, coriander powder',
          'Cook until oil separates',
          'Add 1 cup water, bring to boil',
          'Add boiled eggs, simmer for 5 minutes',
          'Garnish with coriander and serve with roti or rice'
        ]
      },
      {
        style: 'Restaurant Style',
        time: '35 min',
        difficulty: 'Medium',
        ingredients: ['egg', 'onion', 'tomato', 'garlic', 'ginger', 'cashew', 'cream', 'garam masala'],
        steps: [
          'Boil eggs, make slits for better absorption',
          'Make cashew paste for rich gravy',
          'Sauté onion until golden brown',
          'Add ginger-garlic paste, cook well',
          'Add tomato puree, cook until oil separates',
          'Add spices, cashew paste, and cream',
          'Simmer for 10 minutes on low heat',
          'Add eggs, simmer for 5 more minutes',
          'Garnish with cream and coriander',
          'Serve with naan or rice'
        ]
      }
    ]
  },
  {
    name: 'Chilli Chicken',
    category: 'Chinese',
    variations: [
      {
        style: 'Easy',
        time: '25 min',
        difficulty: 'Easy',
        ingredients: ['chicken', 'onion', 'soy sauce', 'chili sauce'],
        steps: [
          'Cut chicken into pieces',
          'Marinate with salt and pepper',
          'Fry chicken until cooked',
          'Sauté onion',
          'Add soy sauce, chili sauce',
          'Add chicken, toss well',
          'Serve'
        ]
      },
      {
        style: 'Standard',
        time: '35 min',
        difficulty: 'Medium',
        ingredients: ['chicken', 'onion', 'capsicum', 'soy sauce', 'chili sauce', 'cornstarch', 'garlic'],
        steps: [
          'Cut chicken, marinate with soy sauce and cornstarch',
          'Deep fry chicken until golden',
          'Sauté garlic, onion, and capsicum',
          'Add soy sauce, chili sauce, vinegar',
          'Add water, thicken with cornstarch',
          'Add fried chicken, toss in sauce',
          'Garnish with spring onion'
        ]
      },
      {
        style: 'Restaurant Style',
        time: '45 min',
        difficulty: 'Medium',
        ingredients: ['chicken', 'onion', 'capsicum', 'soy sauce', 'chili sauce', 'cornstarch', 'garlic', 'ginger', 'schezwan sauce'],
        steps: [
          'Cut chicken into bite-sized pieces',
          'Marinate with ginger-garlic, soy sauce, cornstarch',
          'Deep fry twice for extra crispiness',
          'Make sauce: sauté ginger, garlic, onion, capsicum',
          'Add Schezwan sauce, soy sauce, chili sauce, vinegar',
          'Add water, bring to boil, thicken with cornstarch',
          'Toss chicken in sauce on high heat',
          'Add sesame oil, garnish with spring onion',
          'Serve hot with fried rice or noodles'
        ]
      }
    ]
  },
  {
    name: 'Pav Bhaji',
    category: 'Indian',
    variations: [
      {
        style: 'Easy',
        time: '25 min',
        difficulty: 'Easy',
        ingredients: ['potato', 'onion', 'tomato', 'pav'],
        steps: [
          'Boil and mash potatoes',
          'Sauté onion',
          'Add tomato, cook until soft',
          'Add mashed potatoes, pav bhaji masala',
          'Mash everything, add water',
          'Cook for 10 minutes',
          'Serve with toasted pav'
        ]
      },
      {
        style: 'Standard',
        time: '30 min',
        difficulty: 'Medium',
        ingredients: ['potato', 'onion', 'tomato', 'pav', 'butter', 'coriander', 'pav bhaji masala'],
        steps: [
          'Boil 3 potatoes, mash them',
          'Chop 2 onions and 3 tomatoes',
          'Heat butter, add chopped onion, sauté',
          'Add tomatoes, cook until soft',
          'Add mashed potatoes, pav bhaji masala, salt, red chili powder',
          'Add water, mash everything together',
          'Cook on medium heat for 10-15 minutes',
          'Add butter on top, garnish with coriander',
          'Serve hot with toasted pav'
        ]
      },
      {
        style: 'Restaurant Style',
        time: '40 min',
        difficulty: 'Medium',
        ingredients: ['potato', 'onion', 'tomato', 'pav', 'butter', 'coriander', 'pav bhaji masala', 'peas', 'cauliflower', 'capsicum'],
        steps: [
          'Boil mixed vegetables (potato, peas, cauliflower)',
          'Mash everything together',
          'Heat generous butter, add chopped onion',
          'Add capsicum, sauté for 2 minutes',
          'Add tomato puree, cook until oil separates',
          'Add mashed vegetables, pav bhaji masala, red chili powder',
          'Add water, mash continuously on medium heat',
          'Cook for 15-20 minutes, add more butter',
          'Garnish with coriander, lemon wedges',
          'Serve with butter-toasted pav and onion rings'
        ]
      }
    ]
  },
  {
    name: 'Hakka Noodles',
    category: 'Chinese',
    variations: [
      {
        style: 'Easy',
        time: '15 min',
        difficulty: 'Easy',
        ingredients: ['noodles', 'onion', 'soy sauce'],
        steps: [
          'Boil noodles',
          'Sauté chopped onion',
          'Add noodles',
          'Add soy sauce, salt, pepper',
          'Mix well, serve hot'
        ]
      },
      {
        style: 'Standard',
        time: '25 min',
        difficulty: 'Easy',
        ingredients: ['noodles', 'onion', 'capsicum', 'carrot', 'soy sauce', 'vinegar'],
        steps: [
          'Boil noodles, drain and toss with oil',
          'Chop onion, capsicum, carrot',
          'Heat oil, stir-fry vegetables',
          'Add noodles, soy sauce, vinegar, salt, pepper',
          'Toss on high heat for 2-3 minutes',
          'Serve hot'
        ]
      },
      {
        style: 'Restaurant Style',
        time: '30 min',
        difficulty: 'Medium',
        ingredients: ['noodles', 'onion', 'capsicum', 'carrot', 'cabbage', 'soy sauce', 'vinegar', 'chili sauce', 'spring onion'],
        steps: [
          'Boil noodles al dente, rinse with cold water',
          'Chop all vegetables into thin strips',
          'Heat wok on high heat, add oil',
          'Stir-fry garlic, onion, all vegetables',
          'Add noodles, toss continuously',
          'Add soy sauce, vinegar, chili sauce, white pepper',
          'Toss for 2-3 minutes on high heat',
          'Garnish with spring onion, serve hot'
        ]
      }
    ]
  }
];

export type { Recipe, RecipeVariation };
