
document.getElementById("btn-deposit").addEventListener("click", function(){

  /*
  Previous we work

  1. get the element by id
  2. get value from the element
  3. convert string value a number
  
  */
 const newDepositAmounts = getInputFieldValueById("deposit-field");
 /* 
 get previous deposit total by id

 */
const previousDepositTotal = getTextElementValueById("deposit-total")
// calculate new deposit total
const newDepositTotal = previousDepositTotal + newDepositAmounts;

// set deposit total value 
setTextElementValueById("deposit-total", newDepositTotal);

const previousBalanceTotal = getTextElementValueById("total-balance");

const newBalanceTotal = previousBalanceTotal + newDepositAmounts;
setTextElementValueById("total-balance", newBalanceTotal);

});

