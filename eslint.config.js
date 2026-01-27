import vue from 'eslint-plugin-vue';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';

export default [
  {
    files: ['**/*.{vue,js,ts,jsx,tsx}'],
    ignores: ['node_modules/**', 'dist/**', 'unpackage/**'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      vue,
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      'vue/multi-word-component-names': 'off',
      'vue/no-unused-vars': 'error',
      '@typescript-eslint/no-unused-vars': 'error',
      'no-console': process.env.VITE_ENV === 'production' ? 'error' : 'warn',
      'no-debugger': process.env.VITE_ENV === 'production' ? 'error' : 'warn',
    },
  },
];
