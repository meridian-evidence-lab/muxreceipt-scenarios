import {scenarios} from './index.mjs';console.log((await scenarios()).map(x=>({name:x.name,expectedStatus:x.expectedStatus})));
