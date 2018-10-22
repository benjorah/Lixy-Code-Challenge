# Lixy-Code-Challenge
Prime number generator: Javascript coding challenge for Lixy

## Getting Started
Clone this project to your system.
Alternatively you can visit the liver version of this project on https://benjorah.github.io/Lixy-Code-Challenge/


### Prerequisites

To work on this project and to serve this project locally on your system, you need to have Node.js installed on your local machine as well as npm.
These can be gotten from https://nodejs.org


## Installing
Navigate into the project directory of the cloned project and run the command below
```
npm install
```
This sets up all necessary libraries needed for the project to run.

To start up the development server run the following commnad, 

```
npm run start:dev
```
This starts up the server for the hmtl file of the project, the html for the jasmine test, the watchers for changes to files for jasmine tests, 
transpiling es6 and watching for project file changes.

To serve the project html alone (without watchers for test and transpiling) run the following command

```
npm run serve
```


## Running the tests

When the development servers are started with the following command

```
npm run start:dev
```
The automated test html sheet is served automatically too
If you want to serve only the test sheet run

```
npm run serve:test
```

This also watches for changes in the js file in /dev and in the spec file in /spec