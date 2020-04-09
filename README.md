# thw-data-rep
A small collaborative project by the UIUC chapter of The Hacker Within for exploring non-standard methods of understanding and representing data sets.

# Getting started
Newcomers to the project should read the [project overview](docs/Project_overview.pdf) for a more in-depth explanation of the goals of this project.

If you missed a meeting, you can [check the meeting minutes](docs/minutes).

# Contributing

At the very least, good branching practices should be followed to avoid clutter. This can be summarized as follows:

* Never work directly on `master`; this branch should be reserved for deployable code only
* Development should be done in the `develop` branch, where new features are created in an offshoot branch `<my-new-feature>` from `develop` then merged in; the `develop` branch will merged into `master` for new version releases.
* Make sure to use the `--no-ff` flag when merging branches to preserve the branch history.
* Pull Requests should be used at least before any merge into `master` as a way to help document any changes or discussions; feel free to open a PR whenever you want though, for any reason, as more documentation is usually better.

For people who are interested, here is a useful link to [a very popular branching model](https://nvie.com/posts/a-successful-git-branching-model/).
