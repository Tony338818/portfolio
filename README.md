# Portfolio Website

A modern, responsive personal portfolio website built with React, TypeScript, and Vite. This project showcases my skills, projects, and experience in web development.

## 🚀 Features

- **Fast Development**: Powered by Vite for lightning-fast hot module replacement (HMR)
- **Type-Safe**: Built with TypeScript for better code quality and developer experience
- **Responsive Design**: Optimized for all devices and screen sizes
- **Modern React**: Uses the latest React features including the React Compiler
- **ESLint Integration**: Configured with ESLint for code quality and consistency
- **Hero Section**: Eye-catching introduction with personal branding
- **Interactive Elements**: Includes interactive components like a counter button
- **Documentation Links**: Quick access to relevant documentation and resources
- **Social Links**: Connect with the community through various platforms

## 🛠️ Technologies Used

- **Frontend Framework**: React 19
- **Build Tool**: Vite 8
- **Language**: TypeScript
- **Styling**: CSS (with potential for CSS modules or styled-components)
- **Linting**: ESLint with TypeScript support
- **Icons**: SVG icons for scalable graphics
- **Assets**: Optimized image handling

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/
│   │   ├── react.svg
│   │   ├── vite.svg
│   │   └── hero.png
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
├── eslint.config.js
└── README.md
```

## 🏁 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

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
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## 📜 Available Scripts

- `npm run dev` - Start the development server with hot reload
- `npm run build` - Build the project for production
- `npm run lint` - Run ESLint to check code quality
- `npm run preview` - Preview the production build locally

## 🎨 Customization

This portfolio is built as a starting template. To customize it for your own use:

1. **Update Personal Information**: Modify the hero section in `src/App.tsx` with your name, photo, and description
2. **Add Projects**: Create new components for showcasing your work
3. **Styling**: Update `src/App.css` and `src/index.css` to match your design preferences
4. **Assets**: Replace images in `src/assets/` with your own
5. **Content**: Update links and social media handles in the social section

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

This will create a `dist/` folder with optimized production files.

### Deploy Options

- **Vercel**: Connect your GitHub repo for automatic deployments
- **Netlify**: Drag and drop the `dist/` folder or connect via Git
- **GitHub Pages**: Use GitHub Actions for automated deployment
- **Other**: Any static site hosting service

## 🔧 Development Notes

### React Compiler

This project uses the React Compiler for improved performance. Note that this may affect development and build times. See the [React Compiler documentation](https://react.dev/learn/react-compiler) for more details.

### ESLint Configuration

The project includes a comprehensive ESLint setup. For production applications, consider enabling type-aware rules as shown in the original template documentation.

## 🤝 Contributing

This is a personal portfolio project. While contributions are not expected, feel free to fork and adapt it for your own use.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **Name**: [Your Name]
- **Email**: [your.email@example.com]
- **LinkedIn**: [Your LinkedIn Profile]
- **GitHub**: [Your GitHub Profile]

---

Built with ❤️ using React, TypeScript, and Vite.
