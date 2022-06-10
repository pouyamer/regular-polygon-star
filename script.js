const canvas = document.querySelector(".canvas")
const ctx = canvas.getContext("2d")

const inpShowCircle = document.querySelector(".show-circle input")
const inpPoints = document.querySelector(".points input")
const inpOuterShape = document.querySelector(".show-outer-shape input")

const { size } = config
canvas.width = size.width
canvas.height = size.height

// .9 is multiplied by the radius to make the circle a bit smaller
const circleRadius = (size.width / 2) * 0.9

const circle = new Circle(
  new Point(0, 0),
  circleRadius,
  config.circle.strokeColor
)

// Find the points on the circle
const updatePoints = howManyPoints => {
  return Array(howManyPoints)
    .fill()
    .map(
      (_, i) =>
        new Point(
          circleRadius *
            Math.cos(Math.PI / 2 - (2 * i * Math.PI) / config.points),
          circleRadius *
            Math.sin(Math.PI / 2 - (2 * i * Math.PI) / config.points)
        )
    )
}

let points = updatePoints(config.points)

// Connect the points

const drawInnerShape = points => {
  for (let i = 0; i < points.length; i++) {
    for (let j = i; j < points.length; j++) {
      if (j === i + 1 || (j === points.length - 1 && i === 0)) {
        continue
      }

      const p1 = points[i]
      const p2 = points[j]

      const line = new Line(p1, p2, config.lines.innerColor)
      line.draw()
    }
  }
}

const drawOuterShape = points => {
  for (let i = 0; i < points.length; i++) {
    const p1 = points[i]
    const p2 = points[(i + 1) % points.length]
    const line = new Line(p1, p2, config.lines.outerColor)
    line.draw()
  }
}

const drawShapes = () => {
  config.showCircle && circle.draw()
  drawInnerShape(points)
  config.showOuterShape && drawOuterShape(points)
}

// == Event Listeners ==

inpPoints.addEventListener("change", e => {
  ctx.clearRect(0, 0, size.width, size.height)
  config.points = parseInt(e.target.value)
  points = updatePoints(config.points)
  drawShapes()
})

inpShowCircle.addEventListener("change", e => {
  ctx.clearRect(0, 0, size.width, size.height)
  config.showCircle = e.target.checked
  drawShapes()
})

inpOuterShape.addEventListener("change", e => {
  ctx.clearRect(0, 0, size.width, size.height)
  config.showOuterShape = e.target.checked
  drawShapes()
})

// ========================== Main App =====================

// Initial Draw:
drawShapes()
