import inquirer from 'inquirer'
let answer=await inquirer.prompt([
    {
        type:"input",
        name:"userID",
        message:"Please enter your userID."
    },
    {
        type:"list",
        name:"Accountype",
        choices:["Saving","Current"],
        message:"Select your AC Type."
    },
    {
        type:"list",
        name:"transcationtype",
        choices:["Fastcash","withdraw"],
        message:"Select your transacation",
        when(answer){
            return answer.Accountype
        },
    },
    {
        type:"list",
        name:"amount",
        choices:[1000,2000,5000,10000],
        message:"select your amount",
        when(answer){
            return answer.transcationtype==="Fastcash"
        },
    },
    {
        type:"number",
        name:"amount",
        message:"enter your amount",
        when(answer){
            return answer.transcationtype==="withdraw"
        },
    }
])
if(answer.userID){
    let balance = Math.floor(Math.random()*100000)
    console.log(balance)
    let enteramount=answer.amount
    if (balance>=enteramount){
        let remaining=balance-enteramount
        console.log("your remaining balance is", remaining)
    }else{
        console.log("insufficient Balance")
    }
}