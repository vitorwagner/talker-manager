const path = require('path');
const { writeFile } = require('fs').promises;

const localPath = path.resolve(__dirname, '../talker.json');

async function writeTalker(talkers) {
  try {
    await writeFile(localPath, JSON.stringify(talkers));
  } catch (err) {
    console.log(err.message);
    return null;
  }
}

module.exports = writeTalker;