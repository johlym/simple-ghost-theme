var myArray = ['brought to you by a sneeze and a fart', 
               'brought to you by the number Q', 
               'brought to you by smoked gouda', 
               'NaN',
               'brought to you by the opposite of fun: not fun',
               'brought to you by a cracked windshield',
               'brought to you by a number 3 with cheese',
               'brought to you by a good old fashioned kick in the ass',
               'don\'t worry, he\'ll be in jail soon',
               'they say I can get out soon',
               'you put the lotion in the basket, yeah?',
               'do not interru^C',
               'a guy walks into a barre',
               'the cutting edge hurts',
               'a good pun is its own reword',
               'whacky inflatable tube man'];
var rand = Math.floor(Math.random() * myArray.length);
var quote = myArray[rand];
function showquote(){
    document.getElementById('quote').innerHTML = quote;
    document.getElementById('quote2').innerHTML = quote;

}
showquote();