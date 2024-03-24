// code checks the datatype that is inputed in the prompt
wd = prompt("Input a number or a string here");
if (wd==parseInt(wd)){

document.getElementById("demo").innerHTML = "<h1>You inputed a number</h1>";

}

else{

document.getElementById("demo1").innerHTML = "<h1>You inputed a string</h1>";

}
