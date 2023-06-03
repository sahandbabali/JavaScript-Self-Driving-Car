class Car {
    constructor(x, y, w, h, carimages) {
        this.x = x
        this.y = y
        this.width = w
        this.height = h

        this.speed = 0
        this.acceleration = 0.2

        this.maxspeed = 2
        this.friction = 0.05

        this.angle = -4.739999999999994
        this.damaged = false;
        this.sensor = new Sensor(this)

        this.controls = new Controls


        let randomIndex = Math.floor(Math.random() * carimages.length);
        this.image = carimages[randomIndex]



        this.score = 0
        this.fitness = 0
        this.brain = new NeuralNetwork(5, 7, 1)



    }

    display() {
        this.sensor.draw()
        push();
        translate(this.x, this.y);
        rotate(this.angle);

        stroke(0)
        fill(200)
        rectMode(CENTER);
        //  rect(0, 0, this.width, this.height);
        image(this.image, 0 - this.width / 2, 0 - this.height / 2, this.width, this.height);
        pop();

        //draw polygons
        // for (let index = 0; index < this.polygon.length; index++) {
        //     circle(this.polygon[index].x, this.polygon[index].y, 10)

        // }


    }


    mutate() {
        this.brain.mutate(0.2)


    }


    think() {
        // console.log(this.sensor.readings.length)
        // array of inputs
        //read censors
        let input = []
        for (let index = 0; index < this.sensor.readings.length; index++) {

            if (this.sensor.readings[index].offset) {
                input.push(this.sensor.readings[index].offset)
            } else {
                input.push(1)
            }

        }
        //  console.log(input)

        let output = this.brain.predict(input)
        // console.log(output)


        if (output[0] < 0.5) {
            this.controls.left = true
            this.controls.right = false

        } else {
            this.controls.left = false
            this.controls.right = true
        }


    }

    update(roadBorders) {

        this.sensor.update(roadBorders)




        if (!this.damaged) {
            this.score++
            this.think()
            this.#move();
            this.polygon = this.#createPolygon();
            this.damaged = this.#assessDamage(roadBorders);
            if (this.damaged == true) {

                console.log("damaged!!!")
            }
        }

        // update sensor
        this.sensor.update(roadBorders)
    }

    #assessDamage(roadBorders) {
        for (let i = 0; i < roadBorders.length; i++) {
            if (polysIntersect(this.polygon, roadBorders[i])) {
                return true;
            }
        }
        return false;
    }
    #createPolygon() {
        const points = [];
        const rad = Math.hypot(this.width, this.height) / 2;
        const alpha = Math.atan2(this.width, this.height);
        points.push({
            x: this.x - Math.sin(- this.angle - alpha) * rad,
            y: this.y - Math.cos(- this.angle - alpha) * rad
        });
        points.push({
            x: this.x - Math.sin(- this.angle + alpha) * rad,
            y: this.y - Math.cos(- this.angle + alpha) * rad
        });
        points.push({
            x: this.x - Math.sin(Math.PI + this.angle * -1 - alpha) * rad,
            y: this.y - Math.cos(Math.PI + this.angle * -1 - alpha) * rad
        });
        points.push({
            x: this.x - Math.sin(Math.PI + this.angle * -1 + alpha) * rad,
            y: this.y - Math.cos(Math.PI + this.angle * -1 + alpha) * rad
        });
        return points;
    }





    #move() {




        if (this.controls.forward == true) {
            this.speed += this.acceleration
        }
        if (this.controls.backward == true) {
            this.speed -= this.acceleration
        }

        if (this.speed > this.maxspeed) {
            this.speed = this.maxspeed
        }

        if (this.speed < - this.maxspeed) {
            this.speed = - this.maxspeed
        }

        if (this.speed > 0) {
            this.speed -= this.friction
        }
        if (this.speed < 0) {
            this.speed += this.friction
        }

        if (Math.abs(this.speed) < this.friction) {
            this.speed = 0
        }

        // left right controls

        if (this.speed != 0) {
            let flip = this.speed > 0 ? 1 : -1

            if (this.controls.left == true) {
                this.angle -= 0.03 * flip
            }
            if (this.controls.right == true) {
                this.angle += 0.03 * flip
            }
        }

        this.x -= Math.sin(-this.angle) * this.speed
        this.y -= Math.cos(-this.angle) * this.speed


    }



}