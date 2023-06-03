let canvasbox = document.getElementById("canvasbox")

let canvasWidth = canvasbox.clientWidth
let canvasHeight = canvasbox.clientWidth / 2
let generationspan = document.getElementById("generationspan")
let populationspan = document.getElementById("populationspan")

let car
let cars = []
savedcars = [];
let carImage1
let carImage2
let carImage3
let carImage4


let carimages = []
let TOTAL = 10
let generation = 0
let roadBorders = []




function calculateroadboarders() {
    roadBorders = []
    for (let index = 0; index < allboarders.length; index++) {

        roadBorders.push([{
            x: allboarders[index]["start"].x,
            y: allboarders[index]["start"].y
        }, {
            x: allboarders[index]["end"].x,
            y: allboarders[index]["end"].y
        }])

    }
}


let outerlines = [{ "start": { "x": 46.015625, "y": 37 }, "end": { "x": 264.015625, "y": 29 } }, { "start": { "x": 264.015625, "y": 29 }, "end": { "x": 477.015625, "y": 26 } }, { "start": { "x": 477.015625, "y": 26 }, "end": { "x": 650.015625, "y": 24 } }, { "start": { "x": 650.015625, "y": 24 }, "end": { "x": 789.015625, "y": 46 } }, { "start": { "x": 789.015625, "y": 46 }, "end": { "x": 987.015625, "y": 32 } }, { "start": { "x": 987.015625, "y": 32 }, "end": { "x": 1169.015625, "y": 18 } }, { "start": { "x": 1169.015625, "y": 18 }, "end": { "x": 1283.015625, "y": 29 } }, { "start": { "x": 1283.015625, "y": 29 }, "end": { "x": 1430.015625, "y": 56 } }, { "start": { "x": 1430.015625, "y": 56 }, "end": { "x": 1476.015625, "y": 54 } }, { "start": { "x": 1476.015625, "y": 54 }, "end": { "x": 1514.015625, "y": 81 } }, { "start": { "x": 1514.015625, "y": 81 }, "end": { "x": 1514.015625, "y": 242 } }, { "start": { "x": 1514.015625, "y": 242 }, "end": { "x": 1492.015625, "y": 425 } }, { "start": { "x": 1492.015625, "y": 425 }, "end": { "x": 1506.015625, "y": 553 } }, { "start": { "x": 1506.015625, "y": 553 }, "end": { "x": 1516.015625, "y": 667 } }, { "start": { "x": 1516.015625, "y": 667 }, "end": { "x": 1462.015625, "y": 725 } }, { "start": { "x": 1462.015625, "y": 725 }, "end": { "x": 1356.015625, "y": 747 } }, { "start": { "x": 1356.015625, "y": 747 }, "end": { "x": 1139.015625, "y": 659 } }, { "start": { "x": 1139.015625, "y": 659 }, "end": { "x": 943.015625, "y": 622 } }, { "start": { "x": 943.015625, "y": 622 }, "end": { "x": 695.015625, "y": 635 } }, { "start": { "x": 695.015625, "y": 635 }, "end": { "x": 512.015625, "y": 683 } }, { "start": { "x": 512.015625, "y": 683 }, "end": { "x": 336.015625, "y": 733 } }, { "start": { "x": 336.015625, "y": 733 }, "end": { "x": 176.015625, "y": 745 } }, { "start": { "x": 176.015625, "y": 745 }, "end": { "x": 42.015625, "y": 713 } }, { "start": { "x": 42.015625, "y": 713 }, "end": { "x": 14.015625, "y": 485 } }, { "start": { "x": 14.015625, "y": 485 }, "end": { "x": 23.015625, "y": 177 } }, { "start": { "x": 23.015625, "y": 177 }, "end": { "x": 46.015625, "y": 37 } }]
let innerlines = [{ "start": { "x": 786.015625, "y": 149 }, "end": { "x": 1006.015625, "y": 121 } }, { "start": { "x": 1006.015625, "y": 121 }, "end": { "x": 1194.015625, "y": 128 } }, { "start": { "x": 1194.015625, "y": 128 }, "end": { "x": 1311.015625, "y": 154 } }, { "start": { "x": 1311.015625, "y": 154 }, "end": { "x": 1335.015625, "y": 157 } }, { "start": { "x": 1335.015625, "y": 157 }, "end": { "x": 1406.015625, "y": 187 } }, { "start": { "x": 1406.015625, "y": 187 }, "end": { "x": 1377.015625, "y": 249 } }, { "start": { "x": 1377.015625, "y": 249 }, "end": { "x": 1376.015625, "y": 349 } }, { "start": { "x": 1376.015625, "y": 349 }, "end": { "x": 1387.015625, "y": 434 } }, { "start": { "x": 1387.015625, "y": 434 }, "end": { "x": 1398.015625, "y": 581 } }, { "start": { "x": 1398.015625, "y": 581 }, "end": { "x": 1347.015625, "y": 594 } }, { "start": { "x": 1347.015625, "y": 594 }, "end": { "x": 1141.015625, "y": 518 } }, { "start": { "x": 1141.015625, "y": 518 }, "end": { "x": 894.015625, "y": 503 } }, { "start": { "x": 894.015625, "y": 503 }, "end": { "x": 691.015625, "y": 513 } }, { "start": { "x": 691.015625, "y": 513 }, "end": { "x": 464.015625, "y": 565 } }, { "start": { "x": 464.015625, "y": 565 }, "end": { "x": 336.015625, "y": 607 } }, { "start": { "x": 336.015625, "y": 607 }, "end": { "x": 166.015625, "y": 657 } }, { "start": { "x": 166.015625, "y": 657 }, "end": { "x": 151.015625, "y": 503 } }, { "start": { "x": 151.015625, "y": 503 }, "end": { "x": 121.015625, "y": 271 } }, { "start": { "x": 121.015625, "y": 271 }, "end": { "x": 158.015625, "y": 150 } }, { "start": { "x": 158.015625, "y": 150 }, "end": { "x": 596.015625, "y": 132 } }, { "start": { "x": 596.015625, "y": 132 }, "end": { "x": 786.015625, "y": 149 } }]

let allboarders = innerlines.concat(outerlines);


function preload() {
    carImage1 = loadImage('1.png');
    carImage2 = loadImage('2.png');
    carImage3 = loadImage('3.png');
    carImage4 = loadImage('4.png');



    for (let index = 1; index < 5; index++) {
        carimages.push(loadImage(`${index}.png`))
    }


}

function setup() {
    let canvas = createCanvas(canvasWidth, canvasHeight);
    canvas.parent(canvasbox);
    calculateroadboarders()
    //  car = new Car(700, 90, 40, 80, carImage)
    //   car = new Car(300, 300, 40, 80, carImage)

    for (let index = 0; index < TOTAL; index++) {
        cars.push(new Car(700, 90, 40, 80, carimages))

    }

}


function draw() {


    generationspan.innerText = generation
    populationspan.innerText = cars.length

    background(220);




    for (let index = 0; index < cars.length; index++) {
        cars[index].update(roadBorders)
        cars[index].display()


        for (let j = 0; j < cars.length; j++) {

            if (cars[j].damaged == true) {

                savedcars.push(cars.splice(j, 1)[0])

            }
        }

    }

    if (cars.length == 0) {
        nextGeneration()

    }

    // car.update(roadBorders)
    // car.display()




    // draw the border
    for (let index = 0; index < roadBorders.length; index++) {
        line(roadBorders[index][0].x, roadBorders[index][0].y, roadBorders[index][1].x, roadBorders[index][1].y)
    }



    // //  outer lines
    // for (let i = 0; i < allboarders.length; i++) {
    //     let templine = allboarders[i];
    //     line(templine.start.x, templine.start.y, templine.end.x, templine.end.y);
    // }

}