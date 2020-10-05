// var currentHealth = 50;
// var healAmount = 10;

// function heal(){
//     currentHealth =+ healAmount;
//     // function nested(){

//     // }
// }

// heal(); // currentHealth = 60

// var func = function heal(){
//     currentHealth =+ healAmount;
// }

// function parameters
// function heal(healAmount = 10) {
//     currentHealth += healAmount;
// }

// heal(); //60
// heal(40); //100


// function return statements

var maxHealth = 100;
var currentHealth = 50;

function heal(healAmount){
    var newHealth = currentHealth + healAmount;
    currentHealth = newHealth > 100 ? maxHealth : newHealth;
    return (currentHealth/maxHealth) * 100;
}
var result = heal()
result = heal(50)

function calculatePercent(dividend, divisor){
    return (dividend/divisor)*100;
}



