# blessed-grid-layout

> A grid layout for blessed.

[![NPM version][npm-image]][npm-url]
[![NPM Total Downloads][npm-dt-image]][npm-url]\
[![Dependency Status][daviddm-image]][daviddm-url]
[![Greenkeeper badge][greenkeeper-image]][greenkeeper-url]\
[![semantic-release][semantic-release-image]][semantic-release-url]
[![commitizen][commitizen-image]][commitizen-url]\
[![Build Status][travis-image]][travis-url]
[![Coverage percentage][coveralls-image]][coveralls-url]

## Installation

```sh
npm install --save blessed-grid-layout
```

## Usage

```js
const GridLayout = require('blessed-grid-layout');
const blessed = require('blessed');

const parent = blessed.box(); // Can be a screen too, doesn't matter.

const grid = new GridLayout({
  columns: 2,
  rows: 1,
  parent
});

const leftBox = grid.add({
  column: 0,
  row: 0,
  height: 1,
  width: 1,
  element: blessed.box,
  options: {
    label: 'left'
  } // passed down to the element constructor.
});

const rightBox = grid.add({
  column: 0,
  row: 0,
  height: 1,
  width: 1,
  element: blessed.box,
  options: {
    label: 'right'
  }
});

const screen = blessed.screen();
screen.append(leftBox);
screen.append(rightBox);
screen.render();
```

## License

MIT © [Sven Lechner](https://zerotask.net)

[npm-image]: https://badge.fury.io/js/blessed-grid-layout.svg
[npm-url]: https://npmjs.org/package/blessed-grid-layout
[npm-dt-image]: https://img.shields.io/npm/dt/blessed-grid-layout.svg 
[travis-image]: https://travis-ci.org/SirWindfield/blessed-grid-layout.svg?branch=master
[travis-url]: https://travis-ci.org/SirWindfield/blessed-grid-layout
[daviddm-image]: https://david-dm.org/SirWindfield/blessed-grid-layout.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/SirWindfield/blessed-grid-layout
[coveralls-image]: https://coveralls.io/repos/SirWindfield/blessed-grid-layout/badge.svg
[coveralls-url]: https://coveralls.io/r/SirWindfield/blessed-grid-layout
[greenkeeper-image]: https://badges.greenkeeper.io/SirWindfield/blessed-grid-layout.svg
[greenkeeper-url]: https://greenkeeper.io/
[semantic-release-image]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-release-url]: https://github.com/semantic-release/semantic-release
[commitizen-image]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg
[commitizen-url]: http://commitizen.github.io/cz-cli/
