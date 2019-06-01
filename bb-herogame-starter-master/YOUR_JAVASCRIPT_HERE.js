// Write your JS here

let hero = {
    name: 'Hero',
    heroic: true,
    inventory: [],
    health: 10,
    weapon: {
        type: 'weapon-1',
        damage: 2
    }
}

function rest(Hero) {
    if (Hero.health <= 10) {
        //alert(`${Hero.name} is completely healthy`)
    }

    Hero.health = 10

    return Hero
}
function pickUpItem(Hero, Weapon) {
    Hero.inventory.push(Weapon)
}
function equipWeapon(Hero) {
    if (Hero.inventory.length) {
        Hero.weapon = Hero.inventory[0]
    }
}
function displayStats() {
    let statScrean = document.getElementById('stats')
    const name = hero.name
    const health = hero.health
    const weapon = hero.weapon.type
    const damage = hero.weapon.damage

    let nameDiv = document.createElement('div')
    let healthDiv = document.createElement('div')
    let weaponDiv = document.createElement('div')

    nameDiv.innerHTML = `Name: ${name}`
    healthDiv.innerHTML = `Health: ${health}/10`
    weaponDiv.innerHTML = `Weapon: ${weapon} (${damage} damage)`

    statScrean.appendChild(nameDiv)
    statScrean.appendChild(healthDiv)
    statScrean.appendChild(weaponDiv)
}

displayStats()
