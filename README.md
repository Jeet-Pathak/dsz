# DSZ - Debkanta Study Zone

A modern React + Vite-based academic resource hub with Firebase integration, optimized for Vercel deployment.

## 🚀 Project Structure

```
dsz/
├── src/
│   ├── components/       # Reusable React components
│   │   └── Navbar.jsx    # Navigation bar
│   ├── pages/            # Page components
│   │   ├── Home.jsx
│   │   ├── Team.jsx
│   │   ├── Academic.jsx
│   │   ├── PYQ.jsx
│   │   ├── Organizer.jsx
│   │   ├── Lectures.jsx
│   │   ├── DoubtZone.jsx
│   │   ├── Suggestions.jsx
│   │   ├── Gate.jsx
│   │   ├── WhatsApp.jsx
│   │   └── Telegram.jsx
│   ├── config/           # Configuration files
│   │   └── firebase.js   # Firebase initialization
│   ├── styles/           # CSS stylesheets
│   │   ├── index.css
│   │   ├── navbar.css
│   │   └── pages.css
│   ├── App.jsx           # Main app component
│   └── main.jsx          # Entry point
├── public/               # Static assets
├── .env.example          # Environment variables template
├── .env.local            # Local environment variables (DO NOT COMMIT)
├── .gitignore            # Git ignore file
├── vercel.json           # Vercel deployment config
├── vite.config.js        # Vite configuration
└── package.json          # Project dependencies
```

## 🛠️ Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Variables

Create a `.env.local` file in the root directory with your Firebase credentials:

```env
VITE_FIREBASE_API_KEY=your_api_key_here
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain_here
VITE_FIREBASE_PROJECT_ID=your_project_id_here
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket_here
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id_here
VITE_FIREBASE_APP_ID=your_app_id_here
```

### 3. Development Server

Start the local development server:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

### 4. Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory ready for deployment.

## ☁️ Deployment to Vercel

### Prerequisites
- Vercel account (free tier available)
- GitHub account with this repository

### Steps

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Convert to React with proper environment setup"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Select your GitHub repository
   - Vercel will auto-detect Vite configuration

3. **Add Environment Variables**
   - In Vercel project settings → Environment Variables
   - Add all the Firebase credentials:
     - `VITE_FIREBASE_API_KEY`
     - `VITE_FIREBASE_AUTH_DOMAIN`
     - `VITE_FIREBASE_PROJECT_ID`
     - `VITE_FIREBASE_STORAGE_BUCKET`
     - `VITE_FIREBASE_MESSAGING_SENDER_ID`
     - `VITE_FIREBASE_APP_ID`

4. **Deploy**
   - Click "Deploy"
   - Vercel will build and deploy automatically

### Environment Variables in Vercel

The `vercel.json` file contains the environment variable mapping. In Vercel dashboard:

```
VITE_FIREBASE_API_KEY              → @firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN          → @firebase_auth_domain
VITE_FIREBASE_PROJECT_ID           → @firebase_project_id
VITE_FIREBASE_STORAGE_BUCKET       → @firebase_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID  → @firebase_messaging_sender_id
VITE_FIREBASE_APP_ID               → @firebase_app_id
```

## 🔐 Security

### API Keys Protection

- **Local:** Keep `.env.local` in `.gitignore` (already configured)
- **Production:** Use Vercel environment variables (not committed to repo)
- **Example:** Use `.env.example` as template for team members

### Never commit:
- `.env.local`
- `.env`
- Any files with actual API keys

## 📝 Available Scripts

| Script | Purpose |
|--------|---------|
| `npm run dev` | Start development server on port 3000 |
| `npm run build` | Build for production (output to `dist/`) |
| `npm run preview` | Preview production build locally |

## 🎨 Theming

The application supports 5 themes:
- Cyber Noir (default)
- Deep Ocean
- Volcanic
- Arctic
- Neon Forest

Themes can be switched using the theme selector, stored in localStorage.

## 🔄 Features

- ✅ Multi-page SPA with React Router navigation
- ✅ Firebase Firestore integration for dynamic content
- ✅ Responsive design (mobile-optimized)
- ✅ Modern CSS with animations
- ✅ Dark mode with theme switching
- ✅ Environment-based configuration
- ✅ Production-ready build optimization
- ✅ SEO-friendly with proper meta tags

## 📦 Technologies Used

- **React 18** - UI library
- **Vite 5** - Build tool & dev server
- **Firebase 10** - Backend services
- **CSS3** - Styling with animations
- **Font Awesome** - Icons

## 🤝 Contributing

1. Create feature branch: `git checkout -b feature/your-feature`
2. Commit changes: `git commit -am 'Add feature'`
3. Push to branch: `git push origin feature/your-feature`
4. Submit a pull request

## 📖 Documentation

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [Firebase Documentation](https://firebase.google.com/docs)
- [Vercel Documentation](https://vercel.com/docs)

## 📄 License

This project is created for Debkanta Study Zone - All rights reserved 2025

## 🆘 Support

For issues or questions, contact the DSZ admin team.

---

**Last Updated:** April 7, 2025
**Version:** 1.0.0 (React + Vite)