This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

The Tom Spaulding Home Page.
This is the site I use to run experiments, store various bookmarks/tools, try new frameworks, and generally anything 
I would like to show off to a client or in an interview.

The site can be found live at [tomspaulding.co.nf](http://tomspaulding.co.nf/)

## Table of Contents

- [Installation](#installation)
- [Running](#running)
- [Current Tech Used](#current-tech-used)
- [Reminders](#reminders)
- [API Used](#api-used)


## Installation

Installation Should be short and sweet:

* `git clone` obviously one needs to pull the repo
* `npm install` navigate to root directory and npm install, if you don't have npm then you need to install node

## Running

As of right now just simply

* 'npm start' to start the app locally
* 'npm run production' to create a production build inside dist folder inside the root directory

## Current Tech Used

* [React JS](https://facebook.github.io/react/)
* [Code Mirror](https://codemirror.net/)
* [Bootstrap](http://getbootstrap.com/)
* [ThreeJS](https://threejs.org/)

### Reminders
 
* ThreeJS cannot be modularized, so currently instead of being added via webpack the index.html contains the script src call instead
* Cors error with my originally version of parsing RSS feeds. So until I can update, site is just using an iframe pointing to feedly for now.

#### API Used

* [Open Weather Map](https://openweathermap.org/api)
* [Unsplash IT](https://unsplash.it/)


