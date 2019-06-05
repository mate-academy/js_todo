var removeByAttr = function(arr, attr, value){
    var i = arr.length;
    while(i--){
       if( arr[i] 
           && arr[i].hasOwnProperty(attr) 
           && arr[i][attr] === value ) { 

           arr.splice(i,1);

       }
    }
    return arr;
}
var arr = [{id:1,name:'serdar'}, {id:2,name:'alfalfa'},{id:3,name:'joe'}];

console.log(arr);
removeByAttr(arr, 'id', 1);   

console.log(arr);