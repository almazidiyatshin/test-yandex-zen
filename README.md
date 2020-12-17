# Test task for Yandex Zen

## Task
You are given a board of M × N cells. A cell can be in one of two states: 1 - alive, 0 - dead. Each cell interacts with eight neighbors. The rules are as follows:

- a living cell with fewer than two living neighbors dies;
- a living cell with two or three living neighbors survives;
- a living cell with more than three living neighbors dies;
- a dead cell with three living neighbors is reborn.

Write a program that will:
- randomly generate a starting state;
- be able to get it from a file (the method is selected through the launch parameters in the console);
- print a new board state to the console every second.

## How to use
There are two options:
1. Run `node bin/app.js` to launch the application with the generation of a random board.
[![asciicast](https://asciinema.org/a/DTCFTTI814cg81Lsd9zoGtlVB.svg)](https://asciinema.org/a/DTCFTTI814cg81Lsd9zoGtlVB)

2. Run `node bin/app.js /path-to-file` to launch the application and get the board from a file. The board in the file must be in this format `[[0, 0, 0], [0, 0, 0], [0, 0, 0]]`.
[![asciicast](https://asciinema.org/a/HLIgdn0bxkOYmCZeVW9W6Pyp7.svg)](https://asciinema.org/a/HLIgdn0bxkOYmCZeVW9W6Pyp7)
