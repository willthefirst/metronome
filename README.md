# Metronome

## Todo
- [ ] Refactor the timer code, bulletproofing/testing.
    - [ ] Reorganize directory structure
    - [x] Refactor css styling, remove unecessaries
    - [x] Andrew broke it by setting it to zero
    - [x] Minimum beats = 1
    - [x] Sometimes the beat doesn't reset to -1
    - [x] Couldn't figure out how to unmount uncessary requestAnimationFrames.
    - [x] Use useRef in the places where you're using `setX...` just to access but not change state.
    - [x] First beat always seems to hang
- [ ] Make it a progressive app using react docs rec, considering the various optimizations they recommend (like analyzing the bundle size)
    - [ ] Remember previous state
    - [ ] Icon for the download

- [ ] Reorganize with code-splitting recs from react docs
- [ ] UI improvements: *maybe* opacity changes with velocity
    - Reactive button colors on :active
- [x] Hook up range components
- [x] Review css modules with the new way that beats work.
- [x] Start writing tests. Helpful tutorial: https://www.freecodecamp.org/news/8-simple-steps-to-start-testing-react-apps-using-react-testing-library-and-jest/#basics
- [x] Hook up +/- buttons for bpm with tests.
- [x] Hook up +/- buttons for conductor
- [x] Write tests for conductor buttons etc.
- [x] Uninstall range-slider
- [x] aria labels for input ranges...get input ranges to actually work?
- [x] MVP: get beats working    
    - [x] Write a test for the start/stop button
    - [x] Use WebAudio to get a click going
        - [x] First, figure out how you'll want to work with audiocontext via play/pause.
        - [x] Play accent on every first beat
        - [x] Hook up bpm
        - [x] Current beat is highlitted visually
        - [x] Adding/subtracting beats works.
        - [x] Hook up gain nodes to sliders
- [x] Make a pretty UI
    - [x] Button styling
    - [x] Color themes

## Ideas
- Many color schemes?

## Known issues
    - `findDOMNode` issue with rc-slider gives [a warning](https://github.com/react-component/slider/issues/613)

## Eventual blogpost learnings
- Using flexbox and css grids
- Jest
- Gitflow (https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)

## Resources
- [Free Code Camp's tutorial on Jest](https://www.freecodecamp.org/news/8-simple-steps-to-start-testing-react-apps-using-react-testing-library-and-jest/#8-testing-http-request)
- [How to deal with Stale closures in React app] https://leewarrick.com/blog/react-use-effect-explained/

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
