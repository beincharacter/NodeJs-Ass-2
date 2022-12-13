/*
The process.argv contains an array where the 0th index contains the node executable path i.e, 1st index contains the path to your current file and then the rest index contains the passed arguments.
process.argv[0] == C:\Program Files\nodejs\node.exe
process.argv[1] == E:\10X\NodeJS\Ass_2\readCommandLineArguments.js
*/
console.log("Hello " + process.argv[2])