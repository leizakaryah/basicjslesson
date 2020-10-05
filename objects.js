var GameChar = {
    name: "zak",
    pos:10,
    health:100,
    move: function(byAmount){
        this.pos += byAmount;
    }
}


GameChar.name;
GameChar.health = 35;
GameChar.move(25);



console.log(GameChar.health)