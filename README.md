# Gaia Demo App

Demo app built using the latest tools like React, Redux, ES6, Webpack, Enzyme, Mocha, Chai.

![](screenshot.png)

## Getting started

1. Clone repository `https://github.com/sahat/gaia000.git`
2. Enter project directory `cd gaia000`
3. Install dependencies `npm install`

## Project Structure

The project structure is loosely based on [react-boileprlate](https://github.com/mxstbr/react-boilerplate) and [Mega Boilerplate](http://megaboilerplate.com/)

```
.
├── app/                       # React app directory
│   ├── actions/               # Redux actions
│   ├── assets/                # Fonts, images, vendor stylesheets (e.g. Bootstrap)
│   ├── components/            # React components
│   ├── reducers/              # Redux reducers
│   ├── store/                 # Redux store configuration
│   ├── main.js                # React app entry file
├── test/                      # Unit tests
├── index.html                 # Where React app is rendered
├── devServer.js               # Development server + Gaia API
└── package.json               # NPM Dependencies and scripts
└── webpack.config.json        # Webpack loader
```

## Scripts

All scripts are run with `npm run [script]`, for example: `npm run test`.

* `start` - start development server, try it by opening `http://localhost:3000/`
* `test` - run all tests (with Mocha, Enzyme and Chai)

## Tests

All unit tests are located in the `test` directory, categorized by Redux type, e.g. `actions`, `components`.
