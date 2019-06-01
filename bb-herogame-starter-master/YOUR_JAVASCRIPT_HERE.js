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
        alert(`${Hero.name} is completely healthy`)
    }

    Hero.health = 10

    return Hero
}
function pickUpItem(Hero, Weapon) {
    Hero.inventory.push(Weapon)
}
function equipWeapon() {
    
}