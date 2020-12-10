# Metronome

[![Netlify Status](https://api.netlify.com/api/v1/badges/6bf307f3-bb47-4482-92ae-f7d20ad900d5/deploy-status)](https://app.netlify.com/sites/anothermetronome/deploys)

## Todo

- [ ] *maybe* this: Users aren't always familiar with offline-first web apps. It can be useful to let the user know when the service worker has finished populating your caches (showing a "This web app works offline!" message) and also let them know when the service worker has fetched the latest updates that will be available the next time they load the page (showing a "New content is available once existing tabs are closed." message). Showing these messages is currently left as an exercise to the developer, but as a starting point, you can make use of the logic included in src/serviceWorker.js, which demonstrates which service worker lifecycle events to listen for to detect each scenario, and which as a default, only logs appropriate messages to the JavaScript console.
- [ ] UI improvements: *maybe* opacity changes with velocity
    - Reactive button colors on :active
- [ ] Get analytics going with reportWebVitals? Learn more about this stuff?
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
- [x] Refactor the timer code, bulletproofing/testing.
    - [x] Reorganize directory structure
    - [x] Refactor css styling, remove unecessaries
    - [x] Andrew broke it by setting it to zero
    - [x] Minimum beats = 1
    - [x] Sometimes the beat doesn't reset to -1
    - [x] Couldn't figure out how to unmount uncessary requestAnimationFrames.
    - [x] Use useRef in the places where you're using `setX...` just to access but not change state.
    - [x] First beat always seems to hang
- [x] Make it a progressive app using react docs rec, considering the various optimizations they recommend (like analyzing the bundle size)
- [x] Loads offline.
- [z] https://create-react-app.dev/docs/production-build
- [x] Icon for the download
    - https://web.dev/add-manifest/
- [x] Loading screen

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