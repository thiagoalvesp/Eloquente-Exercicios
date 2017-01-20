function deepEqual(obj1,obj2){

     if(typeof obj1 == 'object' && obj1 != null && typeof obj2 == 'object' && obj2 != null){
         
        arrayObj1 =[];
        arrayObj2 =[];

        for(prop in obj1){
             arrayObj1.push(prop);
        }
        for(prop in obj2){
            arrayObj2.push(prop);
        }  

        if (arrayObj1.lenght != arrayObj2.lenght){
            return false;
        }
            
        for(var i=0;arrayObj1.lenght-1;i++){
            if (arrayObj1[i] !== arrayObj2[i]){
                return false
            }  
        }

        for(var i=0;arrayObj1.lenght-1;i++){
            if(!deepEqual(obj1[arrayObj1[i]],obj2[arrayObj2[i]])){
                return false;
            }
        }

        return true;

     }else{
         return obj1 === obj2;
     } 
    
}
var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));