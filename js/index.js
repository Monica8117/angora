var quotesOne=[
    "“Be yourself; everyone else is already taken.”",
    "“You only live once, but if you do it right, once is enough.”",
    "“So many books, so little time.”",
    "“A room without books is like a body without a soul.”",
]

var quotesTwo=[
    "― Oscar Wilde",
    "― Mae West",
    "― Frank Zappa",
    "― Marcus Tullius Cicero",
]

function demo() {
var box=Math.floor(Math.random()*quotesOne.length);
document.getElementById('testOne').innerHTML=quotesOne[box];
document.getElementById('testTwo').innerHTML=quotesTwo[box];
} 
