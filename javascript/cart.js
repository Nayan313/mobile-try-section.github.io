let plus = document.getElementById('plus');
let itemNumber = document.getElementById('itemNumber');
let minus = document.getElementById('minus');
let inputValue = itemNumber.value;

plus.addEventListener('click', function(){
    inputValue ++;
    itemNumber.value = inputValue;
});
minus.addEventListener('click', function(){
    inputValue --;
    itemNumber.value = inputValue;
});