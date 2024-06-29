function getValueByIdFromField(inputFieldId){
    const inputField=document.getElementById(inputFieldId);
    const inputFieldValue=parseFloat(inputField.value);
    return inputFieldValue;
}
document.getElementById('calculate-btn').addEventListener('click',function(event){
    // alert('clicked');
    const income=getValueByIdFromField('income');
    const foodExpense=getValueByIdFromField('expense-food');
    const rentExpense=getValueByIdFromField('expense-rent');
    const clothExpense=getValueByIdFromField('expense-cloth');
    const totalExpense=document.getElementById('total-expense');
    totalExpense.innerText=foodExpense+rentExpense+clothExpense;
    const balance=document.getElementById('balance');
    balance.innerText=income-(foodExpense+rentExpense+clothExpense)
    document.getElementById('save').addEventListener('click',function(){
        const parcent=getValueByIdFromField('parcent');
        const savingAmount=document.getElementById('saving-amount');
        const savingAmountValue=parseFloat(balance.innerText)*(parcent/100);
        savingAmount.innerText=savingAmountValue;
        const remainingBalance=document.getElementById('remain');
        remainingBalance.innerText=parseFloat(balance.innerText)-savingAmountValue;
    })
})
