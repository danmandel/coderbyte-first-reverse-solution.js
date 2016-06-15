function FirstReverse(str) { 
  var newStr = "";
  for (var i = str.length-1;i>=0;i--){
      newStr = newStr + str[i];
  }
  return newStr; 
         
}
   
// keep this function call here 
FirstReverse(readline());
