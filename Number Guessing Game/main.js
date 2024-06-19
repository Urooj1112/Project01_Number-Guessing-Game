#! /usr/bin/env node
import inquirer from "inquirer";
const randamNumber = Math.floor(Math.random());
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "please guess a number between 1-10"
    },
]);
if (answer.userGuessedNumber === randamNumber) {
    console.log("congtratulation! you guessed right number");
}
else {
    console.log("you guessed wrong number");
}
;
