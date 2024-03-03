const { createInterface } = require("readline");

const lines = [];
createInterface({
    input: process.stdin,
    output: process.stdout,
}).on("line", (line) => {
    lines.push(line.toString().trim());
}).on("close", () => {
    const countOfStrings = lines[0];
    const spaceNeed = lines.slice(1);


    const result = minTabsNeeded(countOfStrings, spaceNeed);
    console.log(result);
});
const minTabsNeeded = (stringCount, spaceNeed) => {
    let tabsCount = 0

    spaceNeed.forEach(element => {
        if (+element % 4 == 3 ) {
            tabsCount += +(Math.floor(+element / 4) + 2);
        } else if (+element >= 4) {
            tabsCount += +(Math.floor(+element / 4) + (+element % 4));
        } else {
            tabsCount += +element
        }
    });
    return tabsCount
}
