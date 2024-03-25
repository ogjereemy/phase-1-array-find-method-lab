// code your solution here
// const record = [
//     { year: "2015", result: "W"},
//     SDF-FT09AP1HybridPagesMapping Arrays
//     Home
//     Modules
//     Grades4
//     Assignments
//     People
//     Health Check
//     { year: "2014", result: "N/A"},
//     { year: "2013", result: "L"},
// ]
// let win = record.find(yearWon)
// console.log()
function superbowlWin(record){
    // return record.year("2015").result
    const win = record.find(game => game.result === "W");
    
    return win ? win.year : undefined;

}