document.getElementById('btn-calculate').addEventListener('click', function(){
    const totalCount = document.getElementById('total-count');
    
    const newTotalAmmountString = totalCount.innerText;
    const newTotalAmmount = parseFloat(newTotalAmmountString);


    const budgetFieldElement = document.getElementById('budget-field');
    const budgetFieldElementString = budgetFieldElement.value;
    const previousFieldAmmount = parseFloat(budgetFieldElementString);
    const newFieldAmmount = previousFieldAmmount * newTotalAmmount;


    const expensesTextElement = document.getElementById('player-expense');
    const expensesTextElementString = expensesTextElement.innerText;
    const expensesTextElementResult = parseFloat(expensesTextElementString);
    const totalAmmount = expensesTextElementResult + newFieldAmmount;
    expensesTextElement.innerText = totalAmmount;
    budgetFieldElement.value = '';

    document.getElementById('btn-total').addEventListener('click' , function(){
        const managerAmmount = elementFieldId('manager-amount');
        const coachAmmount = elementFieldId('coach-amount');
        const expensesTextElementResult = inputTextElementId('player-expense');
        const totalAmmount = managerAmmount + coachAmmount + expensesTextElementResult;
        const finalAmmount = inputTextElementId('total-ammount');
        const finalResult = totalAmmount + finalAmmount;
        getElementById('total-ammount',finalResult);
    })
    

    

    

  



  
    

})

document.getElementById('btn-total').addEventListener('click',function(){
    const managerAmmount = document.getElementById('manager-amount');
    const newManagerAmmountString = managerAmmount.value;
    managerAmmount.value = '';
    const newManagerAmmount = parseFloat(newManagerAmmountString);
    const coachAmmount = document.getElementById('coach-amount');
    const newCoachAmmountString = coachAmmount.value;
    coachAmmount.value = '';
    const newCoachAmmount = parseFloat(newCoachAmmountString);

    const totalManagerCoachAmmount = newManagerAmmount + newCoachAmmount;
    
    const totalExpense = document.getElementById('total-ammount');
    const newTotalExpenseString = totalExpense.innerText;
    const newTotalExpense = parseFloat(newTotalExpenseString);
    

    const newTotal = newTotalExpense + totalManagerCoachAmmount;
    
    totalExpense.innerText = newTotal;



})

// document.getElementById('btn-total').addEventListener('click', function(){
//     const calculateTotal = document.getElementById('total-ammount');
//     const calcuateTotalString = calculateTotal.innerText;
//     const newCalculateTotal = parseFloat(calcuateTotalString);

//     const newCalculate = newCalculateTotal +
// })