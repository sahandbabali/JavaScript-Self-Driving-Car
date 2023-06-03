
function nextGeneration() {
    console.log('next generation');
    generation++
    calculateFitness();

    for (let i = 0; i < TOTAL; i++) {
        cars[i] = pickOne();
    }
    savedcars = [];
}


function calculateFitness() {
    let sum = 0;
    for (let car of savedcars) {
        sum += car.score;
    }
    for (let car of savedcars) {
        car.fitness = car.score / sum;
    }
}


function pickOne() {
    let index = 0;
    let r = random(1);
    while (r > 0) {
        r = r - savedcars[index].fitness;
        index++;
    }
    index--;
    let car = savedcars[index];
    let child = new Car(700, 90, 40, 80, carimages);
    child.brain = car.brain
    child.mutate();
    return child;
}