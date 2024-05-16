function update(){
    //recebendo os inputs
    let conta = Number(document.getElementById('yourBill').value);
    
    let porcentagem =Number(  document.getElementById('tipInput').value);

    let pessoas = Number( document.getElementById('splitInput').value);

    //fazendo cálculos
    let gorgeta = conta*porcentagem / 100; 
    let total = conta+gorgeta;
    let divisao = total/pessoas;

    //colocando os inputs na tela
    document.getElementById('tipPercent').innerHTML = porcentagem +'%';
    document.getElementById('splitValue').innerHTML = pessoas>1? pessoas+' pessoas':pessoas+"pessoa";
    document.getElementById('tipValue').innerHTML = formatMoney(gorgeta);
    document.getElementById('totalWithTip').innerHTML = formatMoney(total);
    document.getElementById('billEach').innerHTML = formatMoney(divisao);
}


function formatMoney(value){
    value = Math.ceil(value*100)/100;
    value = value.toFixed(2);
    return '$' + value;
}