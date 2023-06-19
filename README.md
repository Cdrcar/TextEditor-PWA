# Progressive Web Application: Text Editor
Text editor that runs in the browser following the PWA criteria

## [Table of Contents](#table-of-contents)

- [Description](#description)
- [Final Result](#final-result)
- [Deployment](#deployment)
- [Installation](#installation)
- [License](#license)
- [Contact Me](#contact)

## [Description](#table-of-contents)

This text editor app is a single-page application that runs in the browser and meets the PWA criteria. Additionally, it features a number of data persistence techniques that serve as redundancy in case one of the options is not supported by the browser. The application also functions offline.

To build this text editor, I implemented methods for getting and storing data to an IndexedDB database. I used a package called `idb`, which is a lightweight wrapper around the IndexedDB API. It features a number of methods that are useful for storing and retrieving data, and is used by companies like Google and Mozilla.

`This application`:

* Uses IndexedDB to create an object store and includes both GET and PUT methods

* Works without an internet connection

* Automatically saves content inside the text editor when the DOM window is unfocused

* Is bundled with webpack

* Creates a service worker with workbox that Caches static assets

* Uses babel in order to use async / await

* Has a generated `manifest.json` using the `WebpackPwaManifest` plug-in

* Can be installed as a Progressive Web Application


`Technologies used:`

- JavaScript
- Node.js
- Express.js
- NPM 
- Nodemon
- Webpack
- Service worker 
- Babel
- Manifest.json
- IndexedDB
- Heroku

## [Final Result](#table-of-contents)

![]()
![]()
![]()


## [Deployment](#deployment)

[Link to web app]()

## [Installation](#installation)

1. Install Node.js on your machine.
2. Clone the repository to your local system.
3. Open the repository in your preferred code editor.
4. Install the required dependencies by running the following command in the terminal:

> npm i

5. Start the app by running the following command in your terminal, this command will start both the server and the webpack development server concurrently, allowing you to see the application in your browser: 

> npm run start:dev

6. Once the development server is running, you should be able to access the application by opening your web browser and navigating to the specified URL: http://localhost:3000 .



## [License](#table-of-contents)

Licenced under:

[MIT](https://choosealicense.com/licenses/MIT)

![badge](https://img.shields.io/badge/license-MIT-green>)


## [Contact Me](#table-of-contents)

- [GitHub: cdrcar](https://github.com/cdrcar)

