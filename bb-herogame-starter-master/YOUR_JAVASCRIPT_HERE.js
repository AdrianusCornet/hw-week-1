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

function rest(h) {
    if (h.health <= 10) {
        alert(`${h.name} is completely healthy`)
    }

    h.health = 10

    return h
}
function pickUpItem() {
    
}
function equipWeapon() {
    
}