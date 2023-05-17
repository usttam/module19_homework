const Obj = {
    key_1 : 'value_1',
    key_2 : 'value_2'
}

const newObj = Object.create(Obj);

newObj.ownKey = 'own_value';

for (const key in newObj) {
    if (Object.hasOwnProperty.call(newObj, key)) {
        console.log('own key = '+ key  + ' ' + 'value = ' + newObj[key]);        
    }
    else {
        console.log('has no OwnProperty');  
    }
}

//debugger;

