import eslintPluginAstro from 'eslint-plugin-astro';
import tseslint from 'typescript-eslint';

export default [
  {
    ignores: ['dist/', '.astro/'],
  },

  ...tseslint.configs.recommended,

  ...eslintPluginAstro.configs['flat/recommended'],

  ...eslintPluginAstro.configs['flat/jsx-a11y-recommended'],

  {
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],

      'astro/jsx-a11y/no-noninteractive-element-interactions': 'off',
    },
  },
];