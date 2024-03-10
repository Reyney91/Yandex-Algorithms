const { createInterface } = require("readline");

let lines = [];
createInterface({
  input: process.stdin,
  output: process.stdout,
}).on("line", (line) => {
  lines.push(line.toString().trim());
}).on("close", () => {
  const countOfCells = lines[0];
  const result = calculateCoordinatesOfRectangle(countOfCells);
  console.log(result);
});
const calculateCoordinatesOfRectangle = (countOfCells) => {
  let [startX, startY] = lines[1].split(" ").map(el=>+el)
  let [endX, endY] = [startX, startY]
  for (let index = 2; index <= countOfCells; index++) {
    const [X, Y] = lines[index].split(" ").map(el=>+el);
    if (X > endX) {
      endX = X;
    }
    if (Y > endY) {
      endY = Y;
    }
    if (X < startX) {
      startX = X;
    }
    if (Y < startY) {
      startY = Y;
    }
  }
  return [startX, startY, endX, endY].join(" ")
}
