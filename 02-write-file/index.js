const fs = require("fs");

const output = fs.createWriteStream("02-write-file/destination.txt");

const { stdout, stdin, stderr } = process;

stdout.write(`Hello world! Write your text \n >`);
stdin.on("data", (data) => {
  console.log(data.toString());
  if (data.toString() !== "exit") {
    output.write(data);
  } else {
    process.exit();
  }
});

// process.on("exit", (code) => {
//   if (code === 0) {
//     stdout.write("Всё в порядке");
//   } else {
//     stderr.write(`Что-то пошло не так. Программа завершилась с кодом ${code}`);
//   }
// });

process.on("beforeExit", (code) => {
  console.log("Process beforeExit event with code: ", code);
});

process.on("exit", (code) => {
  console.log("Process exit event with code: ", code);
});

console.log("This message is displayed first.");
