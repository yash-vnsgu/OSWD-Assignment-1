// global-demo.js

console.log('✅ Using global objects in Node.js');

// __dirname and __filename
console.log('Current Directory:', __dirname);
console.log('Current File:', __filename);

// setTimeout
setTimeout(() => {
  console.log('⏳ 2 seconds passed using setTimeout');
}, 2000);

// setInterval (stop after 3 counts)
let count = 0;
const interval = setInterval(() => {
  count++;
  console.log(`🕒 Interval count: ${count}`);
  if (count === 3) {
    clearInterval(interval);
    console.log('🛑 Interval stopped');
  }
}, 1000);

// process
console.log('Process ID:', process.pid);
console.log('Node Version:', process.version);
console.log('Platform:', process.platform);

// Accessing a global variable using `global`
global.myAppName = "Global Demo App";

console.log('App Name from global object:', global.myAppName);
