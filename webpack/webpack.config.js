
const path = require("path");

module.exports = {
  mode: "none", // "production" | "development" | "none"
  entry: "./src/script.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
};