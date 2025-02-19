# MBBS Study Abroad Website

A modern React application for an educational consultancy specializing in MBBS programs abroad. The website showcases various countries offering medical education, provides program details, and includes a student application system.

## Features

- Interactive country exploration with detailed program information
- Student testimonials and success stories
- Comprehensive admission process guide
- Online application form with real-time validation
- Google Analytics 4 integration for tracking user interactions
- Responsive design for all device sizes
- Integration with Lucide React icons
- Built with TypeScript for type safety

## Prerequisites

Before you begin, ensure you have installed:
- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/Vyomx1010/MBBS.git
cd mbbs-study-abroad
```

2. Install dependencies:
```bash
npm install
```

This will install all required dependencies including:
- React
- React GA4
- Lucide React
- TypeScript
- Tailwind CSS

## Configuration

1. Update the Google Analytics measurement ID:
   - Open `App.tsx`
   - Replace `G-XXXXXXXXXX` with your actual GA4 measurement ID

2. Customize the country data:
   - Modify the `countries` array in `App.tsx`
   - Update images, descriptions, and university information

## Running the Application

To start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or another port if 5173 is in use)

## Project Structure

```
src/
├── App.tsx          # Main application component
├── components/      # React components
├── types/          # TypeScript type definitions
└── assets/         # Static assets
```

## Key Components

- Hero Section with CTA buttons
- Statistics display
- Country exploration cards
- Testimonial section
- Application form
- Responsive footer

## Deployment

To build for production:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Technology Stack

- React 18
- TypeScript
- Tailwind CSS
- React GA4
- Lucide React Icons

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)


## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

Your Name - Navneet Vishwakarma
Project Link: https://github.com/Vyomx1010/MBBS.git
