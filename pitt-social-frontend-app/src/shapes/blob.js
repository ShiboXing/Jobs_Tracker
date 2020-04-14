const React = require('react')


class Circle extends React.Component {
    constructor(x, y, r, ctx) {
        super()
        this.x = x
        this.y = y
        this.r = r
        this.ctx = ctx
        this.pts = []
    }

    vec2cart(rad) {
        let x_d = this.r * Math.sin(rad)
        let y_d = this.r * Math.cos(rad)
        
        return [this.x + x_d, this.y + y_d]
    }

    make_circle(){
        let step = Math.PI / 20 //smaller the step, bigger the noise (jumbles)
        for (let i = 0; i < 2 * Math.PI; i += step) {
            this.pts.push(this.vec2cart(i))
        }
        
        this.ctx.font = "20px Arial"
        this.ctx.textAlign = 'center'

        this.draw()
    }    

    draw(sigma = 0) {
        this.ctx.beginPath() //call before every line to clear the path
        this.ctx.moveTo(this.x, this.y + this.r)

        for (let i = 0; i < this.pts.length; i++) {
            this.ctx.lineTo(this.pts[i][0] + Math.random() * sigma - sigma / 2, 
                            this.pts[i][1] + Math.random() * sigma - sigma / 2)
        }
        this.ctx.lineTo(this.x, this.y + this.r)
        //console.log(test_pts)

        //this.ctx.strokeStyle = 'yellow'
        //this.ctx.stroke()
        this.ctx.fillStyle = 'yellow'
        this.ctx.fill()

        this.ctx.fillStyle = 'black'
        this.ctx.fillText("click me", this.x, this.y + 5)
        //console.log('draw')
    }

    

    tremble() {
        setInterval(
            () => {
                this.ctx.clearRect(0, 0, 200, 200)
                this.draw(3)
            }
        , 50)
    }
    
    
}

export { Circle }

