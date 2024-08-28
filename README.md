# Task: Create Edit Page
1. **Header Component**:
   - Created the `Header` component in the `containers` directory.
   - Added header layout and styled the buttons.

2. **Edit Page**:
   - Developed the `EditUser` page in the `pages` directory.
   - Created the `UserForm` component within `components`.
   - Implemented a page container (a `Box` with margin and padding).
   - Developed a Higher-Order Component (HOC) for the container.
   - Added dummy user data and managed user state.
   - Set up event handlers for form interactions.

## Task: Create Users Page
1. **UserPage Component**:
   - Created the `UserPage` component in the `pages` directory.
   - Incorporated user filters into the page.
   - Refactored the icon dropdown, extracting it into a separate component.
   - Designed the filters layout and connected it to dummy data.
   - Implemented conditional filter blocks for when fewer than three departments are selected.

2. **Users Table**:
   - Developed the user table component.
   - Created a layout and applied styles.
   - Created a `UserItem` component for the table.
   - Updated filter styles.

3. **Additional Features**:
   - Added an "Add User" button, placed it in a container, and styled it.
   - Integrated a simple modal for adding users.
   - Implemented user filtering logic.
   - Added sorting logic for the dropdown select options.

## Task: Update User Pop-up Window
1. **Styling**:
   - Applied additional styles to the user pop-up window.

2. **TypeScript Types**:
   - Updated TypeScript types for better type safety.

## Task: Connect to Local Storage
1. **Local Storage Hook**:
   - Created a custom hook for managing user data in local storage.
   - Updated the logic in the `UserPage` and `EditUser` components to fetch data from local storage.

## Task: Add Routes
1. **Routing**:
   - Implemented routing to navigate between pages.
   - Made small fixes to the container layout for better alignment.
"""

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
