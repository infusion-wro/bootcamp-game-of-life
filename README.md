# bootcamp-game-of-life

Game of life bootcamp task.

## Goals

- Get familiar with:
  - TDD
  - Basic ES6
  - Node and npm
  - JS testing tools
  - Babel transpiler
- Have fun

## Task

Implement the survive function that will calculate the next state of a cell based on the current state and number of neighbours according to the rules of [Conway's Game of Life](https://en.wikipedia.org/wiki/Conway's_Game_of_Life).

The rules are as follows:
- Any live cell with fewer than two live neighbours dies, as if caused by under-population.
- Any live cell with two or three live neighbours lives on to the next generation.
- Any live cell with more than three live neighbours dies, as if by over-population.
- Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.


_Dos:_
- Modify the body of the survive function
- Add test cases
- Add any helper classes/functions/variables in the survive module

_Don'ts:_
- Remove or modify existing test cases
- Modify the survive function signature and exports
- Implement code without writing a test first

## Running

- Clone this repository
- Open terminal, cd into the projects directory and run `npm install`
- Run `npm test` to start mocha in watch mode
