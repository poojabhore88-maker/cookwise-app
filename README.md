# 🍳 CookWise

<div align="center">

![CookWise](https://img.shields.io/badge/CookWise-AI%20Powered%20Recipe%20App-orange)
![Next.js](https://img.shields.io/badge/Next.js-16-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8)
![License](https://img.shields.io/badge/License-MIT-green)

**AI-Powered Recipe Suggestion App**

Discover delicious recipes based on ingredients you already have in your kitchen.

[Live Demo](#) • [Features](#features) • [Getting Started](#getting-started) • [Deployment](#deployment)

</div>

---

## ✨ Features

### 🎯 Core Functionality
- **Smart Recipe Matching**: Find recipes based on your available ingredients
- **Multiple Recipe Variations**: Each dish has 3 cooking styles - Easy, Standard, and Restaurant Style
- **Ingredient Alternatives**: Get suggestions for missing ingredients with viable substitutes
- **Voice Input**: Add ingredients using voice commands (Web Speech API)
- **Photo Upload**: Upload fridge photos for AI ingredient detection (demo mode)

### 🍽️ Recipe Database
- **25+ Dishes** across multiple cuisines
- **Indian Cuisine**: Masala Omelette, Aloo Paratha, Pav Bhaji, Egg Curry, and more
- **Italian Cuisine**: Pizza, Pasta with authentic variations
- **Chinese Cuisine**: Fried Rice, Manchurian, Chilli Chicken, Hakka Noodles
- **Fusion Dishes**: Creative combinations from different cuisines

### 🎨 Modern UI/UX
- **Beautiful Animations**: Smooth transitions using Framer Motion
- **Responsive Design**: Works perfectly on all devices
- **Dark Mode Support**: Automatic theme switching
- **Interactive Cards**: Hover effects and micro-interactions
- **Professional Icons**: Lucide React icons throughout

### 🔧 Technical Features
- **TypeScript**: Full type safety
- **Next.js 16**: Latest React framework with App Router
- **Tailwind CSS 4**: Modern utility-first styling
- **Netlify Ready**: Optimized for deployment
- **Static Generation**: Fast page loads

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/poojabhore88-maker/cookwise-app.git
cd cookwise-app/frontend
```

2. **Install dependencies**
```bash
npm install
```

3. **Run the development server**
```bash
npm run dev
```

4. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

---

## 📖 Usage

### Adding Ingredients

**Option 1: Manual Input**
1. Click "Add Ingredients"
2. Type ingredient name (e.g., "tomato")
3. Press Enter or click "Add"
4. Repeat for all ingredients

**Option 2: Voice Input**
1. Click the 🎤 Voice button
2. Speak ingredients (e.g., "tomato, onion, potato")
3. Ingredients will be added automatically

**Option 3: Photo Upload (Demo)**
1. Click "Scan My Fridge"
2. Upload a photo of your fridge
3. Click "Detect Ingredients"
4. Demo ingredients will be added

### Finding Recipes

1. After adding ingredients, click "Find Recipes"
2. Browse matching recipes
3. Click on a recipe to see variations
4. Choose your preferred cooking style
5. View step-by-step instructions

### Understanding Recipe Cards

- **Green checkmark**: Ingredient you have
- **Red alert**: Missing ingredient
- **Alternative suggestions**: Click to see substitutes
- **Style badges**: Easy (⚡), Standard (⭐), Restaurant Style (🔥)

---

## 🏗️ Project Structure

```
cookwise-app/
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   │   ├── page.tsx          # Main application page
│   │   │   ├── layout.tsx        # Root layout
│   │   │   └── globals.css       # Global styles
│   │   └── lib/
│   │       ├── recipes.ts        # Recipe database
│   │       └── alternatives.ts    # Ingredient alternatives
│   ├── netlify/
│   │   ├── functions/            # Netlify functions
│   │   │   ├── scan-fridge.ts
│   │   │   └── recipes.ts
│   │   └── toml                  # Netlify config
│   ├── package.json
│   ├── tsconfig.json
│   └── next.config.ts
└── backend/
    ├── app/
    │   ├── main.py               # FastAPI application
    │   ├── routes/               # API routes
    │   ├── services/             # Business logic
    │   └── models/               # Data models
    └── requirements.txt
```

---

## 🌐 Deployment

### Netlify Deployment

1. **Connect to Netlify**
   - Go to [app.netlify.com](https://app.netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub account
   - Select `cookwise-app` repository

2. **Configure Build Settings**
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
   - **Base directory**: `frontend`

3. **Deploy**
   - Click "Deploy site"
   - Netlify will build and deploy automatically

4. **Environment Variables** (Optional)
   - Add any API keys or configuration as needed

### Manual Deployment

```bash
# Build the project
npm run build

# The optimized production build is in the .next directory
# Deploy this folder to your hosting service
```

---

## 🛠️ Tech Stack

- **Frontend**: Next.js 16, React 19, TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Backend**: FastAPI (Python)
- **Deployment**: Netlify

---

## 📝 Development

### Adding New Recipes

Edit `src/lib/recipes.ts`:

```typescript
{
  name: 'Your Recipe',
  category: 'Indian' | 'Italian' | 'Chinese' | 'Fusion',
  variations: [
    {
      style: 'Easy',
      time: '15 min',
      difficulty: 'Easy',
      ingredients: ['ingredient1', 'ingredient2'],
      steps: ['Step 1', 'Step 2', 'Step 3']
    },
    // Add Standard and Restaurant Style variations
  ]
}
```

### Adding Ingredient Alternatives

Edit `src/lib/alternatives.ts`:

```typescript
'ingredient': ['alternative1', 'alternative2', 'alternative3'],
```

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- Recipe inspiration from various cuisines
- Icons by [Lucide](https://lucide.dev/)
- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)

---

## 📞 Contact

- GitHub: [@poojabhore88-maker](https://github.com/poojabhore88-maker)
- Repository: [cookwise-app](https://github.com/poojabhore88-maker/cookwise-app)

---

<div align="center">

**Made with ❤️ by CookWise Team**

⭐ Star this repo if it helped you!

</div>

