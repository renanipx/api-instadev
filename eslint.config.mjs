const globals = require("globals");  // Utilize require para carregar módulos em arquivos de configuração do ESLint

module.exports = {
  overrides: [
    {
      files: ["**/*.js"],
      parserOptions: {
        sourceType: "commonjs"
      }
    },
    {
      files: ["**/*.js"],
      env: {
        node: true
      },
      globals: globals.node
    }
  ],
  rules: {
    'no-param-reassign': 'off',
    'camelcase': 'off',  // ':' ao invés de ' ' e falta vírgula antes de 'pluginJs.configs.recommended'
    'no-unused-vars': ['error', { argsIgnorePattern: 'next' }],
    'max-len':['error',{code:80}]
  },
  extends: [
    'plugin:js/recommended'  // A extensão recommended deve ser adicionada desta forma
  ]
};