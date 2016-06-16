function LetterCapitalize(str) { 
    words = str.split(" ")
    words = words.map(x => x.charAt(0).toUpperCase()+x.slice(1))
    str = words.join(" ")
 
     return str; 
         
}
