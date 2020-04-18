# thw-data-rep
A small collaborative project by the UIUC chapter of The Hacker Within for exploring non-standard methods of understanding and representing data sets.

# Getting started
Newcomers to the project should read the [project overview](docs/Project_overview.pdf) for a more in-depth explanation of the goals of this project.

If you missed a meeting, you can [check the meeting minutes](docs/minutes).

# Contributing

At the very least, good branching practices should be followed to avoid clutter. This can be summarized as follows:

* Never work directly on `master`; this branch should be reserved for deployable code only
* Development should be done in the `develop` branch, where new features are created in an offshoot branch `<my-new-feature>` from `develop` then merged in; the `develop` branch will merged into `master` for new version releases.
* Make sure to use the `--no-ff` flag when merging branches to preserve the branch history (or just merge using a PR).
* Pull Requests should be used at least before any merge into `master` as a way to help document any changes or discussions; feel free to open a PR whenever you want though, for any reason, as more documentation is usually better.

For people who are interested, here is a useful link to [a very popular branching model](https://nvie.com/posts/a-successful-git-branching-model/).

# Running the app

To run the application, first [install npm](https://linuxize.com/post/how-to-install-node-js-on-ubuntu-18.04/).

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
