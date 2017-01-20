array = [1,2,3];

function arrayToList(array){

    var list = null;

    for(i = array.length -1; i>=0; i--){
        object = {value:array[i],rest:list};
        list = object;
    }


    return list;

}

function listToArray(list){
    
    var array = []

    for (var node = list; node !== null; node = node.rest) {
            array.push(node.value);
    }

    return array;

}

function prepend(element,list){

    return {
        value : element,
        rest : list
    };

}

function nth(list,position){
    
    var array = []

    for (var node = list; node !== null; node = node.rest) {
            array.push(node.value);
    }

    return array[position];

}

//console.log(JSON.stringify(arrayToList(array)));
//console.log(JSON.stringify(listToArray(arrayToList(array))));
//console.log(JSON.stringify(prepend(10, prepend(20, null))));
console.log(JSON.stringify(nth(arrayToList([10, 20, 30]), 1)));