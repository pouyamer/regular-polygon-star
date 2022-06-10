# Regular Shapes and Polygons
## What's a Regular Shape?
A regular polygon is a polygon which has congruent sides and interior angles.![polygons](https://user-images.githubusercontent.com/20505286/173117192-bdcd7ce2-812b-47f4-870a-32db58f709cb.jpg)

## What's a Regular Star?
When you connect the dots on a regular polygon to rest of the dots you'll get a **Regular Star**.
<br>
<br>
![download](https://user-images.githubusercontent.com/20505286/173117614-4350e72e-0031-4612-838f-f93fde9e401c.png)

## Configurations
You can edit the ```config.js``` file.
```
let config = {
  size: { width: 0.7 * innerHeight, height: 0.7 * innerHeight },
  showCircle: false,
  showOuterShape: false,
  points: 5,
  circle: {
    strokeWidth: 2,
    strokeColor: "#348256"
  },
  lines: {
    lineWidth: 3,
    outerColor: "#ffaf5e",
    innerColor: "#7d5124"
  }
}
```

### Size
**size** has **width** and **height** that will change the height and the width of the Canvas.
### Show/Hide Circle
**showCircle** will show/hide the circle sorrounding the shapes.
### Show/Hide Regular Polygon
**showOuterShape** will show/hide the Regular Polygon.
### Number of points
**points** indicates the number of points that Polygon/Star has.
### Circle Configurations
