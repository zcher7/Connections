export default class Game {

    private set1 = ["Brush", "Graze", "Kiss", "Skim"];
    private set2 = ["Odd", "Perfect", "Prime", "Whole"];
    private set3 = ["Oyster", "Plum", "Soy", "Xo"];
    private set4 = ["Claw", "Fruit", "Hug", "Witness"];
    private lives = 4;


    constructor() {
        // do nothing
    }

    public validate(selection: string[]) {
        if (this.set1.includes(selection[0]) && 
            this.set1.includes(selection[1]) &&
            this.set1.includes(selection[2]) &&
            this.set1.includes(selection[3])) return true;
        if (this.set2.includes(selection[0]) && 
            this.set2.includes(selection[1]) &&
            this.set2.includes(selection[2]) &&
            this.set2.includes(selection[3])) return true;
        if (this.set3.includes(selection[0]) && 
            this.set3.includes(selection[1]) &&
            this.set3.includes(selection[2]) &&
            this.set3.includes(selection[3])) return true;
        if (this.set4.includes(selection[0]) && 
            this.set4.includes(selection[1]) &&
            this.set4.includes(selection[2]) &&
            this.set4.includes(selection[3])) return true;
        return false;
    }   

    public takeDamage() {
        this.lives--;
    }

    public die() {
        
    }
}