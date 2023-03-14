const path = require('path');
const { writeFile } = require('fs').promises;

async function writeTalker(talkers) {
  await writeFile(path.join(__dirname, '..', 'talker.json'), JSON.stringify(talkers));
}

module.exports = writeTalker;