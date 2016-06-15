function LetterChanges(str) { 
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    arr = str.split(""); // ["H","E","L","L","O","*","3"]
    
    var newPos = function(x){
        if (/[a-z]/ig.test(x)) {
            newPosition = alphabet.indexOf(x)+1;
            return newPosition;
        }
        return x;
    };
   
    arr = arr.map(x => (/[a-z]/.test(x)) ? alphabet[newPos(x)] : x); 
    
    arr = arr.map(x => (/[aeiou]/.test(x)) ? x.toUpperCase() : x); 
    
    str = arr.join("")

  return str; 
         
}
   

LetterChanges(readline());
