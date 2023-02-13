document.getElementById("btn-witdraw").addEventListener("click", function(){
  
  const newWithdrawAmount = getInputFieldValueById("withdraw-filed");
  const previousWithdrawAmount = getTextElementValueById("withdraw-total");
  const newWithdrawTotalAmount = previousWithdrawAmount + newWithdrawAmount;

  setTextElementValueById("withdraw-total", newWithdrawTotalAmount);

  const previousBalanceTotal = getTextElementValueById("total-balance");
  const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
  setTextElementValueById("total-balance", newBalanceTotal);
});