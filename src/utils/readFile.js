const path = require('path');
const { readFile } = require('fs').promises;

async function readTalkers() {
  const talkerData = await readFile(path.join(__dirname, '..', 'talker.json'), 'utf-8');
  return JSON.parse(talkerData);
}

module.exports = readTalkers;