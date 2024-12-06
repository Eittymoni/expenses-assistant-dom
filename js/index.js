
function getInputValueById(id){
return parseFloat(document.getElementById(id).value)
}

function showError(id){
    return document.getElementById(id).classList.remove("hidden")

}

function formatCurrency (amount){
return `${amount.toFixed(2)}`
}


let count =0

// calculate  button

const calculateButton = document.getElementById("calculate")
calculateButton.addEventListener("click", function (){
count +=1

// const income = parseFloat (document.getElementById("income").value)

// const software = parseFloat (document.getElementById("software").value)
// const courses = parseFloat (document.getElementById("courses").value)
// const internet = parseFloat (document.getElementById("internet").value)

const income = getInputValueById("income")
const software = getInputValueById("software")
const courses = getInputValueById("courses")
const internet = getInputValueById("internet")

if(income<=0 || isNaN(income)){
    // document.getElementById("income-error").classList.remove("hidden")
    showError("income-error")
    return
}
if(software<=0 || isNaN(software)){
    // document.getElementById("software-error").classList.remove("hidden")
    showError("software-error")
    return
}
if(courses<=0 || isNaN(courses)){
    // document.getElementById("courses-error").classList.remove("hidden")
    showError("courses-error")
    return
}
if(internet<=0 || isNaN(internet)){
    // document.getElementById("internet-error").classList.remove("hidden")
    showError("internet-error")
    return
}

const totalExpenses = software + courses + internet
const balance = income - totalExpenses

 if(totalExpenses > income){
    document.getElementById("logic-error").classList.remove("hidden")
    result
 }

const totalExpensesElement = document.getElementById("total-expenses")
totalExpensesElement.innerText = totalExpenses.toFixed(2)

const balanceElement = document.getElementById("balance")
balanceElement.innerText = balance

const result = document.getElementById("results")
result.classList.remove("hidden")
// history 
const historyItem = document.createElement("div")
historyItem.className = "bg-white p-3 rounded-md border-l-2 border-indigo-500"
historyItem.innerHTML =`
<p>Serial: ${count}</p>
<p class="text-xl text-black">${new Date().toLocaleDateString()}</p>

<p class="text-base text-gray-500">Income :৳ ${formatCurrency(income)}</p>
<p class="text-base text-gray-500"> Expanses:৳ ${formatCurrency(totalExpenses)} </p>
<p class="text-base text-gray-500">Balance:৳ ${formatCurrency(balance)} </p>
`
const historyContainer = document.getElementById("history-list")
historyContainer.insertBefore(historyItem, historyContainer.firstChild)
})


// saving button
const calculateSavingsButton = document.getElementById("calculate-savings")

calculateSavingsButton.addEventListener("click", function(){
const savingsParentage = parseFloat(document.getElementById("savings").
value)
const income = parseFloat (document.getElementById("income").value)
const software = parseFloat (document.getElementById("software").value)
const courses = parseFloat (document.getElementById("courses").value)
const internet = parseFloat (document.getElementById("internet").value)
const totalExpenses = software + courses + internet
const balance = income - totalExpenses 

const savingsAmount= (savingsParentage * balance)/100
const remainingBalance =  balance - savingsAmount

const savingsAmountElement = document.getElementById("savings-amount")
savingsAmountElement.innerText= savingsAmount.toFixed(2)

const remainingBalanceElement = document.getElementById("remaining-balance")
remainingBalanceElement.innerText = remainingBalance.toFixed(2)
    
})

//  history button

const historyTab = document.getElementById("history-tab")
const assistantTab = document.getElementById("assistant-tab")
historyTab.addEventListener("click", function(){

    historyTab.classList.add('text-white','bg-gradient-to-r','from-blue-500','to-purple-600')
historyTab.classList.remove('text-gray-600')

    assistantTab.classList.remove('text-white','bg-gradient-to-r','from-blue-500','to-purple-600')
    assistantTab.classList.add('text-gray-600')

 document.getElementById("expense-form").classList.add("hidden")
 document.getElementById("history-section").classList.remove("hidden")
})

assistantTab.addEventListener("click",function(){
    assistantTab.classList.add('text-white','bg-gradient-to-r','from-blue-500','to-purple-600')
    historyTab.classList.remove('text-white','bg-gradient-to-r','from-blue-500','to-purple-600')
    document.getElementById("expense-form").classList.remove("hidden")
    document.getElementById("history-section").classList.add("hidden")
})