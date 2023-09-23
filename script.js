const upgrades = {
    cursor: {
        name: "cursor",
        cost: 10,
        amount: 0,
    },
    grandma: {
        name: "cursor",
        cost: 10,
        amount: 0,
    },
    cps: 0
}
let cookie = 0
let cookiePerClick = 1
let upgradeCost = 5


cookieEl = document.getElementById("cookie")
counterEl = document.getElementById("counter-el")
upgradeEl = document.getElementById("upgrade-btn")
cursorEl = document.getElementById("cursor-el")
cpsEl = document.getElementById("cps-el")

function getCookie() {
    cookie += cookiePerClick
    counterEl.textContent = "cookies: " + cookie
}

function getCursor() {
    if (cookie >= upgrades.cursor.cost) {
        cookie -= upgrades.cursor.cost
        upgrades.cursor.cost *= 1.1
        upgrades.cursor.cost = Math.floor(upgrades.cursor.cost)

        upgrades.cursor.amount += 1
        upgrades.cps = upgrades.cursor.amount
        cursorEl.textContent = "Cursor: " + upgrades.cursor.cost
        counterEl.textContent = "cookies: " + cookie
    }

}

function calculateCpsforCursor() {
    
}
// const interval = setInterval(getCPS() {

// }, 1000);

// clearInterval(interval)

function upgrade() {
    if (cookie >= upgradeCost) {
        cookiePerClick += 1
        cookie -= upgradeCost
        upgradeCost *= 2
        counterEl.textContent = "cookies: " + cookie
        upgradeEl.textContent = "Upgrade: " + upgradeCost

    }
}
