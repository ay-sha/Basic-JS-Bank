let submitBtn = document.getElementById("submit-btn"); 
let loginArea = document.getElementById("Login-area"); 
let transArea = document.getElementById("trans-area"); 
let depositBtn = document.getElementById("deposit-btn"); 
let withdrawBtn = document.getElementById("withdraw-btn"); 


function loginfunc()
{
    let loginMail = document.getElementById("login-mail").value; 
    let loginPass = document.getElementById("login-pass").value; 
    const mail = "aysha@gmail.com"; 
    const pass = "aysha"; 

    if (loginMail == mail && loginPass == pass)
    {
        loginArea.style.display = "none";
        transArea.style.display = "block";
    }

    else if (loginMail == mail && loginPass!= pass) {
        alert("Wrong password"); 
        window.location.reload();
    }
    else if (loginMail != mail && loginPass == pass) {
        alert("Wrong Email");
        window.location.reload();
    }
    else
    {
        alert("Re-Enter Values"); 
        window.location.reload();
    }
    
    
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

    //withdraw
    updateSpan("exist-withdraw", withdrawAmount);
    document.getElementById("withdraw-amount").value = ""

    //balance 
     updateSpan("exist-balance", -withdrawAmount);
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

    
