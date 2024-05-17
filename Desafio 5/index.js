const colors=['Red','Blue','Yellow','Purple','Green'];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function(){
    let cor=randomNumber();
    document.body.style.background = colors[cor];
    document.getElementById('cor').innerHTML = colors[cor];
});


function randomNumber(){
    return Math.floor(Math.random() *colors.length);
}


