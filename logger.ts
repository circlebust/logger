import * as fancyLog from 'fancy-log';
import { 
    object as isObj,
    array as isArr,
    string as isStr,
 } from 'check-types';

interface ReviveConfig {
    maxDepth?: number;
}
function reviveObject(obj: object, options: ReviveConfig){
    let stringified = "";
    return stringified;
}
const options = {
    //header:
    //default: 
}
function log(...args){
    //const messageList: Array<string>;
    const messageList = new Array();
    for (let arg of arguments){
        let msg;
        switch(true){
            //case isObj(arg): msg = reviveObject(arg, { maxDepth: 3 })); break;
            //case isArr(arg):
            default: msg = arg;
        }
        messageList.push(msg);
    }
    return fancyLog(messageList.join('\n'));
}
export default log;