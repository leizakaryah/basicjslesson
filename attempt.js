//reverse array

var num = [ 1, 2, 3, 4, 5, 6, 7, 8 , 9, 10 ,];

var revNum = num.reverse();

for ( var i = 0; i < num.length ; i++){
    var newNum = revNum[i];
    if (i % 2 == 0){
        console.log(newNum);
        //build the new array calle num2
    }
}

var num2 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, ]

for (var i = 0; i = num2.length; i+=2) {
    console.log(num2[i])
}



//var num2 = [2 , 4 , 6 , 8 , 10]
//console.log(num2)