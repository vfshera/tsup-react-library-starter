module.exports = {
  "src/**/*.{ts,tsx}": "prettier --write",
  "src/**/*.{ts,tsx}": "eslint --fix -c .eslintrc.cjs ./src/**/*.{ts,tsx}",
};
