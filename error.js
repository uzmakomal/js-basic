const prompt = require('prompt-sync')();
try {
    let result =prompt("enter the number");
console.log(result/3);
    
} catch (error) {
    console.error("An error occurred:", error.message);
} finally {
    console.log("Execution completed.");
}
