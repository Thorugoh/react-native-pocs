# Webpack Study

A simple webpack configuration example demonstrating basic bundling concepts and different build modes.

## 📁 Project Structure

```
webpack/
├── src/
│   └── script.js          # Main JavaScript entry point
├── dist/                  # Generated build output (created after build)
│   └── main.js           # Bundled JavaScript file
├── index.html            # HTML file that loads the script
├── package.json          # Project dependencies and scripts
├── webpack.config.js     # Webpack configuration file
└── README.md            # Project documentation
```

## 📦 Dependencies

### Production Dependencies
- **lodash** `^4.17.21` - Utility library used in the demo script

### Development Dependencies
- **webpack** `^5.101.3` - Module bundler
- **webpack-cli** `^6.0.1` - Command line interface for webpack

## 🛠️ Webpack Configuration

### Build Modes

* **mode** - This determines what kind of extra processing is done to your output file.
  * **none** - No extra processing at all. We are using this for the tutorial because it makes the output file cleaner for a human to read and understand.
  * **development** - Extra work done to add features that make debugging and tracing issues easier. Will be slower and result in larger file sizes. Designed only to be used during development.
  * **production** - Removes all unnecessary code and only produces the smallest and leanest file possible. Designed for your release build.

### Current Configuration
- **Entry Point**: `./src/script.js`
- **Output**: `./dist/main.js`
- **Mode**: `none` (for educational purposes)
 