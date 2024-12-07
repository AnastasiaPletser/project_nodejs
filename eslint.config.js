export default [
  {
    languageOptions: {
      ecmaVersion: 12,
      sourceType: "module",
      globals: {
        node: true, 
        console: true,
        require: true, 
      },
    },
    rules: {
      "no-console": "off", 
      "no-unused-vars": "warn", 
    },
  },
];
