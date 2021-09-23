/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const path = require('path');

const args = process.argv;

const copy = (src, dist) => {
  fs.createReadStream(src).pipe(fs.createWriteStream(dist));
};

if (args.length === 4 && args[2] === '-e' && ['uat', 'prod', 'dev', 'test'].indexOf(args[3]) > -1) {
  console.log('当前构建环境:' + args[3]);
  const src = `${__dirname}/ecosystem.config_${args[3]}.js`;
  const dist = path.resolve(__dirname, '../ecosystem.config.js');
  copy(src, dist);
} else {
  console.log('param error: please use npm run build -- -e test|dev|prod|uat\n');
  process.exit(-1);
}
