export default class Game {

    set1 = ["Brush", "Graze", "Kiss", "Skim"];
    set2 = ["Odd", "Perfect", "Prime", "Whole"];
    set3 = ["Oyster", "Plum", "Soy", "Xo"];
    set4 = ["Claw", "Fruit", "Hug", "Witness"];
    lives = 4;


    constructor() {
        // do nothing
    }

    execute(selection) {
        let r = this.validate(selection);
        if (r) {
            return r;
        } else {
            this.takeDamage();
            if (!this.lives) {
                this.die();
            }
        }
    }

    validate(selection) {
        if (this.set1.includes(selection[0]) && 
            this.set1.includes(selection[1]) &&
            this.set1.includes(selection[2]) &&
            this.set1.includes(selection[3])) return 1;
        if (this.set2.includes(selection[0]) && 
            this.set2.includes(selection[1]) &&
            this.set2.includes(selection[2]) &&
            this.set2.includes(selection[3])) return 2;
        if (this.set3.includes(selection[0]) && 
            this.set3.includes(selection[1]) &&
            this.set3.includes(selection[2]) &&
            this.set3.includes(selection[3])) return 3;
        if (this.set4.includes(selection[0]) && 
            this.set4.includes(selection[1]) &&
            this.set4.includes(selection[2]) &&
            this.set4.includes(selection[3])) return 4;
        return 0;
    }   

    takeDamage() {
        this.lives--;
    }

    die() {
        
    }
}