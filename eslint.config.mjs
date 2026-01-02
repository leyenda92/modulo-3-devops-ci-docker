import next from "eslint-config-next";

export default [
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "coverage/**"
    ],
    rules: {
      "import/no-anonymous-default-export": "off"
    }
  },
  ...next
];
