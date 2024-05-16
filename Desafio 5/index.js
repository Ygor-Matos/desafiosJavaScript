const colors=['Red','Blue','Yellow','Purple','Green'];
const btn = document.getElementById('btn');

btn.addEventListener('click', function(){
    document.body.style.background = colors[randomNumber(colors.length)];
    console.log(randomNumber(colors.length))
});


function randomNumber(){
    return Math.floor(Math.random() *colors.length);
}


