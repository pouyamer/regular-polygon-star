// A Point Defined in Cartesian Coordinate System
// - size: { width, height } - the size of the canvas
class Point {
  constructor(x, y) {
    this.x = x + size.width / 2
    this.y = -y + size.height / 2
  }
}

class Circle {
  constructor(point, radius, color) {
    this.point = point
    this.radius = radius
    this.color = color
  }

  draw = () => {
    const { x, y } = this.point

    ctx.lineWidth = config.circle.strokeWidth
    ctx.strokeStyle = this.color
    ctx.beginPath()
    ctx.arc(x, y, this.radius, 0, Math.PI * 2, false)
    ctx.fillStyle = this.color
    ctx.stroke()
  }
}

class Line {
  constructor(point1, point2, color) {
    this.point1 = point1
    this.point2 = point2
    this.color = color
  }

  draw = () => {
    const { x: x1, y: y1 } = this.point1
    const { x: x2, y: y2 } = this.point2

    ctx.strokeStyle = this.color
    ctx.lineWidth = config.lines.lineWidth
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.stroke()
  }
}
