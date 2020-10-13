// 导入的是从 export{} 对象中导出的
import {flag} from "./aaa.js";
if(flag) {
  console.log(flag)
}
import {mul, person} from "./aaa.js"
const peo = new person();
peo.run()

// 这里导出的是一个默认的值， 每一个js文件，只能有一个
import addr from "./aaa.js"
addr()

// 统一全部导出

import * as aaa from "./aaa.js"
aaa.default
aaa.person.run();