var firstName = prompt("Escribí tu nombre");
var shopName = prompt("¿En qué tienda adquiriste tu producto?");
var productPrice = prompt("¿Cuál es el valor del producto que elegiste?");
var productPriceNumber = parseInt(productPrice);

var salePrice = 250;

var result = salePrice - productPriceNumber;

var finalMessage = `Hola, ${firstName}!
Gracias por usar tu cupón de ${salePrice} pesos para comprar este producto!
Todavía te quedan ${result} pesos para seguir comprando en ${shopName}.`; 

console.log(finalMessage);
