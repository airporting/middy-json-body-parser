import babelParser from '@babel/eslint-parser';
import js from '@eslint/js';
import eslintPrettier from 'eslint-config-prettier';
import jest from 'eslint-plugin-jest';
// import json from 'eslint-plugin-json';

export default [
  { ignores: ['.idea/*', '.yarn/*', 'node_modules/*', 'coverage/*'] },
  js.configs.recommended,
  eslintPrettier,
  {
    files: ['**/*.js'],
    linterOptions: {
      noInlineConfig: true,
    },
    languageOptions: {
      parser: babelParser,
      ecmaVersion: 2023,
      sourceType: 'module',
      globals: {
        console: 'readonly',
        structuredClone: 'readonly',
        fetch: 'readonly',
        process: 'readonly',
        setTimeout: 'readonly',
        setInterval: 'readonly',
        clearInterval: 'readonly',
        clearTimeout: 'readonly',
      },
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          plugins: ['@babel/plugin-syntax-import-assertions'],
        },
      },
    },
  },
  {
    files: ['**/*.test.js'],
    plugins: { jest },
    languageOptions: {
      globals: {
        describe: 'readonly',
        test: 'readonly',
        expect: 'readonly',
        beforeAll: 'readonly',
        beforeEach: 'readonly',
        afterAll: 'readonly',
        afterEach: 'readonly',
      },
    },
  },
];
