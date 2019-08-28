module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ["airbnb", "plugin:prettier/recommended", "prettier/react"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["react"],
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "prettier/prettier": ["error", { singleQuote: true }],
    "react/jsx-filename-extension": "off",
    "react/jsx-max-props-per-line": [
      "error",
      { maximum: 1, when: "multiline" }
    ],
    "react/state-in-constructor": ["error", "never"]
  },
  parser: "babel-eslint"
};
