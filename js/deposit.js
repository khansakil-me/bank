document.getElementById('deposit-button').addEventListener('click' , function () {
    

    const depositField = document.getElementById('deposit-field');
    const newDepositTotal = depositField.value;
    const StringToNum1 = parseFloat(newDepositTotal);



    const depositCurrent = document.getElementById('deposit-total');
    const previousDepositFuture = depositCurrent.innerText ;
const StringToNum2 = parseFloat(previousDepositFuture);


const currentDepositAmount = StringToNum1 + StringToNum2 ;

    depositCurrent.innerText = currentDepositAmount;

const totalAmount = document.getElementById('total-amount');
const amountText = totalAmount.innerText ;
const StringToNum3 = parseFloat(amountText);

const futureAmount = StringToNum1 + StringToNum3 ;

totalAmount.innerText = futureAmount

    

    depositField.value = '';
})