const Table = require("cli-table");
// Do not remove - colors required for the output
const colors = require("colors");
const jsonReport = require("./e2e_output/cucumber.json");
const appVersion = require("../package.json").version;
const env = process.env.ENV;

let testPassed = 0;
let testFailed = 0;
const table = new Table({
  head: ["No.".grey, "Feature".blue, "Scenario".grey, "Passed".green, "Failed".red]
});

jsonReport.forEach((report, index) => {
  const elements = report.elements;
  let totalPassed = 0;
  let totalFailed = 0;

  elements.forEach(element => {
    const steps = element.steps;
    const totalSteps = steps.length;
    let tempCount = 0;

    steps.forEach(step => {
      if (step.result.status === "passed") {
        tempCount += 1;
      }
    });

    if (tempCount === totalSteps) {
      totalPassed += 1;
    } else {
      totalFailed += 1;
    }
  });

  table.push([
    (index + 1).toString().grey,
    report.name.blue,
    elements.length.toString().grey,
    totalPassed.toString().green,
    totalFailed.toString().red
  ]);

  // Get the total number of passed & failed
  testPassed += totalPassed;
  testFailed += totalFailed;
});

// Show test results in console
console.log(table.toString());
