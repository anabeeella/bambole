var sayHello = prompt("Interjección de salutación familiar:")

if (sayHello.toUpperCase()==="HOLA"){
  console.log("La RAE estaría orgullosa de vos.");
} else {
  console.log("Mmmm... No. Te recomiendo googlearlo.");
}
  
var selectedNumber = parseInt(prompt("Un número superior a diez veces cien:"));

if( selectedNumber >= 1000){
  console.log(`Muy bien! ${selectedNumber} es mayor que 1000!`);
  
}else{
  console.log("DIJE MAYOR!");
}

var otherNumber = parseInt(prompt("Ahora un número superior a una decena e inferior a cinco decenas"));
const minNumber = 10;
const maxNumber = 50;

if( otherNumber >= minNumber && otherNumber <= maxNumber ) {
  console.log("Goooooooooooooood");
} else {
  console.log("wroooooooooooong");
}