/* const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question(`what is your name:`, (name) => {
       
        console.log(`Hello: ${name} how are you doing today?`);
      
        rl.close();
  
    });*/

    const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question(`what is your first number: `, (num) => {
    rl.question(`what is your second number: `, (num2) => {
        const result = parseInt(num) + parseInt(num2);
    console.log(`your answer is: ${result}`);
    
    rl.close();
});
});
