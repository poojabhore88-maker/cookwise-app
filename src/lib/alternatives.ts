export const INGREDIENT_ALTERNATIVES: Record<string, string[]> = {
  // Dairy
  'milk': ['coconut milk', 'almond milk', 'soy milk', 'oat milk', 'yogurt', 'cream'],
  'butter': ['olive oil', 'coconut oil', 'ghee', 'margarine', 'vegetable oil'],
  'cheese': ['nutritional yeast', 'cashew cheese', 'tofu', 'paneer', 'cottage cheese'],
  'cream': ['coconut cream', 'milk', 'yogurt', 'cashew cream', 'silken tofu'],
  'yogurt': ['sour cream', 'buttermilk', 'coconut yogurt', 'greek yogurt', 'curd'],
  
  // Proteins
  'egg': ['flax egg', 'chia egg', 'banana', 'applesauce', 'silken tofu', 'yogurt'],
  'chicken': ['tofu', 'paneer', 'mushrooms', 'seitan', 'cauliflower', 'soy chunks'],
  'meat': ['tofu', 'tempeh', 'seitan', 'mushrooms', 'lentils', 'beans'],
  'fish': ['tofu', 'paneer', 'cauliflower', 'mushrooms', 'jackfruit'],
  
  // Vegetables
  'onion': ['shallots', 'leeks', 'green onion', 'chives', 'garlic', 'fennel'],
  'garlic': ['garlic powder', 'onion powder', 'shallots', 'chives', 'ginger'],
  'tomato': ['tomato puree', 'tomato paste', 'bell peppers', 'tamarind', 'amchur'],
  'potato': ['sweet potato', 'yam', 'cauliflower', 'turnip', 'parsnip', 'bread'],
  'carrot': ['sweet potato', 'pumpkin', 'butternut squash', 'bell pepper', 'zucchini'],
  'capsicum': ['bell pepper', 'zucchini', 'eggplant', 'tomato', 'poblano'],
  'cabbage': ['lettuce', 'kale', 'spinach', 'bok choy', 'napa cabbage'],
  'cauliflower': ['broccoli', 'cabbage', 'potato', 'cauliflower rice', 'tofu'],
  'broccoli': ['cauliflower', 'asparagus', 'green beans', 'brussels sprouts', 'zucchini'],
  'spinach': ['kale', 'swiss chard', 'arugula', 'bok choy', 'mustard greens'],
  'mushroom': ['eggplant', 'tofu', 'zucchini', 'cauliflower', 'jackfruit'],
  'eggplant': ['zucchini', 'portobello mushroom', 'tofu', 'cauliflower'],
  'zucchini': ['yellow squash', 'eggplant', 'cucumber', 'carrot', 'bell pepper'],
  
  // Grains & Flours
  'flour': ['almond flour', 'coconut flour', 'oat flour', 'rice flour', 'cornstarch'],
  'rice': ['quinoa', 'cauliflower rice', 'couscous', 'barley', 'bulgur'],
  'pasta': ['zucchini noodles', 'spaghetti squash', 'rice noodles', 'shirataki noodles'],
  'bread': ['tortilla', 'pita', 'roti', 'naan', 'crackers'],
  'noodles': ['rice noodles', 'glass noodles', 'zucchini noodles', 'spaghetti squash'],
  
  // Herbs & Spices
  'basil': ['oregano', 'thyme', 'italian seasoning', 'parsley', 'cilantro'],
  'oregano': ['thyme', 'marjoram', 'basil', 'italian seasoning', 'rosemary'],
  'cilantro': ['parsley', 'basil', 'mint', 'coriander powder', 'dill'],
  'parsley': ['cilantro', 'basil', 'chives', 'dill', 'mint'],
  'mint': ['basil', 'cilantro', 'parsley', 'dill'],
  'cumin': ['coriander', 'caraway seeds', 'garam masala', 'chili powder'],
  'coriander': ['cumin', 'parsley', 'cilantro', 'caraway seeds'],
  'turmeric': ['saffron', 'paprika', 'curry powder', 'ginger'],
  'chili powder': ['paprika', 'cayenne pepper', 'red pepper flakes', 'chili flakes'],
  'paprika': ['chili powder', 'smoked paprika', 'cayenne', 'red pepper flakes'],
  'ginger': ['galangal', 'turmeric', 'cinnamon', 'allspice'],
  'soy sauce': ['tamari', 'coconut aminos', 'fish sauce', ' Worcestershire sauce', 'miso'],
  'vinegar': ['lemon juice', 'lime juice', 'tamarind', 'citric acid'],
  'lemon': ['lime', 'vinegar', 'citric acid', 'orange juice'],
  'lime': ['lemon', 'vinegar', 'citric acid', 'orange juice'],
  
  // Oils & Fats
  'olive oil': ['vegetable oil', 'canola oil', 'avocado oil', 'coconut oil', 'ghee'],
  'vegetable oil': ['canola oil', 'sunflower oil', 'olive oil', 'coconut oil'],
  'coconut oil': ['butter', 'vegetable oil', 'olive oil', 'ghee'],
  'ghee': ['butter', 'coconut oil', 'olive oil', 'vegetable oil'],
  
  // Sweeteners
  'sugar': ['honey', 'maple syrup', 'agave nectar', 'coconut sugar', 'stevia'],
  'honey': ['maple syrup', 'agave nectar', 'sugar', 'molasses', 'brown sugar'],
  'maple syrup': ['honey', 'agave nectar', 'sugar', 'brown sugar', 'molasses'],
  
  // Nuts & Seeds
  'cashew': ['almond', 'walnut', 'pecan', 'macadamia', 'sunflower seeds'],
  'almond': ['cashew', 'walnut', 'pecan', 'hazelnut', 'sunflower seeds'],
  'peanut': ['almond butter', 'cashew butter', 'sunflower seed butter', 'tahini'],
  
  // Condiments
  'ketchup': ['tomato sauce', 'tomato paste', 'barbecue sauce', 'sriracha'],
  'mayonnaise': ['greek yogurt', 'avocado', 'hummus', 'mustard', 'sour cream'],
  'mustard': ['wasabi', 'horseradish', 'turmeric', 'mayonnaise'],
  
  // Others
  'cornstarch': ['arrowroot powder', 'tapioca starch', 'potato starch', 'flour'],
  'baking powder': ['baking soda + cream of tartar', 'self-rising flour', 'yeast'],
  'baking soda': ['baking powder', 'yeast', 'buttermilk'],
  'yeast': ['baking powder', 'baking soda', 'sourdough starter'],
  'gelatin': ['agar agar', 'cornstarch', 'xanthan gum', 'pectin'],
  'chocolate': ['cocoa powder + butter', 'carob', 'cacao nibs'],
  'coffee': ['chicory', 'dandelion root', 'tea', 'cocoa'],
  'tea': ['herbal tea', 'decaf tea', 'hot water with lemon'],
  
  // Indian Specific
  'paneer': ['tofu', 'cottage cheese', 'halloumi', 'feta', 'mozzarella'],
  'garam masala': ['curry powder', 'all-spice', 'individual spices (cumin, coriander, cardamom)'],
  'curry leaves': ['bay leaf', 'basil', 'kaffir lime leaf', 'lemongrass'],
  'tamarind': ['lemon juice', 'vinegar', 'amchur', 'lime juice'],
  'amchur': ['lemon juice', 'tamarind', 'vinegar', 'lime juice'],
  'fenugreek': ['maple syrup', 'celery', 'fennel seeds'],
  'mustard seeds': ['cumin seeds', 'nigella seeds', 'fennel seeds'],
  'asafoetida': ['garlic', 'onion powder', 'leek'],
  'jaggery': ['brown sugar', 'molasses', 'palm sugar', 'coconut sugar'],
  
  // Chinese Specific
  'sesame oil': ['peanut oil', 'vegetable oil', 'olive oil', 'toasted sesame seeds'],
  'hoisin sauce': ['oyster sauce', 'plum sauce', 'barbecue sauce', 'teriyaki sauce'],
  'oyster sauce': ['hoisin sauce', 'mushroom sauce', 'vegetarian oyster sauce', 'soy sauce + sugar'],
  'five spice powder': ['cinnamon + cloves + fennel + star anise + szechuan peppercorns', 'garam masala', 'all-spice'],
  'schezwan sauce': ['chili garlic sauce', 'sriracha', 'chili paste', 'gochujang'],
  'rice vinegar': ['apple cider vinegar', 'white vinegar', 'lime juice', 'lemon juice'],
  'mirin': ['rice vinegar + sugar', 'sweet sherry', 'white wine + sugar', 'dry sherry'],
  'sake': ['dry sherry', 'white wine', 'rice vinegar', 'water'],
  
  // Italian Specific
  'parmesan': ['pecorino romano', 'asiago', 'grana padano', 'nutritional yeast', 'cheddar'],
  'mozzarella': ['provolone', 'cheddar', 'fontina', 'gouda', 'paneer'],
  'prosciutto': ['bacon', 'pancetta', 'ham', 'salami', 'smoked turkey'],
  'pancetta': ['bacon', 'prosciutto', 'ham', 'guanciale'],
  'pesto': ['basil + olive oil + garlic + nuts + cheese', 'tapenade', 'chimichurri'],
  
  // General Substitutes
  'salt': ['soy sauce', 'miso', 'herbs and spices', 'lemon juice'],
  'pepper': ['cayenne', 'chili powder', 'paprika', 'ginger'],
  'water': ['broth', 'stock', 'juice', 'milk', 'coconut water'],
  'stock': ['broth', 'bouillon', 'water with herbs', 'miso', 'vegetable juice'],
  'broth': ['stock', 'bouillon', 'water with herbs and spices', 'miso soup'],
};

export function getAlternatives(ingredient: string): string[] {
  const lowerIngredient = ingredient.toLowerCase().trim();
  
  // Direct match
  if (INGREDIENT_ALTERNATIVES[lowerIngredient]) {
    return INGREDIENT_ALTERNATIVES[lowerIngredient];
  }
  
  // Partial match
  for (const [key, alternatives] of Object.entries(INGREDIENT_ALTERNATIVES)) {
    if (lowerIngredient.includes(key) || key.includes(lowerIngredient)) {
      return alternatives;
    }
  }
  
  return [];
}
