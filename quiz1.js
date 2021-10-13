console.log("HEY YO!! I Am Harshith");
console.log(".......................");

var readlinesync = require('readline-sync');
var userName = readlinesync.question("What's Your Name? ");
console.log();
console.log("...........................");
console.log("Welcome To My World",userName);
console.log("...........................");
console.log();
var score = 0;

var questions = [{
  question: "Whats my zodiac sign ? ",
  answer: "gemini"},

  {question: "Where I am staying now ? ",
  answer: "bangalore"},

  {question: "Which is the sport do I like the most ? ",
  answer: "football"},

  {question: "Who is my favorite football player? ",
  answer:"messi"},
  
  {question: "Whats my favorite TV show? ",
  answer: "breaking bad"}];

function myQuiz(question, answer) {
  var userAns = readlinesync.question(question);

  if(userAns.toLocaleLowerCase() === answer){
    console.log("Hey Yo!! Your answer is right.....");
    score = score+1;
    console.log()
  } else{
    console.log("sorry dude, thats not the right answer .The right answer is :", answer)
  };
 
  console.log("Your current score is : ",score);
  console.log("....................................")
  console.log()
}


function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    myQuiz(currentQuestion.question, currentQuestion.answer)
  }
}

game()
console.log("Hey Yooo, Your final score is : ",score);