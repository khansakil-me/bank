document.getElementById('withdraw-button').addEventListener('click' , function () {
    

    const withdrawField= document.getElementById('withdraw-field');
    const newWithdrawTotal = withdrawField.value;
    const StringNum1 = parseFloat(newWithdrawTotal);



    const withdrawCurrent = document.getElementById('withdraw-total');
    const previousWithdrawFuture = withdrawCurrent.innerText ;
const StringNum2 = parseFloat(previousWithdrawFuture);


const currentWithdrawAmount = StringNum1 + StringNum2 ;

    withdrawCurrent.innerText = currentWithdrawAmount;

const totalAmount = document.getElementById('total-amount');
const amountText = totalAmount.innerText ;
const StringNum3 = parseFloat(amountText);

const futureAmount = StringNum1 + StringNum3 ;

totalAmount.innerText = futureAmount;

    

withdrawField.value = '';
})