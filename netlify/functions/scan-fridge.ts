import { Handler } from '@netlify/functions';

export const handler: Handler = async (event, context) => {
  // This will be connected to the FastAPI backend in later stages
  // For now, it returns a mock response
  
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method not allowed' }),
    };
  }

  try {
    const body = JSON.parse(event.body || '{}');
    
    // Mock response - will be replaced with actual AI vision in Stage 2
    const mockIngredients = [
      'tomato',
      'onion',
      'potato',
      'egg',
      'green chili'
    ];

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ingredients: mockIngredients,
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to process image' }),
    };
  }
};
