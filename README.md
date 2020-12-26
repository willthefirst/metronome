# Metronome [![Netlify Status](https://api.netlify.com/api/v1/badges/6bf307f3-bb47-4482-92ae-f7d20ad900d5/deploy-status)](https://app.netlify.com/sites/beatsperminute/deploys)

## Production website

[www.beatsperminute.click](www.beatsperminute.click)

## Development

Install dependencies: `yarn install`  
Run locally: `yarn start`

When committing, use [git flow methodology](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow) (and consider installing the [git flow package](https://github.com/nvie/gitflow/wiki/Installation) for ease-of-use).

## Todo

-   [ ] Refactor that big ol Metronome file
-   [ ] Make it stupid clear that people can install as an app
    -   [ ] _maybe_ this: Users aren't always familiar with offline-first web apps. It can be useful to let the user know when the service worker has finished populating your caches (showing a "This web app works offline!" message) and also let them know when the service worker has fetched the latest updates that will be available the next time they load the page (showing a "New content is available once existing tabs are closed." message). Showing these messages is currently left as an exercise to the developer, but as a starting point, you can make use of the logic included in src/serviceWorker.js, which demonstrates which service worker lifecycle events to listen for to detect each scenario, and which as a default, only logs appropriate messages to the JavaScript console.
-   [ ] Spacebar keybinding
-   [ ] UI improvements: _maybe_ opacity changes with velocity
    -   Reactive button colors on :active
-   [ ] Get analytics going with reportWebVitals? Learn more about this stuff?

## Ideas

-   Many color schemes?

## Known issues

    - `findDOMNode` issue with rc-slider gives [a warning](https://github.com/react-component/slider/issues/613)

## Eventual blogpost learnings

-   Using flexbox and css grids
-   Jest
-   Gitflow (https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)
-   Using gitflow for the first time
-   Redescribing how web audio clock works

## Resources

-   [Free Code Camp's tutorial on Jest](https://www.freecodecamp.org/news/8-simple-steps-to-start-testing-react-apps-using-react-testing-library-and-jest/#8-testing-http-request)
-   [How to deal with Stale closures in React app] https://leewarrick.com/blog/react-use-effect-explained/
