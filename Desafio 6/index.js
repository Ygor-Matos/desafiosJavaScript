let computerNumber;
let userNumbers=[];
let tentativas = 1;
let maximoTentativas = 10;
function init(){
    computerNumber = Math.ceil(Math.random()*100) ;
    console.log(computerNumber);
}

function newGame(){
    window.location.reload();
}


function compareNumbers(){
    let save = Number(document.getElementById('inputBox').value);
    userNumbers.push(' '+save);
    document.getElementById('guesses').innerHTML = userNumbers;

    if(tentativas<maximoTentativas){
        if(save>computerNumber){
            document.getElementById('textOutput').innerHTML = 'Your numner is too High';
            document.getElementById('inputBox').value='';
            tentativas++;
            document.getElementById('attempts').innerHTML = tentativas;
        }else if(save<computerNumber){
            document.getElementById('textOutput').innerHTML = 'Your nubmer is too low';        
            document.getElementById('inputBox').value='';
            tentativas++;
            document.getElementById('attempts').innerHTML = tentativas;
        }else{
            document.getElementById('textOutput').innerHTML = 'Congratulations!!!';
            tentativas++;
            document.getElementById('attempts').innerHTML = tentativas;
            document.getElementById('inputBox').setAttribute('Readonly', 'Readonly')
        }
    }else{
        document.getElementById('textOutput').innerHTML ="You loose! The Secret Number was "+computerNumber;
        document.getElementById('inputBox').setAttribute('Readonly', 'Readonly')
    }
    
}