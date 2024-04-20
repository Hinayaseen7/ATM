import inquirer from "inquirer";
let myBalance = 10000; // dollar
let myPin = 192005;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin'",
        type: "number"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("correct pin code!!!");
    let operationsAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select options",
            type: "list",
            choices: ["withdraw", "check balance"]
        }
    ]);
    console.log(operationsAns);
    if (operationsAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your ammount",
                type: "number"
            }
        ]);
        myBalance -= amountAns.amount;
        console.log("your remaining balance is : " + myBalance);
    }
    else if (operationsAns.operation === "check balance") {
        console.log("your balance is: " + myBalance);
    }
}
else {
    console.log("incorrect pin number");
}
