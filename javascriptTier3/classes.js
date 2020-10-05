class gameCharacter{
    constuctor (name, xPos, health){
        this.name = name;
        this.xPos = xPos;
        this.health = health;
    }

    move(x){
        this.xPos += x;
    }
}

class humanCharacter extends gameCharacter {
    constuctor(name, xPos, health){
        super (name, xPos, health);
        this.classification = "Human";
    }
}


var gc1 = new gameCharacter('Lei', 0, 100);
gc1.move(10);
gc1.name;

var hc1 = new gameCharacter('Mao', 1, 1000);
