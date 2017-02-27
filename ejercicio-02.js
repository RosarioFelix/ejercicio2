function busquedaLinear (array,itemToSearch) {


  if (( array == undefined  )||(itemToSearch == undefined)){
    return "Error";
  };

  if ((array == "string")  || (itemToSearch == false)) {
     return "Error de dato";
 };
//var a = array.indexOf(itemToSearch)
var e =  array.indexOf(itemToSearch)== -1 ? false : array.indexOf(itemToSearch);
return e;
  };




  /*  array.map(function(item, index){
    if(itemToSearch == item){
      return index;
    }else{
      return false;}

});
}
/*  for(var i = 0; i < array.length-1 ;i++){
  if( array[i]== itemToSearch){
    return i;
}else { return false; };
}}*/

//NO TOCAR ESTE CODIGO O EXPLOTARA LA PC EN 10 SEGUNDOS
if(typeof exports !== 'undefined') {
    exports.busquedaLinear = busquedaLinear;
}
