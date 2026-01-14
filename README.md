# Art Table - Art Institute of Chicago Artwork Browser

A React + TypeScript + Vite application for browsing and exploring artworks from the Art Institute of Chicago API. This project provides an interactive data table interface with pagination and selection capabilities.

## Project Overview

This application fetches artwork data from the Art Institute of Chicago's public API and displays it in a searchable, paginated data table. Users can browse through hundreds of artworks, view details, and select multiple items for further interaction.

## Features

- **Dynamic Data Table**: Browse artworks with pagination support
- **Server-Side Pagination**: Efficient loading of data with 12 artworks per page
- **Artwork Selection**: Select multiple artworks with a checkbox interface
- **Responsive UI**: Built with PrimeReact components for a modern look and feel
- **TypeScript**: Full type safety with TypeScript support
- **Hot Module Replacement**: Fast development with Vite's HMR
- **Code Quality**: ESLint configuration for consistent code standards

## Tech Stack

### Core
- **React** (v19.2.0) - UI library
- **TypeScript** (~5.9.3) - Type-safe JavaScript
- **Vite** (v7.2.4) - Build tool and dev server
- **@vitejs/plugin-react** (v5.1.1) - Vite React plugin

### UI Components
- **PrimeReact** (v10.9.7) - Rich React component library
- **PrimeIcons** (v7.0.0) - Icon library
- **React DOM** (v19.2.0) - React DOM utilities

### Development
- **ESLint** (v9.39.1) - Code linting
- **TypeScript ESLint** (v8.46.4) - TypeScript linting support
- **ESLint React Hooks Plugin** (v7.0.1) - React hooks validation
- **ESLint React Refresh Plugin** (v0.4.24) - Vite React refresh support

## Project Structure

```
art-table/
├── src/
│   ├── api/
│   │   └── artworks.ts          # API integration for Art Institute
│   ├── components/
│   │   ├── ArtTable.tsx         # Main table component with pagination
│   │   └── SelectOverlay.tsx    # Selection overlay component
│   ├── types/
│   │   └── artworks.ts          # TypeScript types for artwork data
│   ├── App.tsx                  # Main application component
│   ├── main.tsx                 # Application entry point
│   ├── App.css                  # Application styles
│   └── index.css                # Global styles
├── public/                       # Static assets
├── vite.config.ts               # Vite configuration
├── tsconfig.json                # TypeScript configuration
├── tsconfig.app.json            # App-specific TypeScript config
├── tsconfig.node.json           # Node-specific TypeScript config
├── eslint.config.js             # ESLint configuration
├── index.html                   # HTML entry point
└── package.json                 # Project dependencies and scripts
```

## Getting Started

### Prerequisites
- Node.js (14+ recommended)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Nsanjayboruds/GrowMeOrganic--Assignment.git
cd art-table
```

2. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

### Build

Create a production build:
```bash
npm run build
```

### Preview

Preview the production build locally:
```bash
npm run preview
```

### Linting

Check code quality with ESLint:
```bash
npm run lint
```

## Components

### ArtTable
Main component that displays artworks in a paginated data table. Features:
- Server-side pagination with 12 items per page
- Real-time data loading with loading indicators
- Checkbox selection for multiple artworks
- Integration with PrimeReact DataTable

### SelectOverlay
Component for managing artwork selection and display of selected items.

## API Integration

The application integrates with the **Art Institute of Chicago Public API**:
- Fetches artwork data dynamically
- Handles pagination and filtering
- Type-safe API calls with TypeScript

See `src/api/artworks.ts` for API implementation details.

## Browser Support

This application uses modern JavaScript features and is best viewed in:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

## Development Guidelines

### TypeScript
All code should include proper type annotations. Use the provided types in `src/types/artworks.ts`.

### Code Style
Follow ESLint rules configured in `eslint.config.js`. Run `npm run lint` to check your code.

### Components
Use functional components with React hooks for state management.
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
