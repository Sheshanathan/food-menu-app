# Food Menu App

A modern web application for managing and displaying food menus, built with React and powered by Firebase for authentication and data storage.

## Features

- User authentication (Login/Signup) using Firebase Auth
- Interactive food menu display
- Responsive design with modern UI
- Real-time data synchronization with Firestore
- Secure user sessions and data management

## Tech Stack

- **Frontend**: React 19, Vite
- **Routing**: React Router DOM
- **Backend**: Firebase (Authentication & Firestore)
- **Styling**: CSS
- **Build Tool**: Vite
- **Linting**: ESLint

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Firebase project with Authentication and Firestore enabled

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd food-menu-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your Firebase configuration:
   ```env
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## Usage

- Navigate to the app in your browser (usually `http://localhost:5173`)
- Sign up for a new account or log in with existing credentials
- Access the food menu after authentication

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── pages/
│   ├── Login.jsx
│   ├── Signup.jsx
│   └── Menu.jsx
├── firebaseConfig.js
├── App.jsx
└── main.jsx
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

This project is licensed under the MIT License.
