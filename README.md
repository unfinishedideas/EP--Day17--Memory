Mkdir src and dist inside root
touch src/index.html src/styles.css src/main.js
touch .eslintrc
touch webpack.config.js :

Touch .gitignore
node_modules/
.DS_Store
dist/

npm init -y


npm install webpack@4.39.3 --save-dev --save-exact
npm install webpack-cli@3.3.8 --save-dev
npm install html-webpack-plugin@3.2.0 --save-dev
npm install clean-webpack-plugin@3.0.0 --save-dev
npm install uglifyjs-webpack-plugin@2.2.0 --save-dev
npm install webpack-dev-server@3.8.0 --save-dev
npm install eslint@6.3.0 --save-dev
npm install eslint-loader@3.0.0 --save-dev
npm install style-loader@1.0.0 css-loader@3.2.0 --save-dev


package.json should read:
{
  "name": "nameMe",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "build": "webpack --mode development",
    "start": "npm run build; webpack-dev-server --open --mode development",
    "lint": "eslint src/*.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "clean-webpack-plugin": "^3.0.0",
    "css-loader": "^3.2.0",
    "eslint": "^6.3.0",
    "eslint-loader": "^3.0.0",
    "html-webpack-plugin": "^3.2.0",
    "style-loader": "^1.0.0",
    "uglifyjs-webpack-plugin": "^2.2.0",
    "webpack": "4.39.3",
    "webpack-cli": "^3.3.8",
    "webpack-dev-server": "^3.8.0"
  }
}


webpack.config.js should read:
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'eval-source-map',
  devServer: {
    contentBase: './dist'
  },

  plugins: [
    new UglifyJsPlugin({ sourceMap: true }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Ping Pong',
      template: './src/index.html',
      inject: 'body'
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader"
      }
    ]
  }
};


src/main.js should read:
import './styles.css'




.eslintrc should read:
{
    "parserOptions": {
        "ecmaVersion": 2017,
        "sourceType": "module"
    },
    "extends": "eslint:recommended",
    "env": {
      "es6": true,
      "browser": true,
      "jquery": true
    },
    "rules": {
        "semi": 1,
        "indent": ["warn", 2],
        "no-console": "warn",
        "no-debugger": "warn"
    }
}
