## FARV

Because this needs a name, we are calling it FARV**.  FastAI-React: Vision

This is a companion to https://github.com/gdoteof/fastai-vision-uvicorn-gunicorn-starlette-docker.

You will likely want both of these in conjuction, unless you just want API access to an image classifier.

### About

This repository is a React application with a simple purpose of receiving a single image from a user, and using a backend provided by the above repo, do an image classification.

Additionally, it is ready to be deployed to github pages.

You'll notice there is no branding or anything specific about the model the backend is hooked up to.  However, you will need to update the `exampleMapping` function to map the prediction labels from the backend server to the messages displayed to the user.

### Usage

This repository was built using the tutorial here: https://github.com/gitname/react-gh-pages

You should do the same, except replace the `src` folder with one similar to the one in this repository. 

When you deploy with `npm run deploy` for the first time, you will see there is a `gh-pages` branch with the built code.  You should never need to manually do anything with that branch.  Make your changes in the master branch and whenever you want to deploy to gh-pages, just run `npm run deploy`.

------------------------------------------------------------
everything below is copied from the create-react-app bootstrapped readme
------------------------------------------------------------

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

-----------------------------



** Maybe we will have FARTE and FARTA and FARC
