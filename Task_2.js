let stringFindValue = 'key_1';
const Obj = {
    key_1 : 'value_1',
    key_2 : 'value_2'
}
const findFunc = function (findStr, checkObj) {    
return   Object.hasOwnProperty.call(checkObj, findStr); 
}

console.log(findFunc (stringFindValue,Obj));    
