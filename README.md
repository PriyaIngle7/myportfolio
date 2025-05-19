# Priya's Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features a dark mode theme with smooth animations and interactive elements.

## Features

- 🎨 Modern dark mode design with purple and blue accents
- 📱 Fully responsive layout
- ✨ Smooth animations using Framer Motion
- 🎯 Interactive project showcase
- 📊 Animated skill bars
- 📝 Contact form
- 🔍 SEO optimized

## Tech Stack

- React
- TypeScript
- Tailwind CSS
- Framer Motion
- React Icons

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

## Customization

### Personal Information

1. Update the content in the following components:
   - `src/components/Hero.tsx`: Update name, title, and social links
   - `src/components/About.tsx`: Update bio, education, and skills
   - `src/components/Projects.tsx`: Add your projects
   - `src/components/Skills.tsx`: Update skills and expertise
   - `src/components/Contact.tsx`: Update contact information

2. Replace placeholder images:
   - Add your images to the `public` directory
   - Update image paths in the components

### Styling

1. Colors: Edit the color palette in `tailwind.config.js`
2. Typography: Update font families in `tailwind.config.js`
3. Animations: Modify animation settings in components using Framer Motion

## Deployment

### GitHub Pages

1. Add the following to your `package.json`:
   ```json
   {
     "homepage": "https://yourusername.github.io/portfolio",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
     }
   }
   ```

2. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

### Netlify

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `build`

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. 