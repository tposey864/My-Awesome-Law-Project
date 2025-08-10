# My Awesome Law Project

This is a rebuild project inspired by the Blob Law Firm website, using **React + TypeScript**, styled with **Tailwind CSS**, and tested with **Jest** (unit tests) and **Playwright** (end-to-end tests).
The goal is to practice modern frontend development, improve testing skills, and create a deployable web application.

## 🚀 Tech Stack
- React + TypeScript
- Tailwind CSS
- React Router v6
- React Helmet (SEO)
- Jest + React Testing Library (unit tests)
- Playwright (E2E tests)
- Deployed on Vercel

---

## 📦 Project Structure

blob-law-firm/
│
├── public/
│   ├── index.html
│   └── favicon.ico
│
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Navigation.tsx
│   │   ├── home/
│   │   │   ├── HeroBanner.tsx
│   │   │   ├── PracticeAreas.tsx
│   │   │   └── Testimonials.tsx
│   │   ├── about/
│   │   │   ├── TeamSection.tsx
│   │   │   └── FirmHistory.tsx
│   │   └── contact/
│   │       └── ContactForm.tsx
│   │
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   └── Contact.tsx
│   │
│   ├── styles/
│   │   └── global.css
│   │
│   ├── App.tsx
│   ├── index.tsx
│   └── setupTests.ts
│
├── tests/
│   ├── unit/
│   │   └── HeroBanner.test.tsx
│   └── e2e/
│       └── homepage.spec.ts
│
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
├── playwright.config.ts
└── jest.config.js

---

## 📦 Project Setup

### 1. Create React + TypeScript project
```bash
npx create-react-app my-awesome-law-project --template typescript
cd my-awesome-law-project
```

### 2. Install dependencies
```bash
npm install react-router-dom @types/react-router-dom react-helmet tailwindcss postcss autoprefixer
npm install --save-dev jest @testing-library/react @testing-library/jest-dom @testing-library/user-event @types/jest ts-jest playwright @playwright/test
```

### 3. Initialize Tailwind CSS
```bash
npx tailwindcss init -p
```

### 4. Add Tailwind directives to your CSS
In `src/styles/global.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
Import this in `src/index.tsx`:
```ts
import './styles/global.css';
```

### 5. Add Jest and Playwright configs
`jest.config.js`:
```js
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
};
```
`src/setupTests.ts`:
```ts
import '@testing-library/jest-dom';
```

`playwright.config.ts`:
```ts
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests/e2e',
  webServer: {
    command: 'npm start',
    port: 3000,
    timeout: 120000,
    reuseExistingServer: !process.env.CI,
  },
});
```

### 6. Example unit test
`tests/unit/HeroBanner.test.tsx`:
```ts
import { render, screen } from '@testing-library/react';
import HeroBanner from '../../src/components/home/HeroBanner';

test('renders hero banner title', () => {
  render(<HeroBanner title="Blob Law Firm" subtitle="Legal Experts" />);
  expect(screen.getByText(/Blob Law Firm/i)).toBeInTheDocument();
});
```

### 7. Example E2E test
`tests/e2e/homepage.spec.ts`:
```ts
import { test, expect } from '@playwright/test';

test('homepage has title', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await expect(page).toHaveTitle(/Blob Law Firm/);
});
```

Run it with:
```bash
npx playwright test
```

### 8. Deployment to Vercel
Push this repo to GitHub.
Go to vercel.com, import the repo.
Vercel auto-detects Create React App + TypeScript.
Click Deploy — done.
