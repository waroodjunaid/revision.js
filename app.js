let score = 0
let totalScore = 5     
   alert ('Quiz')
let q1 = 'Is JS a programming language? '
let ans1 = 'yes';
let q2 = 'Did you understood what your professor taught?'
let ans2 = 'yes';
let q3 = 'Are you able your complete your assignments?'
let ans3 = 'yes';
let q4 = 'Did you fail any of your tests?'
let ans4 = 'no' ;
let q5 = 'Did you attend your classes punctually?'
let ans5 = 'yes' ;

let p1 = prompt(q1) ;
if (p1 === ans1)
score++


let p2 = prompt(q2) ;
if (p2 === ans2)
score++


let p3 = prompt(q3) ;
if (p3 === ans3)
score++


let p4 = prompt(q4) ;
if (p4 === ans4)
score++


let p5 = prompt(q5) ;
if (p5 === ans5)
score++

let per = score / totalScore * 100 ;

alert ('Percentage: ' + per + '%') ;













