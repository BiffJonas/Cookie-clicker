const counterEl = document.getElementById("counter-el")
const cookieEl = document.getElementById("cookie")
const cursorEl = document.getElementById("cursor-el")
const grandmaEl = document.getElementById("grandma-el")
const anyUpgrade = document.querySelectorAll(".upgrade")
const cpsTrackerEl = document.getElementById("cps-tracker")
const upgradeBtnEL = document.getElementById("upgrade-btn")
const cookiesPerClickEl = document.getElementById("cookies-per-click")

let cookie = 0;
let totalCookiesPerSecond = 0;
let cookieUpgradeCost = 5;
let cookiePerClick = 1;

let upgradeArray = [cursorUpgrade, grandmaUpgrade, bakeryUpgrade,];

updateText()
// refresh screen
function updateText() {
    let CPS = totalCPS(upgradeArray);
    counterEl.textContent = `Cookies: ${cookie}`
    cpsTrackerEl.textContent = `CPS: ${CPS}`
    upgradeBtnEL.textContent = `Upgrade: ${cookieUpgradeCost}`
    cookiesPerClickEl.textContent = `Cookies Per Click: ${cookiePerClick}`
}
function addCookieEverySecond(){
    let CPS = totalCPS(upgradeArray);
    cookie += CPS
    updateText()
}
setInterval(addCookieEverySecond,1000)

//click cookie
cookieEl.addEventListener("click", function() {
    cookie += cookiePerClick
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

upgradeBtnEL.addEventListener("click", function() {
    if (cookieUpgradeCost <= cookie){
        cookie -= cookieUpgradeCost
        cookiePerClick *= 2
        cookieUpgradeCost *= 4
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