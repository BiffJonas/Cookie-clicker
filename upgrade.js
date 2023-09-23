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
const farmUpgrade = new upgrade("Farm", 0, 10000, 1000);
const mineUpgrade = new upgrade("Mine", 0, 100000, 10000);
const factoryUpgrade = new upgrade("Factory", 0, 1000000, 100000);
const bankUpgrade = new upgrade("Bank", 0, 10000000, 1000000);
const templeUpgrade = new upgrade("Temple", 0, 100000000, 10000000);
const wizardTowerUpgrade = new upgrade("Wizard Tower", 0, 1000000000, 100000000);
const shippmentUpgrade = new upgrade("Shippment", 0, 10000000000, 1000000000);
const cookieGodUpgrade = new upgrade("Cookie God", 0, 100000000000, 10000000000);

let upgradeArray = [
    cursorUpgrade,
    grandmaUpgrade,
    bakeryUpgrade,
    farmUpgrade,
    mineUpgrade,
    factoryUpgrade,
    bankUpgrade,
    templeUpgrade,
    wizardTowerUpgrade,
    shippmentUpgrade,
    cookieGodUpgrade
];
