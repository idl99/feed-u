# Feed U

## Prerequisites
- Node.js

## Setup

Run the following to install project-level dependencies

```
npm install
```

and the following to install global dependencies

```
npm install -g sass browserify watchify
```

<table>
    <tr>
        <th> Dependency
        <th> Description
    </tr>
    <tr>
        <td> SASS
        <td> CSS preprocessor
    <tr>
        <td> Browserify
        <td> a tool that bundles static files together
    </tr>
    <tr>
        <td> Watchify
        <td> runs browserify in watch mode
    </tr>
<table>


## Run

To run the project, simply run the following command

```
npm run dev
```

The above command will run an Express (Node.js) app to serve static files, SASS CLI in watch mode to compile CSS, and Browserify in watch mode (Watchify) to bundle JS files.

Each of those commands may be executed separately using ```npm run server```, ```npm run compile-css```, and ```npm run bundle-js``` respectively.