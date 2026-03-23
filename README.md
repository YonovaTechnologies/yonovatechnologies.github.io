# Deploy to GitHub Pages

Configure the React Project
Unlike Angular's angular.json, React (using Vite) needs a small tweak to handle the sub-folder path if your repo isn't the primary username.github.io (e.g., if it's username.github.io/my-profile).

Open vite.config.js.

If your repo is strictly username.github.io, you can leave it. If it has a sub-path, add the base property:

JavaScript
export default defineConfig({
  plugins: [react()],
  base: '/', // Change to '/repo-name/' if it's not your main site
})
Step 3: The Deployment Process (Recommended Method)
Using gh-pages is the most reliable way to handle the migration without manually dragging files.

Install the deployment package:

Bash
npm install gh-pages --save-dev
Update package.json:
Add these two lines to your "scripts" section:

JSON
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
Deploy:

Bash
npm run deploy
This will build your React app and push only the dist folder to a branch called gh-pages.

Step 4: Finalize GitHub Settings
Once the command finishes, you need to tell GitHub to look at the new React files instead of the old Angular ones.

Go to your repository on GitHub.

Navigate to Settings > Pages.

Under Build and deployment, change the Branch from main to gh-pages.

Click Save.

Step 5: Handling Client-Side Routing (Crucial)
In Angular, you likely used HashLocationStrategy or a 404.html hack. In React, if you use React Router, refreshing the page will cause a 404 error on GitHub Pages.

The Quick Fix:
Use HashRouter instead of BrowserRouter in your App.js or main.jsx:

JavaScript
import { HashRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      {/* your routes */}
    </Router>
  );
}

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
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

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
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
