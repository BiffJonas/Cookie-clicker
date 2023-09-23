class upgrade {
    constructor(name, amount, cost, cookiesPerSecond) {
        this.name = name;
        this.amount = amount;
        this.cost = cost;
        this.cookiesPerSecond = cookiesPerSecond;
    }
}


const cursorUpgrade = new upgrade("Cursor", 0, 10, 1);
const grandmaUpgrade = new upgrade("Grandma", 0, 100, 10);
const bakeryUpgrade = new upgrade("Bakery", 0, 1000, 100);
const factoryUpgrade = new upgrade("factory", 0, 10000, 1000);