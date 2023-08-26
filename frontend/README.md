#### Frontend retrieves the data from backend and display it on an interactive map

&emsp;

## Technologies Used

- React\
  <https://react.dev/>
- React Router Dom\
  <https://reactrouter.com/en/main>
- Webpack\
  <https://webpack.js.org/>
- Mapbox GL\
  <https://www.mapbox.com/>
- Material UI\
  <https://mui.com/material-ui/getting-started/>
- Jest\
  <https://jestjs.io/>

&emsp;

## Folder Structure

```
├── src
│   ├── components                      // Reusable UI components
│   │   ├── CircularProgressWithLabel
│   │   ├── ***
│   │   ├── ***
│   │   ├── ***
│   ├── constainers                     // Connecting the state and actions to  components
│   ├── data                            // Static JSON data files
│   ├── images                          // Static image files
│   ├── pages                           // Top-level route components
│   │   ├── MapQuiz
│   │   ├── App.js                      // Root component
│   ├── stores                          // Global state management
│   ├── utils                           // Global utility functions and env.js parameter settings
│   │   ├── env.js
│   ├── index.js                        // Entry point
│   ├── index.css
├── public
│   ├── index.html
├── node_modules
├── webpack.config.js
├── babel.config.js
├── package.json
├── package-lock.json
└── .gitignore
└── README.md
```

&emsp;

### Available Scripts

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
