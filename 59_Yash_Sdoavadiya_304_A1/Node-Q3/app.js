// app.js

const readline = require('readline');
const movieBot = require('./chatbot');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'You: '
});

console.log("🎬 Welcome to MovieBot! Ask me about movies (type 'exit' to quit).");
rl.prompt();

rl.on('line', (input) => {
  const response = movieBot.getResponse(input);
  console.log('Bot:', response);

  if (input.toLowerCase().includes('exit') || input.toLowerCase().includes('bye')) {
    rl.close();
  } else {
    rl.prompt();
  }
});
