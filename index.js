var readlineSync = require("readline-sync");
const chalk = require('chalk');
 
var score = 0;
const warning = chalk.keyword('orange');
const violet = chalk.keyword('violet');
const lastMessage= chalk.keyword('yellow');

console.log(chalk.bold.green("HEY,<*-*>"));
var userName = readlineSync.question(chalk.bold.white.bgRed("What's your name?  \n"));

console.log( chalk.bold.green("WELCOME ") + chalk.green(userName.toUpperCase()) + "!!!");
console.log(chalk.blue("~~~~~~~~~~~~~~~~~~~"));
console.log("      ");

console.log(warning("Let's Play!! Quick Quiz about,\nHow much you know about me???\n"))


function play(question, answer){
  var userAnswer = readlineSync.question(question);
  if(userAnswer.toLowerCase() === answer.toLowerCase()){
    console.log(chalk.green("You are right!!! :-) "));
    score = score + 1;
  }
  else{
    console.log(chalk.red("You are wrong :-( "))
    score = score - 1;
  }
  console.log("current score : " + score);
  console.log(violet("---------------------\n"))
}

var questions = [{
question: chalk.bold.red("1.Where do I live?\n "),
answer: "Shimoga"
},
{
 question:chalk.bold.red("2.What's my favorite game?\n "),
answer: "Cricket"
},
{
 question:chalk.bold.red("3.What's my favotite color? \n"),
answer: "Black"
},
{
 question:chalk.bold.red("4.What's my age?\n "),
answer: "24"
},
];

for(var i=0; i < questions.length; ++i)
{
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
}
console.log(lastMessage("YAY!! your score is : " + score));