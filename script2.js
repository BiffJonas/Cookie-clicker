const counterEl = document.getElementById("counter-el")
const cookieEl = document.getElementById("cookie")
const cursorEl = document.getElementById("cursor-el")
const grandmaEl = document.getElementById("grandma-el")
const anyUpgrade = document.querySelectorAll(".upgrade")
const cpsTrackerEl = document.getElementById("cps-tracker")
const upgradeBtnEL = document.getElementById("upgrade-btn")
const cookiesPerClickEl = document.getElementById("cookies-per-click")
const prestigeEL = document.getElementById("prestige-el")
const prestigeCounterEl = document.getElementById("prestige-counter")

let cookie = 0;
let totalCookiesPerSecond = 0;
let cookieUpgradeCost = 5;
let cookiePerClick = 1;
let prestigeMultiplier = 1
let prestigeCost = 1000000000000
let prestigeAmount = 0;


updateText()
// refresh screen
function updateText() {
    let CPS = totalCPS(upgradeArray);
    counterEl.textContent = `Cookies: ${cookie}`
    cpsTrackerEl.textContent = `CPS: ${CPS * prestigeMultiplier}`
    upgradeBtnEL.textContent = `Upgrade: ${cookieUpgradeCost}`
    cookiesPerClickEl.textContent = `Cookies Per Click: ${cookiePerClick * prestigeMultiplier}`
    prestigeEL.textContent = `PRESTIGE: ${prestigeCost}`
    prestigeCounterEl.textContent = `Prestige: ${prestigeAmount}`
}
function addCookieEverySecond() {
    let CPS = totalCPS(upgradeArray) * prestigeMultiplier;
    cookie += CPS
    updateText()
}
setInterval(addCookieEverySecond, 1000)

//click cookie
cookieEl.addEventListener("click", function () {
    cookie += cookiePerClick * prestigeMultiplier
    updateText()
})

// Handle upgrade events

function incrementUpgrade(upgrade) {
    if (upgrade.cost <= cookie) {
        upgrade.amount++
        cookie -= upgrade.cost
        updateText()
    }
}

upgradeBtnEL.addEventListener("click", function () {
    if (cookieUpgradeCost <= cookie) {
        cookie -= cookieUpgradeCost
        cookiePerClick *= 2
        cookieUpgradeCost *= 4
        updateText()

    }
})

prestigeEL.addEventListener("click", function() {
    if(cookie >= prestigeCost){
        prestigeMultiplier *= 2
        prestigeCost *= 10
        prestigeAmount++
        cookie = 0;
        cookiePerClick = 1;
        for(let i =0; i < upgradeArray.length; i++){
            upgradeArray[i].amount = 0;
        }
        updateText()

    }
})

// calculate total cookies per second
function totalCPS(list) {
    let totalCookiesPerSecond = 0;

    for (const upg of list) {
        totalCookiesPerSecond += upg.amount * upg.cookiesPerSecond;
    }

    return totalCookiesPerSecond;
}



/// TODO:
// Make upgrade cost dynamic
// Make upgrades only show after previous upgrade has been bought atleast once