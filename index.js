function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  console.log(string.toUpperCase())
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}
  
  
 function sayHiToGrandma(string) {
   var uppercase = string.toUpperCase();
   var lowercase = string.toLowerCase();
    
  if ( string === string.toLowerCase()) {
    return " I Can\'t hear you!" ;
    
  }
 
   else if (string === string.toUpperCase()) {
      return  " YES INDEED!" ;
   }
  
   else if ( string === "I love you, Grandma.")  {
     return "I love you, too.";
   }
      

}