function runProgram(input) {
  input = input.trim().split("\n");
  let gas = input[1].trim().split(" ").map(Number);
  let cost = input[2].trim().split(" ").map(Number);

  let fuelSum = 0;
  let currentAvailableFuel = 0;
  let currentStation = 0;
  for (let i = 0; i < gas.length; i++) {
    let netFuel = gas[i] - cost[i];
    currentAvailableFuel += netFuel;
    if (currentAvailableFuel < 0) {
      currentStation = i + 1;
      currentAvailableFuel = 0;
    }
    fuelSum += netFuel;
  }
  console.log(fuelSum >= 0 ? currentStation : -1);
}
process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
  read += input;
});
process.stdin.on("end", function () {
  read = read.replace(/\n$/, "");
  runProgram(read);
});

process.on("SIGINT", function () {
  read = read.replace(/\n$/, "");
  runProgram(read);
  process.exit(0);
});
