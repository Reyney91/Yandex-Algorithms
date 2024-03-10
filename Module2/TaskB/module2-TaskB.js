const { createInterface } = require("readline");

let lines = [];
createInterface({
  input: process.stdin,
  output: process.stdout,
}).on("line", (line) => {
  lines.push(line.toString().trim());
}).on("close", () => {
  const [countOfdays, expirationDateCount] = lines[0].split(' ');
  const priceList = lines[1].split(' ').map(el=>+el);
  const result = calculateMaxProfit(+countOfdays, +expirationDateCount, priceList);
  console.log(result);
});
const calculateMaxProfit = (daysCount, expiration, priceList) => {
  let maxProfit = 0;

  for (let i = 0; i < daysCount; i++) {
    for (let j = 1; j <= expiration; j++) {
      if (priceList[i+j]==undefined){
        break;
      }

      if (priceList[i+j] - priceList[i] > maxProfit) {
        maxProfit = priceList[i+j] - priceList[i]
      }
    }
  }
  return maxProfit;
}
