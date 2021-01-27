var addetion=prompt("how do you want your pizza today?");
var noofp=prompt("how many pizza do you want?");

var orderDetail;

if (noofp > 1 && noofp < 3){
  orderDetail="Congrats you have 10% discount on your order!";
} else if (noofp > 3 && noofp < 6){
  orderDetail="Congrats you have 20% discount and free pepsi";
} else if (noofp > 7 && noofp < 9999999){
  orderDetail="Congrats you have 50% discount and free pepsi";
} else {
  orderDetail="somthing wrong with your order!!!";
}

document.write(orderDetail);
document.getElementById("orderDetail").innerText=addetion

document.getElementById("noofp").innerText=noofp

confirm("number of of pizza :" + noofp)
alert("Thank you for choosing us")