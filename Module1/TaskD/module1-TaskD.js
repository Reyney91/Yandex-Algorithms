const { createInterface } = require("readline");

const lines = [];
createInterface({
    input: process.stdin,
    output: process.stdout,
}).on("line", (line) => {
    lines.push(line.toString().trim().split(''));
}).on("close", () => {
    const desk = lines.slice(0, 8)
    const result = calculateNotBeatsCells(desk);
    console.log(result);
});
const calculateNotBeatsCells = (desk) => {
    let countOfNotBeatCells = 64
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if (desk[i][j] == 'R') {
                countOfNotBeatCells--;
                let currentI = i
                let currentJ = j
                while (currentI > 0) {
                    currentI--
                    if (desk[currentI][j] == '*') {
                        desk[currentI][j] = 'T'
                        countOfNotBeatCells--;
                    } else if (desk[currentI][j] == 'B' || desk[currentI][j] == 'R') break
                }
                currentI = i
                while (currentI < 7) {
                    currentI++;
                    if (desk[currentI][j] == '*') {
                        desk[currentI][j] = 'T'
                        countOfNotBeatCells--;
                    } else if (desk[currentI][j] == 'B' || desk[currentI][j] == 'R') break
                }
                while (currentJ > 0) {
                    currentJ--
                    if (desk[i][currentJ] == '*') {
                        desk[i][currentJ] = 'T'
                        countOfNotBeatCells--;
                    } else if (desk[i][currentJ] == 'B' || desk[i][currentJ] == 'R') break
                }
                currentJ = j
                while (currentJ < 7) {
                    currentJ++;
                    if (desk[i][currentJ] == '*') {
                        desk[i][currentJ] = 'T'
                        countOfNotBeatCells--;
                    } else if (desk[i][currentJ] == 'B' || desk[i][currentJ] == 'R') break
                }
            }
            if (desk[i][j] == 'B') {
                countOfNotBeatCells--;
                let currentI = i
                let currentJ = j
                while (currentI > 0 && currentJ > 0) {
                    currentI--;
                    currentJ--;
                    if (desk[currentI][currentJ] == '*') {
                        desk[currentI][currentJ] = 'T'
                        countOfNotBeatCells--;
                    } else if (desk[currentI][currentJ] == 'B' || desk[currentI][currentJ] == 'R') break
                }
                currentI = i
                currentJ = j
                while (currentI < 7 && currentJ < 7) {
                    currentI++;
                    currentJ++;
                    if (desk[currentI][currentJ] == '*') {
                        desk[currentI][currentJ] = 'T'
                        countOfNotBeatCells--;
                    } else if (desk[currentI][currentJ] == 'B' || desk[currentI][currentJ] == 'R') break
                }
                currentI = i
                currentJ = j
                while (currentI < 7 && currentJ > 0) {
                    currentI++;
                    currentJ--;
                    if (desk[currentI][currentJ] == '*') {
                        desk[currentI][currentJ] = 'T'
                        countOfNotBeatCells--;
                    } else if (desk[currentI][currentJ] == 'B' || desk[currentI][currentJ] == 'R') break
                }
                currentI = i
                currentJ = j
                while (currentI > 0 && currentJ < 7) {
                    currentI--;
                    currentJ++;
                    if (desk[currentI][currentJ] == '*') {
                        desk[currentI][currentJ] = 'T'
                        countOfNotBeatCells--;
                    } else if (desk[currentI][currentJ] == 'B' || desk[currentI][currentJ] == 'R') break
                }
            }
        }
    }
    return countOfNotBeatCells
}
