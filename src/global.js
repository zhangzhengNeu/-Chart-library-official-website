// react app.js
import sniffing from '@xmly/sniffing-sdk';
import trackerMap from './sniffing/trackerMap.ts';
import { start } from '@xmly/xmrep';
sniffing.init(trackerMap, {
  autoExpo: true,
  xmrep: {
    start: start,
    params: {
      b: '245', // 其中bid为初始代码中的b
      // c: {
      //  parmas: "xxx"
      // }
    },
  },
});
