var items = ["axe", "shirt", "knife", ]
var finalString = "In my inventory, I have "

// for (var i = 0; i < items.length; i++){
//     var itemName = items[i];
//     finalString += itemName + " ";
// }

items.forEach(function(element){
    finalString += element + ",";
});

console.log(finalString)

