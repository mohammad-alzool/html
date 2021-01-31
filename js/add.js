var addetion=prompt("how do you want your pizza today (VEGETARIAN or PEPPERONI)?");


while (addetion !== 'PEPPERONI' && addetion !== 'VEGETARIAN') {
  addetion = prompt('you can choose between two items (VEGETARIAN or PEPPERONI)');
}




var noofp;

function cnumber ()
{
  while (noofp=prompt("how many pizza do you want?" , "please enter Number only") ) {
    if (isNaN(noofp)) {
      alert("Invalid input.")
      ;
    } else {
      return parseInt(noofp);
    }
  }


}
if (noofp >= 1 && noofp <= 3){
  orderDetail="Congrats you have 10% discount on your order!";
} else if (noofp >= 4 && noofp <= 6){
  orderDetail="Congrats you have 20% discount and free pepsi";
} else if (noofp >= 7 && noofp <= 9999999){
  orderDetail="Congrats you have 50% discount and free pepsi";
} else { 
  cnumber();
}

var orderDetail;

var itemimeg = '';
if (addetion === 'PEPPERONI') {
  itemimeg = '<img src="PEPPERONI.jpg"/>';
} else if (addetion === 'VEGETARIAN') {
  itemimeg = '<img src="VEGETARIAN.jpg"/>';
}
var result = ""

for (var i = 0 ; i < noofp ; i++){
  result=result+itemimeg;

}

  document.write(itemimeg);




document.write("number of pizza by imege" + result );
document.write(orderDetail);


document.getElementById("orderDetail").innerText=addetion
document.getElementById("noofp").innerText=noofp

confirm("number of of pizza :" + noofp)
alert("Thank you for choosing us")