# 📚 Dewey - Intelligent Book Recommendation Platform

> *Built in 3 days at Developer Camp 2025*

Dewey is a cutting-edge book recommendation platform that helps users discover their next great read through intelligent, real-time recommendations powered by GreyWhale AI. Track your reading journey, manage your personal library, and get lightning-fast book suggestions tailored to your interests and reading behavior.

## ✨ Features

### 🎯 **Smart Recommendations**
- **Real-time AI-powered suggestions** using GreyWhale API
- **Behavioral learning** through advanced linger tracking
- **Search-driven discovery** with natural language queries
- **Infinite scroll** for seamless browsing experience

### 📖 **Personal Library Management**
- **Track reading status** (Want to Read, Currently Reading, Read)
- **Personal collection** with easy book management

## 🛠 Technology Stack

### Frontend
- **Next.js 15** with React 19 - Modern React framework with latest features
- **TypeScript** - Type-safe development
- **Tailwind CSS 4** - Utility-first styling
- **Custom Hooks** - Reusable logic for recommendations and library management

### Backend
- **Python** - API exploration and experimentation
- **GreyWhale API** - AI-powered recommendation engine
- **RESTful Architecture** - Clean, scalable API design

### Key Libraries & Tools
- **UUID** - Session and user identification
- **Intersection Observer API** - Advanced linger tracking
- **Local Storage** - Client-side library persistence

## 🏗 Architecture

### Frontend Architecture
```
ui/
├── app/
│   ├── components/          # Reusable UI components
│   ├── hooks/              # Custom React hooks
│   │   ├── useRecommendations.ts  # Main recommendation logic
│   │   ├── useLingerTracking.ts   # Behavioral tracking
│   │   └── libHooks.ts            # Library management
│   ├── services/           # API communication
│   ├── types/              # TypeScript definitions
│   └── lib/                # Library page
```

### API Exploration and Experimentation Architecture
```
test_api/
├── src/
│   ├── feed_api.py         # GreyWhale API integration
│   ├── item_api.py         # Item management
│   └── model_api.py        # Data models
├── dataset/                # Sample data
└── main.py                 # API orchestration
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- Python 3.8+
- GreyWhale API access token

### Frontend Setup

1. **Navigate to the UI directory**
   ```bash
   cd ui
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   # Create .env.local file
   NEXT_PUBLIC_API_URL=http://localhost:8000
   NEXT_PUBLIC_PROJECT_NAME=dewey
   NEXT_PUBLIC_API_TOKEN=your_greywhale_token
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

### Backend Setup

1. **Navigate to the API directory**
   ```bash
   cd test_api
   ```

2. **Set up environment variables**
   ```bash
   # Create .env file or set environment variables
   export PROJECT_NAME=dewey
   export ACCESS_TOKEN=your_greywhale_token
   export USER=your_username
   export PASS=your_password
   ```

3. **Install Python dependencies**
   ```bash
   pip install requests uuid
   ```

4. **Run the API**
   ```bash
   python main.py
   ```

## 🎮 How It Works

### 1. **Personalized Feed**
- Each user gets a unique session ID
- GreyWhale API generates initial recommendations
- Real-time updates based on user interactions

### 2. **Linger Tracking Magic**
- **Intersection Observer** tracks which books users view
- **Time-based metrics** measure engagement (minimum 100ms)
- **Behavioral data** sent to GreyWhale for improved recommendations
- **Enter count** tracks repeated views of the same book

### 3. **Smart Search**
- Natural language processing through GreyWhale
- Context-aware results that understand intent
- Real-time refinement based on search history

### 4. **Library Management**
- Local storage for instant access
- Three reading states: Want to Read, Reading, Read
- Easy status transitions with visual feedback

## 🔧 Key Components

### `useRecommendations` Hook
- Manages recommendation fetching and state
- Integrates linger tracking data
- Handles infinite scroll and pagination
- Converts API responses to frontend models

### `useLingerTracking` Hook
- Tracks user engagement with book cards
- Uses Intersection Observer for accurate viewport detection
- Generates behavioral events for GreyWhale API
- Optimized for performance with minimal overhead

### `RecommendationService`
- Handles all GreyWhale API communication
- Manages authentication and error handling
- Formats requests and responses
- Supports both live and mock data modes

## 📊 Features in Detail

### Linger Tracking System
The linger tracking system is a sophisticated behavioral analysis tool that:

- **Monitors viewport intersection** at 50% visibility threshold
- **Tracks multiple metrics**: total time viewed, enter count, session data
- **Sends intelligent events** to GreyWhale for recommendation improvement
- **Resets appropriately** on new searches to maintain relevance

### Real-time Recommendations
- **Session-based personalization** with UUID generation
- **Event-driven updates** using linger data
- **Batch loading** with configurable page sizes
- **Error handling** with graceful fallbacks

## 🎯 Developer Camp Achievement

Built in just **3 days** during Developer Camp 2025, Dewey showcases:

- **Rapid prototyping** with modern web technologies
- **AI integration** using GreyWhale's powerful recommendation engine
- **Advanced UX patterns** like linger tracking and infinite scroll
- **Full-stack development** from API to polished frontend
- **Mobile-first design** with responsive layouts

## 🚀 Future Enhancements

- **User authentication** and persistent profiles
- **Social features** - share and discuss books
- **Reading analytics** and progress tracking
- **Book reviews** and rating system
- **Advanced filtering** by genre, author, publication date
- **Offline reading lists** with sync capabilities

## 🤝 Contributing

This project was built during a hackathon, but we welcome contributions! Feel free to:

1. Fork the repository
2. Create a feature branch
3. Make your improvements
4. Submit a pull request

## 📝 License

Built with ❤️ during Developer Camp 2025. Open source and available for learning and improvement.

---

**Dewey** - *Discover your next great read with the power of AI* 📚✨
