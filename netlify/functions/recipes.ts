import { Handler } from '@netlify/functions';

export const handler: Handler = async (event, context) => {
  // This will be connected to the FastAPI backend in later stages
  // For now, it returns mock recipes based on ingredients
  
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method not allowed' }),
    };
  }

  try {
    const body = JSON.parse(event.body || '{}');
    const { ingredients } = body;
    
    // Mock recipes - will be replaced with actual recipe engine in Stage 2
    const mockRecipes = [
      {
        name: 'Masala Omelette',
        time: '10 min',
        difficulty: 'Easy',
        ingredients: ['egg', 'onion', 'green chili']
      },
      {
        name: 'Aloo Tomato Sabzi',
        time: '20 min',
        difficulty: 'Easy',
        ingredients: ['potato', 'tomato', 'onion']
      },
      {
        name: 'Egg Bhurji',
        time: '15 min',
        difficulty: 'Easy',
        ingredients: ['egg', 'onion', 'tomato']
      }
    ];

    // Filter recipes based on available ingredients
    const availableRecipes = mockRecipes.filter(recipe => 
      recipe.ingredients.every(ing => ingredients.includes(ing))
    );

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        recipes: availableRecipes,
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch recipes' }),
    };
  }
};
