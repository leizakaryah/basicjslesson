var alpha = [1,2,3,4,5,6,7,8,9,10];
var brac = [];

for (var i = alpha[0]; i <= alpha.length; i++){
    if (i % 2 == 0){
        brac.push(i);
        console.log(i);
    }
}

console.log(brac);