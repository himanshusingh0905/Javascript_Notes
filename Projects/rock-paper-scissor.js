"use strict"

// for input:
const readline = require('readline');
// Let's create an array for storing outcomes ( rock, paper, scissor)
let outcomes = [`rock:
    _______
---'   ____)
      (_____)
      (_____)
      (____)
---.__(___)
`,

`paper:
    ________
---'   _____)____
          _______)_
          _________)
         _________)
---.____________)

`,

`scissor:
     _
    | |
---'  |________
         ______)_
       __________)
      (____)
---.__(___)

`]


// Logic:
console.log("******    Welcome to the Game of Rock-Paper-scissor     *******");
let user_choice = prompt("Enter your choice: 0 for rock, 1 for paper, 2 for scissor : ")