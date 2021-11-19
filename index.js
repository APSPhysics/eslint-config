/* eslint-disable max-len */
// eslint-disable-next-line functional/immutable-data
module.exports = {
  extends: [
    "airbnb",
    "plugin:jsx-a11y/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:functional/recommended",
    // Should always be last. Enables eslint-plugin-prettier and eslint-config-prettier.
    // This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    "plugin:prettier/recommended",
  ],
  plugins: ["functional", "jsx-a11y", "prettier", "react-hooks"],
  rules: {
    "@typescript-eslint/explicit-function-return-type": "off", // This rule prevents you from letting React component return types be inferred.
    "@typescript-eslint/no-shadow": ["error"],
    "@typescript-eslint/no-use-before-define": ["error"],
    "functional/functional-parameters": "off", // This rule breaks things like the useEffect, which takes a callback with no parameters.
    "functional/no-conditional-statement": "off", // if statements are useful and quite nice for conditional component rendering logic.
    "functional/no-expression-statement": "off", // This rule causes an error with ReactDOM.render()
    "functional/no-mixed-type": "off", // This rules doesn't allow you to create a type alias for a component that mixes methods and values.
    "functional/no-return-void": "off", // In React, you are often returning void. i.e. useState setters
    "functional/no-try-statement": "off", // What's wrong with a try/catch? They are very useful with async/await.
    "functional/prefer-readonly-type": "off", // Off for now. Do we want to have to annotate everything with readonly? To be discussed.
    "functional/prefer-type-literal": "off", // Interfaces are fine. Some people prefer to extend.
    "import/prefer-default-export": "off",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        ts: "never",
        tsx: "never",
      },
    ],
    "max-len": ["warn", { code: 90 }],
    "no-console": ["warn", { allow: ["warn", "error"] }],
    "no-shadow": "off",
    "no-use-before-define": "off",
    "prettier/prettier": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react-hooks/rules-of-hooks": "error",
    "react/function-component-definition": "off",
    "react/jsx-filename-extension": ["warn", { extensions: [".tsx"] }],
    "react/prop-types": "off",
  },
  settings: {
    "import/resolver": {
      typescript: {},
    },
  },
};
