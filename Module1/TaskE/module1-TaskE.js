const { createInterface } = require("readline");

const lines = [];
createInterface({
    input: process.stdin,
    output: process.stdout,
}).on("line", (line) => {
    lines.push(line.toString().trim());
}).on("close", () => {
    const [profit, countOfFounders, countOfDays] = lines[0].split(" ");
    const result = addingNumberToProfit(profit, countOfFounders, countOfDays);
    console.log(result);
});
const addingNumberToProfit = (profit, founders, days) => {
    let previosProf = profit
    for (let i = 0; i < +days; i++) {
        for (let j = 0; j < 10; j++) {
            if ((profit + j) % 10000 == 0) {
                profit += '0'.repeat(days-i)
                return profit
            }
            if ((profit + j) % founders == 0) {
                profit += j
                break
            }
        }
        if(previosProf==profit) return -1
    }
    return profit
}
