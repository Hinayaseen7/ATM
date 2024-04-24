#! /usr/bin/env node
import inquirer from "inquirer"

let myBalance = 10000; // dollar

let myPin = 192005;

 let pinAnswer =  await inquirer.prompt(
    [
        {
            name: "pin",
            message: "enter your pin'",
            type: "number"
        }
    ]
 );

 if (pinAnswer.pin === myPin){
    console.log("correct pin code!!!");

    let operationsAns = await inquirer.prompt(
        [
            {
                name:"operation",
                message:"please select options",
                type:"list",
                choices:["withdraw" , "fast cash"  , "check balance"]
            }
        ]
    );
console.log(operationsAns);

if (operationsAns.operation === "withdraw"){
        let amountAns = await inquirer.prompt(
            [
                {
                    name: "amount",
                    message: "enter your ammount",
                    type: "number"
                }
            ]
        );
        if(amountAns.amount > myBalance){
        console.log("Insufficient balance")
        
    }
        else {
            myBalance -= amountAns.amount;

        console.log("your remaining balance is : " + myBalance)
        }


    } 
    else if (operationsAns.operation === "fast cash"){
        let fast = await inquirer.prompt(
            [
                {
                    name: "fastcash",
                    message: "select the amount which you withdrawl",
                    type:"list",
                    choices: [1000, 2000, 5000, 10000]

                }
            ]
        );
        myBalance -= fast.fastcash;
        console.log(`you have successfully withdrawal ${fast.fastcash} \n your remaining balance is ${myBalance}`)

    }

     else if (operationsAns.operation === "check balance"){
     console.log("your balance is: " + myBalance)
    }
 }

 else {
    console.log("incorrect pin number");
 }








