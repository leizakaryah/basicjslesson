var num2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var newArray =[];


for (var i = num2[0]; i <= num2.length; i++) {
    if(i % 2 == 0){
        newArray.push(i);
        console.log(i);
    }
}

console.log(newArray);

