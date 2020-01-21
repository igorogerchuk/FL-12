const PERCENTS = 100;

const Fighter = function ({ name, damage, hp, strength, agility }) {
    const fighterName = name;
    const fighterDamage = damage;
    const maxhp = hp;
    const fighterStrength = strength;
    const fighterAgility = agility;
    let wins = 0;
    let losses = 0;
    let currenthp = maxhp;

    this.getName = function () {
        return fighterName;
    }

    this.getDamage = function () {
        return fighterDamage;
    }

    this.getStrength = function () {
        return fighterStrength;
    }

    this.getAgility = function () {
        return fighterAgility;
    }

    this.getHealth = function () {
        return currenthp;
    }

    this.attack = function (defender) {
        if (isSuccessfulAttack(defender.getAgility(), defender.getStrength())) {
            defender.dealDamage(fighterDamage);
            console.log(`${fighterName} makes ${fighterDamage} damage to ${defender.getName()}`)
        } else {
            console.log(`${fighterName} attack missed`)
        }
    }

    this.logCombatHistory = function () {
        console.log(`Name: ${fighterName}, Wins: ${wins}, Losses: ${losses}`);
    }

    this.heal = function (health) {
        currenthp = currenthp + health > maxhp ? maxhp : currenthp + health;
    }

    this.dealDamage = function (receivedDamage) {
        currenthp = currenthp - receivedDamage < 0 ? 0 : currenthp - receivedDamage;
    }

    this.addWin = function () {
        wins++;
    }

    this.addLoss = function () {
        losses++;
    }

}

function isSuccessfulAttack(agility, strength) {
    return Math.random() * PERCENTS > agility + strength;
}

function isDead(fighter) {
    return fighter.getHealth() === 0;
}

function logEpitaph(fighter) {
    console.log(`${fighter.getName()} is dead and can't fight.`);
}

function logBattleResult(fighter1, fighter2) {
    fighter1.addLoss();
    fighter2.addWin();
    console.log(`${fighter2.getName()} has won!`);
}

function battle(fighter1, fighter2) {
    if (isDead(fighter1)) {
        logEpitaph(fighter1);
        return;
    }
    if (isDead(fighter2)) {
        logEpitaph(fighter2);
        return;
    }
    while (fighter1.getHealth() !== 0) {
        fighter1.attack(fighter2);
        if (fighter2.getHealth() === 0) {
            break;
        }
        fighter2.attack(fighter1);
    }
    if (isDead(fighter1)) {
        logBattleResult(fighter1, fighter2);
    } else {
        logBattleResult(fighter2, fighter1);
    }
}