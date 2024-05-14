
function priceVerification(price){
    if(price>=20){
        return "Approved";
    }else{
        return "Denied";
    }
}

let productValue=Number(prompt("enter the product value:"));
document.getElementById('approved?').innerHTML = priceVerification(productValue);