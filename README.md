# Feed U

FeedU is a fully-featured Mobile Web app for Home Cooked Food Delivery developed primarily using jQuery Mobile, jQuery and Javascript, as part of a course taken in Mobile User Experience. It also involves other developer features such as Live Reload and Task Automation using the Grunt Task Runner.

You can find the app hosted [here](https://idl99.github.io/feed-u/pages/home.html).

## Prerequisites
- Node.js

## Setup

Run the following to install project-level dependencies

```
npm install
```

and the following to install global dependencies

```
npm install -g sass browserify grunt-cli
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
        <td> Grunt
        <td> task runner that builds the project
    </tr>
<table>


## Run

To run the project, simply run the following command

```
npm run dev
```

The above command will execute a Grunt task that 
- sets up a static file server which supports live reloads
- watches for file changes and rebuilds the project (compile SASS, bundle JS, sync dist folder etc.)
