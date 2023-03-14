const path = require('path');
const readTalkers = require('./readFile');
const { writeFile } = require('fs').promises;

async function writeTalker(talker) {
  const talkers = await readTalkers();
  talkers.push(talker);
  await writeFile(path.join(__dirname, '..', 'talker.json'), JSON.stringify(talker));
}

module.exports = writeTalker;