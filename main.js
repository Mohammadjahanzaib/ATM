"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var answer = await inquirer_1.default.prompt([
    {
        type: "input",
        name: "userID",
        message: "Please enter your userID."
    },
    {
        type: "list",
        name: "Accountype",
        choices: ["Saving", "Current"],
        message: "Select your AC Type."
    },
    {
        type: "list",
        name: "transcationtype",
        choices: ["Fastcash", "withdraw"],
        message: "Select your transacation",
        when: function (answer) {
            return answer.Accountype;
        },
    },
    {
        type: "list",
        name: "amount",
        choices: [1000, 2000, 5000, 10000],
        message: "select your amount",
        when: function (answer) {
            return answer.transcationtype === "Fastcash";
        },
    },
    {
        type: "number",
        name: "amount",
        message: "enter your amount",
        when: function (answer) {
            return answer.transcationtype === "withdraw";
        },
    }
]);
if (answer.userID) {
    var balance = Math.floor(Math.random() * 100000);
    console.log(balance);
    var enteramount = answer.amount;
    if (balance >= enteramount) {
        var remaining = balance - enteramount;
        console.log("your remaining balance is", remaining);
    }
    else {
        console.log("insufficient Balance");
    }
}
