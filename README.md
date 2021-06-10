# Evaluate an Article with Natural Language Processing (NLP)


This project allows users to run Natural Language Processing (NLP) on texts, reviews, articles or blogs. 
When a user submits a URL of an article for example, the web page runs a sentiment analysis via [meaningCloud API](https://www.meaningcloud.com/products/sentiment-analysis).

## Build Tools
* HTML
* CSS
* JavaScript
* Node
* Express
* Webpack
* meaningcloud API
* Jest
* Workbox

## Configs

There're two webpack config files for both development mode (`webpack.config.dev.js`) and production mode (`webpack.config.prod.js` )

We also have the main `package.json` to manage dependencies


## Installation
Make sure Node and npm are installed from the terminal.
```
node -v
npm -v
```

1. Move to the project folder
```
cd <project directory>
```
2. Clone the repo
```
git clone <repo>
```
3. Install Node packages via npm
```
npm install
```
4. Install loaders and plugins
```
# Choose the necessary installation for your development mode
npm i -D @babel/core @babel/preset-env babel-loader babel-polyfill
npm i -D style-loader node-sass css-loader sass-loader
npm i -D clean-webpack-plugin
npm i -D html-webpack-plugin
npm i -D mini-css-extract-plugin
npm i -D optimize-css-assets-webpack-plugin terser-webpack-plugin
```
5. Sign up for an API key at [meaningcloud.com](https://www.meaningcloud.com/developer/create-account)

6. Configure environment variables using dotenv package
	1. Install the dotenv package
	```
	npm install dotenv
	```
	2. Create a new `.env` file in the root of your project
	3. Fill the `.env` file with your API key like this:
	```
	API_KEY=**************************
	```
	
## Run project

You can run in development or production mode.

### Run in development mode

To start the webpack dev server at port 8080

Command | Action
:------------: | :-------------:
`npm run build-dev` | Build project via `webpack-dev-server`

### Run in production mode
Generate the dist files and then start server at port 8081

Command | Action
:------------: | :-------------:
`npm run build-prod` | Build project
`npm start` | Run project

And then open your browser at http://localhost:8081/

## Offline Functionality

This project have service workers set up in webpack to provide the offline functionality of our app.

## Testing

Testing is done via Jest. To run test, use the command 

`npm test`

## License

License (MIT)