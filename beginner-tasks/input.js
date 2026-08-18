const inputQueue = Array.from(typeof process !== "undefined" && Array.isArray(process.argv) ? process.argv.slice(2) : []);

function readInput(message) {
  if (typeof prompt === "function") {
    return prompt(message);
  }

  if (inputQueue.length > 0) {
    return inputQueue.shift();
  }

  return "";
}

module.exports = { readInput };
