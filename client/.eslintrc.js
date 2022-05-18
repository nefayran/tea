module.exports = {
  extends: [
    'plugin:import/typescript',
    'airbnb',
    'airbnb-typescript'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
   project: './tsconfig.json'
  },
  rules: {
    "import/extensions": 0,
    "@typescript-eslint/default-param-last": 0,
  },
};
