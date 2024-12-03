# Vue 3 + Vite + Tailwind

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about IDE Support for Vue in the [Vue Docs Scaling up Guide](https://vuejs.org/guide/scaling-up/tooling.html#ide-support).

## Install Tailwind CSS with Vite

Setting up Tailwind CSS in a Vite project

1. Create your project

   Start by creating a new Vite project if you don’t have one set up already. The most common approach is to use [Create Vite](https://github.com/vitejs/vite/tree/main/packages/create-vite#readme).

   ```
   npm create vite@latest my-project -- --template vue
   cd my-project
   ```

2. Install Tailwind CSS

   Install **`tailwindcss`** and its peer dependencies, then generate your **`tailwind.config.js`** and **`postcss.config.js`** files.

   ```
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```

3. Configure your template paths

   Add the paths to all of your template files in your **`tailwind.config.js`** file.

   ```javascript
    /** @type {import('tailwindcss').Config} */
    export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
    }
   ```

4. Add the Tailwind directives to your CSS

   Add the @tailwind directives for each of Tailwind’s layers to your `./src/style.css` file.

   ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
   ```

5. Start your build process

   Run your build process with ``npm run dev``.

   ```terminal
   > npm run dev
   ```

6. Start using Tailwind in your project

   Start using Tailwind’s utility classes to style your content.

   ```vue
    <template>
        <h1 class="text-3xl font-bold underline">
            Hello world!
        </h1>
    </template>
   ```