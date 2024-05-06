#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkanimation from "chalk-animation";

let Sleep =() => {
    return new Promise((res) => {
        setTimeout(res, 1000);
    });
};

async function wellcome() {
    let neonTitle = chalkanimation.rainbow(`\n Lets start the game \n`); // Animation start
    await Sleep() 
    neonTitle.stop();

}
await wellcome()

// using async with function so await work in function method 

 async function restart() {

    

let campare = await inquirer.prompt([
    {
        type: "list",
        name: "string1",
        message: (chalk.greenBright("Select a First Weapon!")),
        choices: ["Rock", "Paper","Scissors"]
    },
    {
        type: "list",
        name: "string2",
        message: (chalk.yellow("Select a second Weapon!")),
        choices: ["Rock", "Paper","Scissors"]
    }
])

//create a nested if and else if chain working

if (campare.string1 === campare.string2) {
    console.log(chalk.bgBlue("tie!"));
}
else if (campare.string1 === "Rock") {
    if (campare.string2 === "Scissors") {
        console.log(chalk.bgBlueBright("Rock wins!"));
    } else {
        console.log(chalk.bgCyan("Paper wins!"));
    }
}
else if (campare.string1 === "Paper"){
         if (campare.string2 === "Rock") {
            console.log(chalk.bgCyanBright("Paper wins!"));
         }
         else {
            console.log(chalk.bgGray("Scissors wins!"));
         }
}
else if (campare.string1 === "scissors"){
    if (campare.string2 === "Paper") {
        console.log(chalk.bgGreen("Scissors wins!"));
    } else {
        console.log(chalk.bgGreenBright("Rock wins!"));
    }
}
else if (campare.string1 === "Rock"){
        if (campare.string2 === "scissors") {
            console.log(chalk.bgGrey("Rock wins!"));
        } else {
            console.log(chalk.bgHex("Scissors wins!"));
        }
    }
    else if (campare.string1 === "Paper"){
            if(campare.string2 === "Scissors"){
                console.log(chalk.bgMagenta("Paper wins!"));
            }
            
            else{
                console.log(chalk.bgYellow("Rock wins!"));
            };

        }
    } 
 // create a do while loop for restarting the game
 do{
  await restart();
    let Restart = await inquirer
     .prompt(
        {
            type: "input",
            name: "name",
            message: "Do you want to play cotinue? press Y or N :",
            

        }
    )
    console.log("\n");
 
}
while(restart.name == 'y'|| restart.name == 'Y');                        
   

restart();