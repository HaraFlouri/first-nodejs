const crypto = require("node:crypto");

process.env.UV_THREADPOOL_SIZE = 8;
const MAX_CALLS = 8;

//Here we have 3 functions that are running in 3 different threads parallel
const start = Date.now();
for (let i = 0; i < MAX_CALLS; i++) {
  crypto.pbkdf2("password", "salt", 100000, 512, "sha512", () => {
    console.log(`Hash: ${i + 1} `, Date.now() - start);
  });
}