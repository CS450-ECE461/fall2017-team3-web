![image](https://travis-ci.org/CS450-ECE461/fall2017-team3-web.svg?branch=master)
# frontend-app

This README outlines the details of collaborating on this Ember application.

## Git Flow

The following is an outline of the steps we'll need to take to collaborate seamlessly on the project.

### Contributing
1. We will have 3 main branches: `develop`, `release`, and `master`.
2. When you go to add a feature, branch off of the latest `develop`. A good convention to use would be firstnameinit.feature-description. For example, George Boole might create a branch named `georgeb.login-styling-fix`
3. After you have finished that feature, create a pull request. After tagging the PR apropriately, choose one or more reviewers who know that part of the system well. Wait for their approval before merging the PR. If they have comments or merge conflicts, address those first and wait for approval. If you are addressing a specific issue, #reference that issue in the PR description
4. After merging and confirming, close any issues that the branch fixes.

### Issues
1. As we find bugs or identify new features, we'll create issues.
2. When you create an issue, apply the appropriate tags to it.
3. To take responsibility for fixing an issue, assign it to yourself before beginning work on it.

### Releasing
1. As we move on, the software will become more complete. Once the codebase on `develop` is ready to be staged, we will merge it to `release`. Here, we have a chance to make sure it is ready for prime time.
2. Only once we are certain it is ready, the code is merged to `master`. `master` will always contain only stable code

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd frontend-app`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
