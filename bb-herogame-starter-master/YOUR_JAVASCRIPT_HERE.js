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
let enemy = {
    health: 3,
    damage: 2
}

function rest(Hero) {
    if (Hero.health === 10) {
        alert(`${Hero.name} is completely healthy`)
    }
    displayStats()
    Hero.health = 10
    return Hero
}
function pickUpItem(Hero, Weapon) {
    Hero.inventory.push(Weapon)
}
function equipWeapon(Hero) {
    if (Hero.inventory.length) {
        Hero.weapon = Hero.inventory[0]
        displayStats()
    }
}
function displayStats() {
    let statScrean = document.getElementById('stats')
    statScrean.innerHTML = ''
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
function updateName() {
    const input = document.getElementById('name')
    const newName = input.value
    input.value = ''

    hero.name = newName

    displayStats()
}
function displayEnemyStats() {
    let enemyStats = document.getElementById('enemyStats')
    enemyStats.innerHTML = `Health: ${enemy.health}`
}
function atack() {
    enemy.health = enemy.health - hero.weapon.damage

    if (enemy.health <= 0) {
        document.getElementById('enemy').remove()
        return false
    } else {
        hero.health = hero.health - enemy.damage
    }
    
    displayStats()
    displayEnemyStats()
}

displayEnemyStats()
displayStats()
