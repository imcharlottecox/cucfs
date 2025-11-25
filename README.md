The project is built using React, TypeScript, and Vite, with TailwindCSS for styling.

1. Repository Setup
3.1 Clone the repository

Using GitHub Desktop:

Open GitHub Desktop.

Select "Clone a repository".

Enter the repository URL.

Choose a local directory.

Select "Clone".

Using the command line:

git clone <repository-url>
cd cua-cfs-website

2. Install Dependencies

Navigate to the project folder and install all required packages:

npm install


This generates the node_modules directory and installs the framework, dependencies, and build tools.

3. Local Development Environment

To start the development server:

npm run dev

The terminal will display a local URL, typically:

http://localhost:5173


Open this URL in a browser to view the live development version of the site.

The development server supports hot reloading: changes to files are reflected in real time without restarting the server.

4. Project Structure

Key directories and their purpose:

cucfs/src
    /assets          Contains images, logos, and static assets.
    /components      Contains reusable UI components and pages.
    /styles          Contains Tailwind and global styles.
    main.tsx         Application entry point.
    App.tsx          Root application layout.

public/              Static files copied directly to build output.
index.html           Document template for Vite.

package.json         Project metadata, scripts, and dependencies.
vite.config.ts       Vite configuration.
tsconfig.json        TypeScript configuration.


Most text and content updates are made in files under /src/routes and /src/components.

5. Editing Content
5.1 Editing page text

Locate the relevant page under /src/components.
Example:

Home page: src/routes/Home.tsx

Charities page: src/routes/Charities.tsx

Open the file in a text editor.

Edit text inside JSX elements. Example:

<p>Updated content goes here.</p>


Save the file.
The development server will reload automatically.

5.2 Editing images

Place image files in either /public or /assets.

5.3 Editing styles

Tailwind utility classes are applied directly in JSX.
Global styles are defined in /src/styles and can be modified if required.

6. Creating New Pages
Components contains both Pages and Sections, which make up the homepage.

To add a new page:

Create a new file under /src/components, for example:

/src/components/Sponsors.tsx


Add a page component:

export default function SponsorsPage() {
    return (
        <main>
            <h1>Sponsors</h1>
            <p>Content goes here.</p>
        </main>
    );
}


Ensure the new page is linked from the navigation component if needed.

7. Production Deployment

Deployments are handled through Cloudflare pages, under the CUCFS email.

The typical workflow:

Commit changes:

git add .
git commit -m "Description of update"


Push changes:

git push origin main


The hosting provider will automatically detect the push and start a new build and deployment.




# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

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

export default tseslint.config([
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
