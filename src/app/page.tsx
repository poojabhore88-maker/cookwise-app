'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Camera, Plus, Mic, ArrowLeft, Clock, ChefHat, 
  UtensilsCrossed, Sparkles, X, CheckCircle2, AlertCircle,
  Search, BookOpen, Star, Flame, Leaf, Upload, Zap
} from 'lucide-react';
import { RECIPE_DATABASE, Recipe, RecipeVariation } from '@/lib/recipes';
import { getAlternatives } from '@/lib/alternatives';

export default function Home() {
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [showRecipes, setShowRecipes] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const [showUploadForm, setShowUploadForm] = useState(false);
  const [newIngredient, setNewIngredient] = useState('');
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [selectedVariation, setSelectedVariation] = useState<RecipeVariation | null>(null);
  const [isListening, setIsListening] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleScanFridge = () => {
    setShowUploadForm(true);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleProcessImage = () => {
    const demoIngredients = ['potato', 'onion', 'tomato', 'egg', 'green chili'];
    setIngredients(demoIngredients);
    setShowUploadForm(false);
    setUploadedImage(null);
  };

  const handleAddIngredients = () => {
    setShowAddForm(true);
  };

  const handleAddIngredient = () => {
    if (newIngredient.trim()) {
      setIngredients([...ingredients, newIngredient.trim().toLowerCase()]);
      setNewIngredient('');
    }
  };

  const handleRemoveIngredient = (index: number) => {
    setIngredients(ingredients.filter((_, i) => i !== index));
  };

  const handleFindRecipes = () => {
    setShowRecipes(true);
  };

  const handleVoiceInput = () => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      
      recognition.onstart = () => {
        setIsListening(true);
      };
      
      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        const words = transcript.split(',').map((w: string) => w.trim().toLowerCase()).filter((w: string) => w);
        setIngredients([...ingredients, ...words]);
        setIsListening(false);
      };
      
      recognition.onerror = () => {
        setIsListening(false);
      };
      
      recognition.onend = () => {
        setIsListening(false);
      };
      
      recognition.start();
    } else {
      alert('Speech recognition is not supported in your browser');
    }
  };

  const getMatchingRecipes = () => {
    if (ingredients.length === 0) return [];
    
    return RECIPE_DATABASE.filter(recipe => {
      return recipe.variations.some(variation => {
        const recipeIngredients = variation.ingredients.map(i => i.toLowerCase());
        const userIngredients = ingredients.map(i => i.toLowerCase());
        
        // Count how many recipe ingredients the user has
        const matchedIngredients = recipeIngredients.filter(ing => 
          userIngredients.some(userIng => userIng.includes(ing) || ing.includes(userIng))
        );
        
        // Match if user has at least 50% of ingredients OR at least 1 ingredient
        const matchThreshold = Math.max(1, Math.ceil(recipeIngredients.length * 0.5));
        return matchedIngredients.length >= matchThreshold;
      });
    });
  };

  const getMissingIngredients = (variation: RecipeVariation) => {
    const recipeIngredients = variation.ingredients.map(i => i.toLowerCase());
    const userIngredients = ingredients.map(i => i.toLowerCase());
    return recipeIngredients.filter(ing => 
      !userIngredients.some(userIng => userIng.includes(ing) || ing.includes(userIng))
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 24
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Animated Background Pattern */}
      <div className="fixed inset-0 opacity-5 dark:opacity-10 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f97316' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <ChefHat className="w-12 h-12 text-orange-500" />
            </motion.div>
            <h1 className="text-6xl font-bold bg-gradient-to-r from-orange-600 via-red-500 to-rose-600 bg-clip-text text-transparent">
              CookWise
            </h1>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-2xl text-gray-700 dark:text-gray-300 font-medium"
          >
            What's in your kitchen?
          </motion.p>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-gray-500 dark:text-gray-400 mt-2"
          >
            Discover delicious recipes with ingredients you already have
          </motion.p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!showRecipes && ingredients.length === 0 && !showAddForm && !showUploadForm && (
            <motion.div
              key="home"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="max-w-3xl mx-auto space-y-8"
            >
              {/* Scan Fridge Card */}
              <motion.div variants={itemVariants}>
                <button
                  onClick={handleScanFridge}
                  className="w-full group relative overflow-hidden bg-white dark:bg-gray-800 rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 border-2 border-orange-200 dark:border-gray-700 hover:border-orange-400 dark:hover:border-orange-500"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-rose-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative flex flex-col items-center gap-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="w-24 h-24 bg-gradient-to-br from-orange-500 to-rose-500 rounded-full flex items-center justify-center shadow-lg"
                    >
                      <Camera className="w-12 h-12 text-white" />
                    </motion.div>
                    <div className="text-center">
                      <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                        Scan My Fridge
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Take a photo and let AI detect your ingredients
                      </p>
                    </div>
                  </div>
                </button>
              </motion.div>

              {/* Divider */}
              <motion.div variants={itemVariants} className="flex items-center gap-4">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-gray-600" />
                <span className="text-gray-400 dark:text-gray-500 text-lg font-medium px-4">OR</span>
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-gray-600" />
              </motion.div>

              {/* Add Ingredients Card */}
              <motion.div variants={itemVariants}>
                <button
                  onClick={handleAddIngredients}
                  className="w-full group relative overflow-hidden bg-white dark:bg-gray-800 rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 border-2 border-orange-200 dark:border-gray-700 hover:border-orange-400 dark:hover:border-orange-500"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative flex flex-col items-center gap-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg"
                    >
                      <Plus className="w-12 h-12 text-white" />
                    </motion.div>
                    <div className="text-center">
                      <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                        Add Ingredients
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Type or speak to add your ingredients manually
                      </p>
                    </div>
                  </div>
                </button>
              </motion.div>
            </motion.div>
          )}

          {/* Upload Form */}
          {showUploadForm && !showRecipes && (
            <motion.div
              key="upload"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="max-w-2xl mx-auto"
            >
              <button
                onClick={() => {
                  setShowUploadForm(false);
                  setUploadedImage(null);
                }}
                className="mb-6 flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                Back
              </button>
              <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center flex items-center justify-center gap-3">
                  <Camera className="w-8 h-8 text-orange-500" />
                  Upload Fridge Photo
                </h2>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="hidden"
                />
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  onClick={() => fileInputRef.current?.click()}
                  className={`border-3 border-dashed border-gray-300 dark:border-gray-600 rounded-2xl p-12 text-center cursor-pointer hover:border-orange-500 dark:hover:border-orange-500 transition-all duration-300 ${
                    uploadedImage ? 'hidden' : 'block'
                  }`}
                >
                  <Upload className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                  <p className="text-gray-600 dark:text-gray-300 text-lg font-medium">
                    Click to upload a photo
                  </p>
                  <p className="text-gray-400 dark:text-gray-500 text-sm mt-2">
                    Supports JPG, PNG, WebP
                  </p>
                </motion.div>
                {uploadedImage && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mb-6"
                  >
                    <img
                      src={uploadedImage}
                      alt="Uploaded fridge"
                      className="w-full h-80 object-cover rounded-2xl shadow-lg"
                    />
                  </motion.div>
                )}
                <div className="flex gap-4">
                  <button
                    onClick={() => {
                      setShowUploadForm(false);
                      setUploadedImage(null);
                    }}
                    className="flex-1 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-white text-lg font-semibold py-4 rounded-2xl transition-colors"
                  >
                    Cancel
                  </button>
                  {uploadedImage && (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleProcessImage}
                      className="flex-1 bg-gradient-to-r from-orange-500 to-rose-500 hover:from-orange-600 hover:to-rose-600 text-white text-lg font-semibold py-4 rounded-2xl transition-all shadow-lg"
                    >
                      <Sparkles className="w-5 h-5 inline mr-2" />
                      Detect Ingredients
                    </motion.button>
                  )}
                </div>
              </div>
            </motion.div>
          )}

          {/* Add Ingredients Form */}
          {showAddForm && !showRecipes && (
            <motion.div
              key="add"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="max-w-2xl mx-auto"
            >
              <button
                onClick={() => setShowAddForm(false)}
                className="mb-6 flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                Back
              </button>
              <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center flex items-center justify-center gap-3">
                  <Plus className="w-8 h-8 text-blue-500" />
                  Add Your Ingredients
                </h2>
                <div className="flex gap-3 mb-6">
                  <input
                    type="text"
                    value={newIngredient}
                    onChange={(e) => setNewIngredient(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleAddIngredient()}
                    placeholder="Type an ingredient (e.g., tomato)"
                    className="flex-1 px-5 py-4 rounded-xl border-2 border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:border-orange-500 dark:focus:border-orange-500 text-lg transition-colors"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleAddIngredient}
                    className="px-6 py-4 bg-gradient-to-r from-orange-500 to-rose-500 hover:from-orange-600 hover:to-rose-600 text-white font-semibold rounded-xl transition-all shadow-lg"
                  >
                    <Plus className="w-6 h-6" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleVoiceInput}
                    className={`px-6 py-4 rounded-xl transition-all shadow-lg ${
                      isListening 
                        ? 'bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white' 
                        : 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white'
                    }`}
                  >
                    {isListening ? (
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 0.5, repeat: Infinity }}
                      >
                        <Mic className="w-6 h-6" />
                      </motion.div>
                    ) : (
                      <Mic className="w-6 h-6" />
                    )}
                  </motion.button>
                </div>
                {ingredients.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="grid grid-cols-2 gap-3 mb-6"
                  >
                    {ingredients.map((ingredient, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="flex items-center justify-between gap-2 p-4 bg-gradient-to-br from-orange-50 to-rose-50 dark:from-gray-700 dark:to-gray-600 rounded-xl border border-orange-200 dark:border-gray-600"
                      >
                        <span className="text-lg font-medium text-gray-800 dark:text-white capitalize flex items-center gap-2">
                          <Leaf className="w-4 h-4 text-green-500" />
                          {ingredient}
                        </span>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => handleRemoveIngredient(index)}
                          className="text-red-500 hover:text-red-600 transition-colors"
                        >
                          <X className="w-5 h-5" />
                        </motion.button>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
                <div className="flex gap-4">
                  <button
                    onClick={() => setShowAddForm(false)}
                    className="flex-1 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-white text-lg font-semibold py-4 rounded-2xl transition-colors"
                  >
                    Cancel
                  </button>
                  {ingredients.length > 0 && (
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleFindRecipes}
                      className="flex-1 bg-gradient-to-r from-orange-500 to-rose-500 hover:from-orange-600 hover:to-rose-600 text-white text-lg font-semibold py-4 rounded-2xl transition-all shadow-lg"
                    >
                      <Search className="w-5 h-5 inline mr-2" />
                      Find Recipes
                    </motion.button>
                  )}
                </div>
              </div>
            </motion.div>
          )}

          {/* Ingredients Display */}
          {ingredients.length > 0 && !showRecipes && !showAddForm && !showUploadForm && (
            <motion.div
              key="ingredients"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-2xl mx-auto"
            >
              <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center flex items-center justify-center gap-3">
                  <UtensilsCrossed className="w-8 h-8 text-orange-500" />
                  Your Ingredients
                </h2>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {ingredients.map((ingredient, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex items-center gap-3 p-4 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-gray-700 dark:to-gray-600 rounded-xl border border-orange-200 dark:border-gray-600"
                    >
                      <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-rose-500 rounded-full flex items-center justify-center text-white font-bold">
                        {ingredient[0].toUpperCase()}
                      </div>
                      <span className="text-lg font-medium text-gray-800 dark:text-white capitalize">
                        {ingredient}
                      </span>
                    </motion.div>
                  ))}
                </div>
                <div className="flex gap-4">
                  <button
                    onClick={() => setIngredients([])}
                    className="flex-1 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-white text-lg font-semibold py-4 rounded-2xl transition-colors"
                  >
                    Start Over
                  </button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleFindRecipes}
                    className="flex-1 bg-gradient-to-r from-orange-500 to-rose-500 hover:from-orange-600 hover:to-rose-600 text-white text-lg font-semibold py-4 rounded-2xl transition-all shadow-lg"
                  >
                    <Search className="w-5 h-5 inline mr-2" />
                    Find Recipes
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}

          {/* Recipes List */}
          {showRecipes && !selectedRecipe && (
            <motion.div
              key="recipes"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-3xl mx-auto"
            >
              <button
                onClick={() => setShowRecipes(false)}
                className="mb-6 flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Ingredients
              </button>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 text-center flex items-center justify-center gap-3">
                <Sparkles className="w-8 h-8 text-orange-500" />
                You can make these now 🍳
              </h2>
              <div className="space-y-4 mt-6">
                {getMatchingRecipes().length > 0 ? (
                  getMatchingRecipes().map((recipe, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => setSelectedRecipe(recipe)}
                      className="group relative overflow-hidden bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-orange-400 dark:hover:border-orange-500"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-rose-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="relative flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-rose-500 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                              {index + 1}
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                              {recipe.name}
                            </h3>
                          </div>
                          <div className="flex flex-wrap gap-2 mb-3">
                            <span className="px-3 py-1 bg-gradient-to-r from-orange-500 to-rose-500 text-white rounded-full text-sm font-medium">
                              {recipe.category}
                            </span>
                            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium">
                              {recipe.variations.length} variations
                            </span>
                          </div>
                        </div>
                        <motion.div
                          whileHover={{ x: 5 }}
                          className="text-orange-500"
                        >
                          <ArrowLeft className="w-6 h-6 rotate-180" />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white dark:bg-gray-800 rounded-3xl p-12 shadow-2xl text-center"
                  >
                    <AlertCircle className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                    <p className="text-xl text-gray-600 dark:text-gray-300">
                      No recipes found with these ingredients
                    </p>
                    <p className="text-gray-400 dark:text-gray-500 mt-2">
                      Try adding more ingredients!
                    </p>
                  </motion.div>
                )}
              </div>
            </motion.div>
          )}

          {/* Recipe Variations */}
          {selectedRecipe && !selectedVariation && (
            <motion.div
              key="variations"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="max-w-2xl mx-auto"
            >
              <button
                onClick={() => setSelectedRecipe(null)}
                className="mb-6 flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Recipes
              </button>
              <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                  {selectedRecipe.name}
                </h2>
                <div className="flex justify-center mb-6">
                  <span className="px-4 py-2 bg-gradient-to-r from-orange-500 to-rose-500 text-white rounded-full text-base font-medium">
                    {selectedRecipe.category}
                  </span>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
                  Choose your cooking style
                </h3>
                <div className="space-y-4">
                  {selectedRecipe.variations.map((variation, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => setSelectedVariation(variation)}
                      className="group relative overflow-hidden border-2 border-gray-200 dark:border-gray-600 rounded-2xl p-6 cursor-pointer hover:border-orange-400 dark:hover:border-orange-500 transition-all duration-300 hover:shadow-lg"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-rose-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="relative">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                            {variation.style === 'Easy' && <Zap className="w-5 h-5 text-green-500" />}
                            {variation.style === 'Standard' && <Star className="w-5 h-5 text-blue-500" />}
                            {variation.style === 'Restaurant Style' && <Flame className="w-5 h-5 text-orange-500" />}
                            {variation.style}
                          </h4>
                          <div className="flex gap-3 text-sm">
                            <span className="flex items-center gap-1 text-gray-600 dark:text-gray-300">
                              <Clock className="w-4 h-4" />
                              {variation.time}
                            </span>
                            <span className="flex items-center gap-1 text-gray-600 dark:text-gray-300">
                              <ChefHat className="w-4 h-4" />
                              {variation.difficulty}
                            </span>
                          </div>
                        </div>
                        <p className="text-gray-500 dark:text-gray-400">
                          Needs: {variation.ingredients.join(', ')}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Recipe Detail */}
          {selectedVariation && (
            <motion.div
              key="detail"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="max-w-3xl mx-auto"
            >
              <button
                onClick={() => setSelectedVariation(null)}
                className="mb-6 flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Variations
              </button>
              <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl">
                <div className="flex items-center gap-3 mb-2">
                  <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                    {selectedRecipe?.name}
                  </h2>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-4 py-2 bg-gradient-to-r from-orange-500 to-rose-500 text-white rounded-full text-base font-medium">
                    {selectedVariation.style}
                  </span>
                </div>
                <div className="flex gap-6 text-gray-600 dark:text-gray-300 mb-8">
                  <span className="flex items-center gap-2 text-lg">
                    <Clock className="w-5 h-5 text-orange-500" />
                    {selectedVariation.time}
                  </span>
                  <span className="flex items-center gap-2 text-lg">
                    <ChefHat className="w-5 h-5 text-orange-500" />
                    {selectedVariation.difficulty}
                  </span>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <UtensilsCrossed className="w-6 h-6 text-orange-500" />
                    Ingredients Needed
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {selectedVariation.ingredients.map((ingredient, index) => {
                      const isMissing = getMissingIngredients(selectedVariation).includes(ingredient.toLowerCase());
                      return (
                        <motion.span
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.05 }}
                          className={`px-4 py-2 rounded-full text-base font-medium flex items-center gap-2 ${
                            isMissing 
                              ? 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 border-2 border-red-300 dark:border-red-700' 
                              : 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 border-2 border-green-300 dark:border-green-700'
                          }`}
                        >
                          {isMissing ? <AlertCircle className="w-4 h-4" /> : <CheckCircle2 className="w-4 h-4" />}
                          {ingredient}
                        </motion.span>
                      );
                    })}
                  </div>
                </div>

                {getMissingIngredients(selectedVariation).length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-8 p-6 bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-900/30 dark:to-amber-900/30 rounded-2xl border-2 border-yellow-300 dark:border-yellow-700"
                  >
                    <h4 className="font-bold text-yellow-800 dark:text-yellow-200 mb-4 flex items-center gap-2">
                      <AlertCircle className="w-5 h-5" />
                      Missing Ingredients & Alternatives
                    </h4>
                    <div className="space-y-3">
                      {getMissingIngredients(selectedVariation).map((missing, index) => {
                        const alternatives = getAlternatives(missing);
                        return (
                          <div key={index} className="bg-white/50 dark:bg-black/20 rounded-xl p-4">
                            <p className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
                              {missing}
                            </p>
                            {alternatives.length > 0 && (
                              <div>
                                <p className="text-sm text-yellow-700 dark:text-yellow-300 mb-2">
                                  Try these alternatives:
                                </p>
                                <div className="flex flex-wrap gap-2">
                                  {alternatives.slice(0, 4).map((alt, altIndex) => (
                                    <span
                                      key={altIndex}
                                      className="px-3 py-1 bg-white dark:bg-gray-700 text-yellow-800 dark:text-yellow-200 rounded-full text-sm border border-yellow-300 dark:border-yellow-600"
                                    >
                                      {alt}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                )}

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                    <BookOpen className="w-6 h-6 text-orange-500" />
                    Cooking Steps
                  </h3>
                  <ol className="space-y-4">
                    {selectedVariation.steps.map((step, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex gap-4 text-gray-700 dark:text-gray-300 text-lg"
                      >
                        <span className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-orange-500 to-rose-500 text-white rounded-full flex items-center justify-center text-base font-bold shadow-lg">
                          {index + 1}
                        </span>
                        <span className="flex-1 leading-relaxed">{step}</span>
                      </motion.li>
                    ))}
                  </ol>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
