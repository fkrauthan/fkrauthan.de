fkrauthan.de
============

This repository contains the wintersmith project files to build the fkrauthan.de website.

[![wercker status](https://app.wercker.com/status/926ecc17dfd963950cac17e2a6164c84/m/master "wercker status")](https://app.wercker.com/project/byKey/926ecc17dfd963950cac17e2a6164c84)


Installation
------------

To be able to build the website you have to install `nodejs` and `npm`. After that please run the `npm install` from the project root directory.


Developing
----------

To start a development server just run the following command from the project root: `./wintersmith watch`

It automaticly starts a development server on port `2014` so you can now open a browser on url `http://localhost:2014` to watch the site. As soon as you make changes and reload the page the site get's recompiled on the fly.


Building
--------

To build the site you just have to run `./wintersmith build` from the project root. It automaticly creates a `build/` folder with all compiled and copied files.


Publishing
----------

To publish the site just follow the following two steps:

1. Build the project
1. Rsync the `build/` folder content to the production server.
