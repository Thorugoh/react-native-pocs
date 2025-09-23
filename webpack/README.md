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
- **html-webpack-plugin** `^5.6.4` - Plugin to generate HTML files with bundled scripts

## 🛠️ Webpack Configuration

### Build Modes

* **mode** - This determines what kind of extra processing is done to your output file.
  * **none** - No extra processing at all. We are using this for the tutorial because it makes the output file cleaner for a human to read and understand.
  * **development** - Extra work done to add features that make debugging and tracing issues easier. Will be slower and result in larger file sizes. Designed only to be used during development.
  * **production** - Removes all unnecessary code and only produces the smallest and leanest file possible. Designed for your release build.

### Configuration Evolution & Experiments

This project has explored different webpack configurations to understand bundling behavior:

#### 1. **Initial Setup (CommonJS)**
- Started with CommonJS syntax (`require`/`module.exports`)
- **Issue**: Conflicted with `"type": "module"` in package.json
- **Solution**: Converted to ES module syntax

#### 2. **ES Module Migration**
```javascript
// From CommonJS
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = { ... };

// To ES Modules
import HtmlWebpackPlugin from "html-webpack-plugin";
export default { ... };
```

#### 3. **Different Build Modes Tested**
Based on the build outputs in `/dist`, the following configurations were experimented with:

| Configuration | Output File | Size | Description |
|--------------|-------------|------|-------------|
| **Full Bundle** | `main_full_bundle_547kb.js` | 547KB | Complete lodash library bundled |
| **Optimized Import** | `main_importing_function_7kb.js` | 7KB | Only specific lodash functions imported |
| **Production Build** | `main_production_71kb.js` | 71KB | Production mode with optimizations |
| **Current Build** | `main.js` | 394 bytes | Production mode with optimizations | Latest production configuration |

#### 4. **Plugin Integration**
- **HtmlWebpackPlugin**: Automatically generates HTML file with bundled script references
- **Template Support**: Uses `src/index.html` as template for generated HTML

### Current Configuration
- **Entry Point**: `./src/script.js`
- **Output**: `./dist/main.js`
- **Mode**: `production` (optimized for deployment)
- **Plugins**: HtmlWebpackPlugin for automated HTML generation
- **Module System**: ES Modules

### Key Learnings
1. **Bundle Size Impact**: Different import strategies dramatically affect bundle size (7KB vs 547KB)
2. **Module System Consistency**: Package.json `type` field must match configuration syntax
3. **Production Optimizations**: Production mode provides significant size reductions
4. **Plugin Benefits**: HtmlWebpackPlugin automates HTML generation and script injection
 