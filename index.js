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
    var uppercase = "HELLO";
    var lowercase = "hello";
    
  if ( string.toLowerCase() === lowercase.toLowerCase()) {
    return " I can\'t hear you!" ;
    
  }
 
   else if ( string.toUpperCase() === uppercase.toUpperCase()) {
      return  " YES INDEED!" ;
   }
  
   else if ( string === "I love you, Grandma.")  {
     return "I love you, too.";
   }
      

}