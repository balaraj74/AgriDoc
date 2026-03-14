<p align="center">
  <img src="public/logo.svg" alt="AgriDoc Logo" width="120" height="120"/>
</p>

<h1 align="center">🌾 AgriDoc</h1>
<h3 align="center">AI-Powered Smart Farming Assistant for Indian Farmers</h3>

<p align="center">
  <img src="https://img.shields.io/badge/Version-0.1.0-green" alt="Version"/>
  <img src="https://img.shields.io/badge/License-MIT-blue" alt="License"/>
  <img src="https://img.shields.io/badge/Next.js-16.1.1-black" alt="Next.js"/>
  <img src="https://img.shields.io/badge/Firebase-Hosted-orange" alt="Firebase"/>
  <img src="https://img.shields.io/badge/AI-Gemini%202.0-blue" alt="AI"/>
</p>

<p align="center">
  A comprehensive AI-powered farming assistant designed to empower Indian farmers with cutting-edge technology for crop management, disease detection, market intelligence, and sustainable agriculture practices.
</p>

---

## 📋 Table of Contents

- [About](#-about)
- [Features](#-features)
- [Architecture](#-architecture)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Installation](#-installation)
- [Deployment](#-deployment)
- [API Endpoints](#-api-endpoints)
- [Environment Variables](#-environment-variables)
- [Operating Instructions](#-operating-instructions)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

---

## 🌱 About

**AgriDoc** is an innovative AI-powered agricultural platform built to revolutionize farming practices in India. By leveraging the power of Google's Gemini AI, real-time weather data, satellite imagery, and market intelligence, AgriDoc provides farmers with actionable insights to maximize crop yields, reduce losses, and improve profitability.

### 🎯 Mission
To bridge the technology gap in Indian agriculture by providing farmers with accessible, intelligent, and multilingual farming assistance.

### 🌍 Vision
Empowering every farmer with AI-driven insights for sustainable and profitable farming.

---

## ✨ Features

### 🔬 AI-Powered Crop Analysis

| Feature | Description |
|---------|-------------|
| 🦠 **Disease Detection** | Upload crop images for instant AI-powered disease identification with treatment recommendations |
| 🌿 **Medicinal Plant Identifier** | Identify medicinal plants using your camera and learn about their properties |
| 🛰️ **Satellite Health Monitoring** | Monitor crop health using satellite imagery and NDVI analysis |

### 💬 Intelligent Assistance

| Feature | Description |
|---------|-------------|
| 🤖 **Farming Chatbot** | 24/7 AI assistant for farming queries in multiple Indian languages |
| 🎙️ **Live Voice Advisor** | Real-time voice-based farming consultation |
| 🧪 **Soil Advisor** | Personalized fertilizer recommendations based on soil analysis |

### 📊 Market Intelligence

| Feature | Description |
|---------|-------------|
| 📈 **Live Market Prices** | Real-time market price tracking from government APIs |
| 🔮 **Price Predictions** | AI-powered price forecasting for better selling decisions |
| 🤝 **Market Matchmaking** | Connect directly with buyers for best prices |
| 🏪 **Find Best Sellers** | Locate verified sellers and mandis near you |

### 🗺️ Farm Management

| Feature | Description |
|---------|-------------|
| 🗺️ **Field Mapping** | Map and manage farm boundaries with Google Maps integration |
| 📅 **Crop Calendar** | AI-generated seasonal task schedules and reminders |
| 🌾 **Crop Management** | Track multiple crops across different fields |
| 💰 **Expense Tracker** | Manage farming expenses and track ROI |

### 🌤️ Weather & Planning

| Feature | Description |
|---------|-------------|
| ⛅ **Weather Forecasting** | 7-day weather forecasts with farming recommendations |
| 📋 **Harvest Planning** | Optimize harvest timing based on weather and market conditions |

### 🏦 Financial Services

| Feature | Description |
|---------|-------------|
| 💳 **Loan Assistant** | Check eligibility for agricultural loans |
| 📜 **Government Schemes** | Discover and apply for farming subsidy schemes |
| 🏥 **Insurance Advisor** | Crop insurance guidance and eligibility check |
| 📄 **Land Records** | Access and manage digital land records |

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                              CLIENT LAYER                                    │
├─────────────────────────────────────────────────────────────────────────────┤
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐        │
│  │   Next.js   │  │   React 19  │  │ Tailwind CSS│  │  Radix UI   │        │
│  │  App Router │  │ Components  │  │   Styling   │  │ Primitives  │        │
│  └──────┬──────┘  └──────┬──────┘  └─────────────┘  └─────────────┘        │
│         │                │                                                   │
│         └────────────────┼──────────────────────────────────────────────────┤
│                          ▼                                                   │
├─────────────────────────────────────────────────────────────────────────────┤
│                              API LAYER                                       │
├─────────────────────────────────────────────────────────────────────────────┤
│  ┌─────────────────────────────────────────────────────────────────────┐    │
│  │                     Next.js API Routes                               │    │
│  │  ┌────────────┐  ┌────────────┐  ┌────────────┐  ┌────────────┐    │    │
│  │  │  /api/     │  │  /api/     │  │  /api/     │  │  /api/     │    │    │
│  │  │  genkit    │  │  health    │  │  weather   │  │  market    │    │    │
│  │  └────────────┘  └────────────┘  └────────────┘  └────────────┘    │    │
│  └─────────────────────────────────────────────────────────────────────┘    │
│                                    │                                         │
│                                    ▼                                         │
├─────────────────────────────────────────────────────────────────────────────┤
│                              AI LAYER (Genkit)                               │
├─────────────────────────────────────────────────────────────────────────────┤
│  ┌─────────────────────────────────────────────────────────────────────┐    │
│  │                    Google Genkit AI Framework                        │    │
│  │  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐              │    │
│  │  │   Gemini     │  │    AI        │  │   Custom     │              │    │
│  │  │  2.0 Flash   │  │   Flows      │  │  Prompts     │              │    │
│  │  └──────────────┘  └──────────────┘  └──────────────┘              │    │
│  └─────────────────────────────────────────────────────────────────────┘    │
│                                    │                                         │
│                                    ▼                                         │
├─────────────────────────────────────────────────────────────────────────────┤
│                          DATA & STORAGE LAYER                                │
├─────────────────────────────────────────────────────────────────────────────┤
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐    │
│  │   Firebase   │  │   Firebase   │  │   Firebase   │  │    Data      │    │
│  │  Firestore   │  │   Storage    │  │    Auth      │  │   Connect    │    │
│  └──────────────┘  └──────────────┘  └──────────────┘  └──────────────┘    │
│                                                                              │
├─────────────────────────────────────────────────────────────────────────────┤
│                         EXTERNAL SERVICES                                    │
├─────────────────────────────────────────────────────────────────────────────┤
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐    │
│  │ Google Maps  │  │  Weather     │  │   Market     │  │  Government  │    │
│  │     API      │  │    APIs      │  │    APIs      │  │    APIs      │    │
│  └──────────────┘  └──────────────┘  └──────────────┘  └──────────────┘    │
└─────────────────────────────────────────────────────────────────────────────┘
```

### AI Flow Architecture

```
                          ┌─────────────────────┐
                          │    User Request     │
                          └──────────┬──────────┘
                                     │
                                     ▼
                          ┌─────────────────────┐
                          │   Genkit Handler    │
                          └──────────┬──────────┘
                                     │
              ┌──────────────────────┼──────────────────────┐
              │                      │                      │
              ▼                      ▼                      ▼
   ┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐
   │  Disease Flow    │  │  Chatbot Flow    │  │  Market Flow     │
   │  - Image Input   │  │  - Text Input    │  │  - Location      │
   │  - AI Analysis   │  │  - Multi-lang    │  │  - Crop Data     │
   │  - Diagnosis     │  │  - Response      │  │  - Predictions   │
   └──────────────────┘  └──────────────────┘  └──────────────────┘
              │                      │                      │
              └──────────────────────┼──────────────────────┘
                                     │
                                     ▼
                          ┌─────────────────────┐
                          │   Gemini 2.0 Flash  │
                          │   (AI Processing)   │
                          └──────────┬──────────┘
                                     │
                                     ▼
                          ┌─────────────────────┐
                          │   User Response     │
                          └─────────────────────┘
```

---

## 🛠️ Tech Stack

### Frontend
| Technology | Version | Purpose |
|------------|---------|---------|
| **Next.js** | 16.1.1 | React framework with App Router |
| **React** | 19.2.3 | UI component library |
| **TypeScript** | 5.x | Type-safe development |
| **Tailwind CSS** | 3.4.1 | Utility-first styling |
| **Radix UI** | Latest | Accessible UI primitives |
| **Framer Motion** | 11.3.8 | Animations and transitions |
| **Recharts** | 2.15.1 | Data visualization |
| **Lucide React** | 0.475.0 | Icon library |

### Backend & AI
| Technology | Version | Purpose |
|------------|---------|---------|
| **Google Genkit** | 1.27.0 | AI orchestration framework |
| **Gemini AI** | 2.0 Flash | Large language model |
| **Firebase** | 10.12.3 | Backend-as-a-Service |
| **Firebase Admin** | 12.2.0 | Server-side Firebase |
| **Data Connect** | Latest | Type-safe database |

### APIs & Services
| Service | Purpose |
|---------|---------|
| **Google Maps API** | Field mapping & location services |
| **Weather APIs** | Real-time weather data |
| **Government APIs** | Market prices & schemes |
| **Firebase Auth** | User authentication |
| **Firebase Storage** | Image & file storage |
| **Firestore** | NoSQL database |

### Development Tools
| Tool | Purpose |
|------|---------|
| **ESLint** | Code linting |
| **TypeScript** | Static type checking |
| **Genkit CLI** | AI flow development |
| **Firebase CLI** | Deployment & management |

---

## 📁 Project Structure

```
AgriDoc/
├── 📂 src/
│   ├── 📂 app/                    # Next.js App Router
│   │   ├── 📂 (app)/              # Protected app routes
│   │   │   ├── 📂 ai/             # AI features page
│   │   │   ├── 📂 all-farms/      # Farm management
│   │   │   ├── 📂 analytics/      # Farm analytics
│   │   │   ├── 📂 chatbot/        # AI farming chatbot
│   │   │   ├── 📂 crop-calendar/  # Seasonal planner
│   │   │   ├── 📂 crops/          # Crop management
│   │   │   ├── 📂 dashboard/      # Main dashboard
│   │   │   ├── 📂 disease-check/  # Disease detection
│   │   │   ├── 📂 expenses/       # Expense tracker
│   │   │   ├── 📂 fertilizer-finder/  # Fertilizer search
│   │   │   ├── 📂 field-mapping/  # GPS field mapping
│   │   │   ├── 📂 harvest/        # Harvest management
│   │   │   ├── 📂 land-records/   # Digital land records
│   │   │   ├── 📂 live-advisor/   # Voice consultation
│   │   │   ├── 📂 loan-assistant/ # Financial assistant
│   │   │   ├── 📂 market/         # Market prices
│   │   │   ├── 📂 market-matchmaking/  # Buyer connections
│   │   │   ├── 📂 medicinal-plants/   # Plant identifier
│   │   │   ├── 📂 profile/        # User profile
│   │   │   ├── 📂 records/        # Farm records
│   │   │   ├── 📂 satellite-health/   # Crop health
│   │   │   ├── 📂 schemes/        # Government schemes
│   │   │   ├── 📂 soil-advisor/   # Soil analysis
│   │   │   ├── 📂 statistic/      # Statistics page
│   │   │   ├── 📂 tools/          # Farming tools
│   │   │   ├── 📂 voice/          # Voice features
│   │   │   ├── 📂 weather/        # Weather forecasts
│   │   │   └── 📄 layout.tsx      # App layout
│   │   ├── 📂 api/                # API routes
│   │   │   ├── 📂 genkit/         # AI endpoints
│   │   │   └── 📂 health/         # Health check
│   │   ├── 📄 layout.tsx          # Root layout
│   │   ├── 📄 page.tsx            # Landing page
│   │   └── 📄 globals.css         # Global styles
│   │
│   ├── 📂 ai/                     # AI Configuration
│   │   ├── 📂 flows/              # Genkit AI flows
│   │   │   ├── 📄 crop-disease-detection.ts
│   │   │   ├── 📄 farming-advice-chatbot.ts
│   │   │   ├── 📄 find-best-sellers-flow.ts
│   │   │   ├── 📄 generate-crop-calendar.ts
│   │   │   ├── 📄 live-advisor-flow.ts
│   │   │   ├── 📄 loan-insurance-assistant-flow.ts
│   │   │   ├── 📄 market-matchmaking-flow.ts
│   │   │   ├── 📄 market-price-search.ts
│   │   │   ├── 📄 medicinal-plant-identifier.ts
│   │   │   ├── 📄 price-prediction-flow.ts
│   │   │   ├── 📄 satellite-health-flow.ts
│   │   │   ├── 📄 schemes-search.ts
│   │   │   ├── 📄 soil-advisor-flow.ts
│   │   │   ├── 📄 soil-report-parser-flow.ts
│   │   │   └── 📄 weather-search.ts
│   │   ├── 📄 genkit.ts           # Genkit configuration
│   │   ├── 📄 model-config.ts     # AI model settings
│   │   └── 📄 dev.ts              # Development server
│   │
│   ├── 📂 components/             # React Components
│   │   ├── 📂 ui/                 # Base UI components
│   │   └── 📄 [feature-components].tsx
│   │
│   ├── 📂 hooks/                  # Custom React Hooks
│   ├── 📂 lib/                    # Utilities & Config
│   │   ├── 📄 firebase.ts         # Firebase config
│   │   └── 📄 utils.ts            # Helper functions
│   │
│   └── 📂 types/                  # TypeScript Types
│
├── 📂 public/                     # Static Assets
├── 📂 dataconnect/                # Firebase Data Connect
├── 📄 apphosting.yaml             # Firebase App Hosting
├── 📄 firebase.json               # Firebase config
├── 📄 firestore.rules             # Security rules
├── 📄 package.json                # Dependencies
├── 📄 tailwind.config.ts          # Tailwind config
├── 📄 tsconfig.json               # TypeScript config
└── 📄 next.config.mjs             # Next.js config
```

---

## 🔧 Installation

### Prerequisites

- **Node.js** 20+ and npm
- **Firebase CLI** (`npm install -g firebase-tools`)
- **Google Cloud API Key** (for Gemini AI)
- **Google Maps API Key**

### Quick Start

```bash
# 1. Clone the repository
git clone https://github.com/balaraj74/AgriDoc.git
cd AgriDoc

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env.local

# 4. Add your API keys to .env.local
# GOOGLE_API_KEY=your_gemini_api_key
# GOOGLE_MAPS_API_KEY=your_maps_api_key

# 5. Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

---

## 🚀 Deployment

### Firebase App Hosting

**Automated Setup:**
```bash
./setup-backend.sh
```

**Manual Deployment:**

1. **Install Firebase CLI:**
   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase:**
   ```bash
   firebase login
   ```

3. **Set up secrets:**
   ```bash
   firebase apphosting:secrets:set GOOGLE_API_KEY
   ```

4. **Deploy via Firebase Console:**
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Select project: `agridoc-1dc30`
   - Navigate to **App Hosting**
   - Connect your GitHub repository
   - Firebase will auto-deploy on each push

For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md)

---

## 🔌 API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/health` | GET | Health check endpoint |
| `/api/genkit` | POST | Genkit AI flows endpoint |

---

## 🌐 Environment Variables

### Development (`.env.local`)
```env
GOOGLE_API_KEY=your_gemini_api_key
GEMINI_API_KEY=your_gemini_api_key
GOOGLE_MAPS_API_KEY=your_maps_api_key
NODE_ENV=development
```

### Production (Firebase Secrets)
```bash
firebase apphosting:secrets:set GOOGLE_API_KEY
firebase apphosting:secrets:set GOOGLE_MAPS_API_KEY
```

---

## 📱 Operating Instructions

### Available Scripts

```bash
# Development
npm run dev              # Start dev server with Genkit watch

# Production
npm run build            # Build for production
npm run start            # Start production server

# Code Quality
npm run lint             # Run ESLint
npm run typecheck        # Run TypeScript checks

# AI Development
npm run genkit:watch     # Start Genkit in watch mode

# Deployment
npm run firebase:deploy  # Deploy to Firebase
```

### Using the Application

1. **Dashboard**: View farm overview, weather, and quick actions
2. **Disease Check**: Upload crop photos for AI diagnosis
3. **Chatbot**: Ask farming questions in your language
4. **Market**: Check live prices and predictions
5. **Field Mapping**: Map your farm boundaries using GPS
6. **Weather**: Get 7-day forecasts with farming tips
7. **Schemes**: Discover government schemes you're eligible for

### Supported Languages

- English 🇬🇧
- Hindi 🇮🇳
- Kannada 🇮🇳
- Tamil 🇮🇳
- Telugu 🇮🇳
- Marathi 🇮🇳
- Bengali 🇮🇳

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

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Owner & Developer

<table>
  <tr>
    <td align="center">
      <b>Balaraj R</b><br/>
      <i>Full Stack Developer & AI Engineer</i>
    </td>
  </tr>
</table>

### 📞 Contact

| Channel | Details |
|---------|---------|
| 📧 **Email** | [balarajr483@gmail.com](mailto:balarajr483@gmail.com) |
| 📱 **Phone** | +91 8431206594 |
| 🌐 **GitHub** | [@balaraj74](https://github.com/balaraj74) |

---

## 🙏 Acknowledgments

- Google Gemini AI for powering intelligent features
- Firebase team for excellent hosting and database services
- Indian farming community for inspiration and feedback

---

<p align="center">
  <b>Built with ❤️ for Indian Farmers</b><br/>
  <i>Empowering Agriculture with AI</i>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Made%20in-India%20🇮🇳-green" alt="Made in India"/>
</p>
