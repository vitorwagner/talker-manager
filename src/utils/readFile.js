const path = require('path');
const { readFile } = require('fs').promises;

const localPath = path.resolve(__dirname, '../talker.json');

async function readTalkers() {
  try {
    const talkerData = await readFile(localPath, 'utf-8');
    return JSON.parse(talkerData);
  } catch (err) {
    console.log(err.message);
    return null;
  }
}

module.exports = readTalkers;