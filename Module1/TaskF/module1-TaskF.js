const { createInterface } = require("readline");

const lines = [];
createInterface({
  input: process.stdin,
  output: process.stdout,
}).on("line", (line) => {
  lines.push(line.toString().trim());
}).on("close", () => {
  const countOfNums = lines[0];
  const numbers = lines[1].split(' ');
  const result = calculateSigns(countOfNums, numbers);
  console.log(result);
});
const calculateSigns = (count, numbers) => {
  let resultString = ''
  let prevNum = +numbers[0]

  for (let index = 1; index < count; index++) {
    if (prevNum % 2 && numbers[index] % 2 == 0 || prevNum % 2 == 0 && numbers[index] % 2) {
      prevNum = 1
      resultString += '+'
    } else if (prevNum % 2 == 0 && numbers[index] % 2 == 0) {
      prevNum = 2
      resultString += '+'
    } else if (prevNum % 2 && numbers[index] % 2) {
      prevNum = 1
      resultString += 'x'
    }
  }
  return resultString
}
