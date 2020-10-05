var gameCharacter = {
    name: "Lei Zakaryah",
    class: "Human",
    //getter and setter:
    get title(){
        return this.name + " the " + this.class
    },
    set maxHealth (h){
        this.health = h;
    },
    // the end. bow.
    health: 100,
    xPos : 0,
    items : ["apple", "club", "potion", ],
    move : function(x){
        this.xPos += x;
    }
};

var name = gameCharacter.name
// var name = gameCharacter['name'];
gameCharacter.items = ["piaya", "pandesal", "cotton candy",]; // u can change it anytwime
gameCharacter.move(12);
var x = gameCharacter.xPos;
gameCharacter.yPos = 0;
gameCharacter.move = function(x,y){
    this.xPos += x;
    this.yPos += y;
}
gameCharacter.title;
gameCharacter.maxHealth = 150;


/* note:

var i = 5 
var j = i
i = 10 // j's 5 doesnt change,common sense

var gc = gameCharacter
gc.name = "alksdna" >>>> this will also change the name of the character */


function gameCharacter (name, xPos, health){
    this.name = name;
    this.xPos = xPos;
    this.health = health;
    this.move = function(x){
        this.xPos += x;
    }
    this.class = "Human";
}

var gc1 = new gameCharacter("Lei Zakaryah", 0, 100);
gc1.yPos = 2; // yPos = 2
var name = gc1.name;
gc1.health = 150;
gc1.move(15);

var gc2 = new gameCharacter("Mao", 1, 1000);
//gc.yPos; >>>> reference error

//object prototype:
gameCharacter.prototype.class = "Human";
gc1.class = "asdasdA" // "asdasdA"
gc2.class; //human

var heal = function (amount){
    this.health += amount;
}

gameCharacter.prototype.heal = heal;
gc1.heal(12);
gc2.heal(45);





