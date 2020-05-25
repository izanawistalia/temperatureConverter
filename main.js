const val = document.querySelector('.value');
const kelvin = document.querySelector('#k');
const fahrenheit = document.querySelector('#f');

//Event organizer
val.addEventListener('input', function(){
    fahrenheit.innerHTML=val.value*(9/5)+32;
    kelvin.innerHTML=val.value+273.15;
})