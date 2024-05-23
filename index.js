import inquirer from "inquirer";
// Games variable
let enemies = ["Skeleton", "Zombie", "Warrior", "Assassin"];
let maxEnemyHealth = 75;
let enemyAttackDamageToHero = 25;
// Players variable
let heroHealth = 100;
let AttackDamageToEnemy = 50;
let numhealthPotion = 3;
let healtPotionHealtAmount = 30;
let HealthPpotionDropChance = 50;
// While Loop Condition
let gameRunning = true;
console.log("Welcome to DeadZone!");
Games: while (gameRunning) {
    let enemyHealth = Math.floor(Math.random() * maxEnemyHealth + 1);
    let enemyIndex = Math.floor(Math.random() * enemies.length);
    let enemy = enemies[enemyIndex];
    console.log(`# ${enemy} has appeared #\n`);
    while (enemyHealth > 0) {
        console.log(`Your Health: ${heroHealth}`);
        console.log(`${enemy} Health: ${enemyHealth}`);
        let options = await inquirer.prompt({
            name: "ans",
            type: "list",
            message: "What would you like to do?",
            choices: ["1. Attack", "2. Take Health Potion", "3. Run"]
        });
        if (options.ans === "1. Attack") {
            let demageToEnemy = Math.floor(Math.random() * AttackDamageToEnemy + 1);
            let demageToHero = Math.floor(Math.random() * enemyAttackDamageToHero + 1);
            enemyHealth -= demageToEnemy;
            heroHealth -= demageToHero;
            console.log(`You strike the ${enemy} for ${demageToEnemy}`);
            console.log(`${enemy} strike you for ${demageToHero} demage.`);
            if (heroHealth < 1) {
                console.log("you have taken too much AttackDamageToEnemy. you are to weak to continue.");
                break;
            }
        }
        else if (options.ans === "2. Take Health Potion") {
            if (numhealthPotion > 0) {
                heroHealth += healtPotionHealtAmount;
                numhealthPotion--;
                console.log(`you use health potion for ${healtPotionHealtAmount}`);
                console.log(`you now have ${heroHealth} health`);
                console.log(`you have ${numhealthPotion} health potion left`);
            }
            else {
                console.log(`you have no health potion left. defeat enemy for a chance get health potion`);
            }
        }
        else if (options.ans === "3. Run") {
            console.log(`you run away from ${enemy}`);
            continue Games;
        }
    }
    if (heroHealth < 1) {
        console.log(`you are out from battle. you are too weak.`);
        break;
    }
    console.log(`${enemy} was defeated!`);
    console.log(`you have ${heroHealth} health`);
    let randomNumber = Math.floor(Math.random() * 100 + 1);
    if (randomNumber < HealthPpotionDropChance) {
        numhealthPotion++;
        console.log(`enemy give you health potion`);
        console.log(`your health is ${heroHealth}`);
        console.log(`your healt potion is ${numhealthPotion}`);
    }
    let userOption = await inquirer.prompt({
        name: "ans",
        type: "list",
        message: "what would you like to do now",
        choices: ["1. Continue", "2. Exit"]
    });
    if (userOption.ans === "1. Continue") {
        console.log("you are continue on your advanture game");
    }
    else {
        console.log("you successfuly Exit from DeadZone");
        break;
    }
    console.log("Thnak you for Playing.");
}
