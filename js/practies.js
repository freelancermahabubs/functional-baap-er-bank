

document.getElementById("double-btn").addEventListener("click", function(){
  const doubleNumber = document.getElementById("inputField");
  const doubleNumberString = doubleNumber.value;
  const doubleNumbers = parseFloat(doubleNumberString);
  if(isNaN(doubleNumbers)){
    alert("Please enter a number");
    return;
  };
  doubleNumber.value = "";
  document.getElementById("result").innerHTML = doubleNumbers *2;
})


document.getElementById("triple-btn").addEventListener("click", function(){
  const tripleNumber = document.getElementById("inputField");
  const tripleNumberString = tripleNumber.value;
  const tripleNumbers = parseFloat(tripleNumberString);
  if(isNaN(tripleNumbers)){
    alert("Please enter a number")
    return;
  };
  tripleNumber.value = "";
  document.getElementById("result").innerHTML = tripleNumbers * 3;
});