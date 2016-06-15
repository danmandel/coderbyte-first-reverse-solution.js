function LongestWord(sen) { 
  var longestWord = "";
  var arr = sen.split(" ");
  arr = arr.map(x => x.replace(/[^a-z0-9]/ig,""));
  for (var i=0;i<arr.length;i++){
      if(arr.length > longestWord.length){
          longestWord = arr[i];
      }
  }
  // code goes here  
  return longestWord; 
         
}
   
// keep this function call here 
LongestWord(readline());
