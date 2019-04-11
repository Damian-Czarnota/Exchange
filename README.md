# Simple exchange-rate application

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8.

## Setup project

* Clone repository `git clone https://github.com/damian-czarnota/exchange.git`
* Go to project directory `cd exchange`
* Install dependency `npm i`
* Run `ng serve` for a dev server.
* Navigate to `http://localhost:4200/`

## Points of project

Project presents simple exchange rate.
It has only three exchanges, but it can has more in simply way - just need to add some dependencies in config object.

Application uses Public API Exchange [https://exchangeratesapi.io/], which is updated once a day.

Application uses localStorage to keep downloaded data from server to prevent redundant requests.
