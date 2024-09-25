let submitBtn = document.getElementById("submit-btn"); 
let loginArea = document.getElementById("Login-area"); 
let transArea = document.getElementById("trans-area"); 
let depositBtn = document.getElementById("deposit-btn"); 
let withdrawBtn = document.getElementById("withdraw-btn"); 



function loginfunc()
{
    loginArea.style.display = "none";
    transArea.style.display = "block"; 
    
    console.log('Btn has been clicked'); 
}

function dipositfunc()
{
    let depositVal = getInput("diposit-amount");
    
    //Deposit
    updateSpan("exist-deposit", depositVal)
    document.getElementById("diposit-amount").value = ""

    //Balance
    updateSpan("exist-balance", depositVal);

}


function withdrawfunc()
{
    let withdrawAmount = getInput("withdraw-amount"); 
    console.log(withdrawAmount);
    document.getElementById("withdraw-amount").value = ""

}

function getInput(id)
{
    return InitialAmount = parseFloat(document.getElementById(id).value);
}

function updateSpan(id, depositVal)
{
    
    let preVal = parseFloat(document.getElementById(id).innerText);
    let TotalVal = depositVal + preVal;
    document.getElementById(id).innerText = TotalVal;
    console.log(TotalVal);
}

    
