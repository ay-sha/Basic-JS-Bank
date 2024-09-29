let submitBtn = document.getElementById("submit-btn"); 
let loginArea = document.getElementById("Login-area"); 
let transArea = document.getElementById("trans-area"); 
let depositBtn = document.getElementById("deposit-btn"); 
let withdrawBtn = document.getElementById("withdraw-btn"); 


function loginfunc()
{
    let loginMail = document.getElementById("login-mail").value; 
    let loginPass = document.getElementById("login-pass").value; 
    const mail = "common@gmail.com"; 
    const pass = "common"; 

    if (loginMail == mail && loginPass == pass || loginMail == 'aysha@gmail.com' && loginPass == 'aysha')
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
    if (depositVal < 0)
    {
        alert("Amount should be Positive Value")
    }
    else
        {
            updateSpan("exist-deposit", depositVal)
            document.getElementById("diposit-amount").value = ""

            //Balance
            updateSpan("exist-balance", depositVal);
        }
    

}


function withdrawfunc()
{
    let withdrawAmount = getInput("withdraw-amount"); 

    //withdraw
    if (withdrawAmount < 0)
    {
        alert("Amount Should be Positive value")
    }
    else
        {
            updateSpan("exist-withdraw", withdrawAmount);
            document.getElementById("withdraw-amount").value = ""

            //balance 
            updateSpan("exist-balance", -withdrawAmount);
        }
    
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

    
